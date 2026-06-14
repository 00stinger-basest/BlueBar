// ==============================
// APP.JS — BlueBar Application Logic
// ==============================
//
// Requires:
//   - icons.js  (icons object)
//   - recipes.js (recipes array with canonical measurements)
//   - index.html with containers:
//       #inventory
//       #inventory-detail
//       #recipes
//       #favoritesToggle
//       #searchInput
//       #filterBase
//       #filterFlavor
//
// ==============================

// ------------------------------
// STATE
// ------------------------------

const state = {
  inventory: [],              // { name, category, type }
  favorites: new Set(),       // recipe names
  showFavoritesOnly: false,
  searchQuery: "",
  filterBase: "All",
  filterFlavor: "All"
};

// ------------------------------
// INVENTORY CLASSIFICATION MAP
// ------------------------------

const typeMap = [
  { type: "Bourbon", keywords: ["bourbon", "maker", "four roses", "woodford"] },
  { type: "Rye", keywords: ["rye"] },
  { type: "Gin", keywords: ["gin", "tanqueray", "hendrick"] },
  { type: "Vodka", keywords: ["vodka", "tito", "grey goose"] },
  { type: "Rum", keywords: ["rum"] },
  { type: "Tequila", keywords: ["tequila"] },
  { type: "Mezcal", keywords: ["mezcal"] },
  { type: "Scotch", keywords: ["scotch"] },
  { type: "Brandy/Cognac", keywords: ["brandy", "cognac"] }
];

function classifyInventoryItem(name) {
  const lower = name.toLowerCase();
  for (const entry of typeMap) {
    if (entry.keywords.some(k => lower.includes(k))) {
      return entry.type;
    }
  }
  return "Other";
}

// ------------------------------
// ADD INVENTORY ITEM
// ------------------------------

function addInventoryItem(name, category = "Liquors & Spirits") {
  const type = classifyInventoryItem(name);
  state.inventory.push({ name, category, type });
  renderInventory();
  renderRecipes();
}

// ------------------------------
// INVENTORY RENDERING
// ------------------------------

function groupInventoryByType() {
  const byType = {};
  for (const item of state.inventory) {
    if (!byType[item.type]) byType[item.type] = [];
    byType[item.type].push(item);
  }
  return byType;
}

function renderInventory() {
  const container = document.getElementById("inventory");
  if (!container) return;

  const byType = groupInventoryByType();

  container.innerHTML = `
    <h2>Inventory</h2>
    <div class="inventory-sections">
      ${Object.keys(byType)
        .map(
          type => `
        <div class="inventory-section" data-type="${type}">
          <h3>${type}</h3>
          <p class="inventory-section-hint">Click to view items</p>
        </div>
      `
        )
        .join("")}
    </div>
    <div id="inventory-detail"></div>
  `;

  container.querySelectorAll(".inventory-section").forEach(section => {
    section.addEventListener("click", () => {
      const type = section.getAttribute("data-type");
      renderInventoryDetail(type);
    });
  });
}

function renderInventoryDetail(type) {
  const detail = document.getElementById("inventory-detail");
  if (!detail) return;

  const items = state.inventory.filter(i => i.type === type);

  detail.innerHTML = `
    <h3>${type}</h3>
    <ul class="inventory-list">
      ${items.map(i => `<li>${i.name}</li>`).join("")}
    </ul>
  `;
}

// ------------------------------
// FAVORITES
// ------------------------------

function toggleFavorite(recipeName) {
  if (state.favorites.has(recipeName)) {
    state.favorites.delete(recipeName);
  } else {
    state.favorites.add(recipeName);
  }
  renderRecipes();
}

function setupFavoritesToggle() {
  const toggle = document.getElementById("favoritesToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    toggle.classList.toggle("active", state.showFavoritesOnly);
    renderRecipes();
  });
}

// ------------------------------
// SEARCH + FILTERS
// ------------------------------

function setupSearchAndFilters() {
  const searchInput = document.getElementById("searchInput");
  const filterBase = document.getElementById("filterBase");
  const filterFlavor = document.getElementById("filterFlavor");

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      state.searchQuery = e.target.value.toLowerCase();
      renderRecipes();
    });
  }

  if (filterBase) {
    filterBase.addEventListener("change", e => {
      state.filterBase = e.target.value;
      renderRecipes();
    });
  }

  if (filterFlavor) {
    filterFlavor.addEventListener("change", e => {
      state.filterFlavor = e.target.value;
      renderRecipes();
    });
  }
}

// ------------------------------
// INVENTORY MATCHING
// ------------------------------

function findInventoryMatchesForIngredient(ingredientName) {
  const lower = ingredientName.toLowerCase();

  let type = "Other";
  if (lower.includes("bourbon")) type = "Bourbon";
  else if (lower.includes("rye")) type = "Rye";
  else if (lower.includes("gin")) type = "Gin";
  else if (lower.includes("vodka")) type = "Vodka";
  else if (lower.includes("rum")) type = "Rum";
  else if (lower.includes("tequila")) type = "Tequila";
  else if (lower.includes("mezcal")) type = "Mezcal";
  else if (lower.includes("scotch")) type = "Scotch";
  else if (lower.includes("cognac") || lower.includes("brandy"))
    type = "Brandy/Cognac";

  return state.inventory.filter(item => item.type === type);
}

function getMissingIngredients(recipe) {
  const missing = [];
  for (const ing of recipe.ingredients) {
    const matches = findInventoryMatchesForIngredient(ing.name);
    if (matches.length === 0) {
      missing.push(ing);
    }
  }
  return missing;
}

// ------------------------------
// RECIPE RENDERING
// ------------------------------

function recipeMatchesFilters(recipe) {
  if (state.showFavoritesOnly && !state.favorites.has(recipe.name)) {
    return false;
  }

  if (state.searchQuery) {
    const q = state.searchQuery;
    const matchesName = recipe.name.toLowerCase().includes(q);
    const matchesTags = recipe.tags.some(t => t.toLowerCase().includes(q));
    if (!matchesName && !matchesTags) return false;
  }

  if (state.filterBase !== "All" && recipe.base !== state.filterBase) {
    return false;
  }

  if (
    state.filterFlavor !== "All" &&
    !recipe.tags.includes(state.filterFlavor)
  ) {
    return false;
  }

  return true;
}

function renderRecipes() {
  const container = document.getElementById("recipes");
  if (!container) return;

  const list = recipes.filter(recipeMatchesFilters);

  container.innerHTML = `
    <h2>Recipes</h2>
    <div class="recipe-grid">
      ${list.map(renderRecipeCardHTML).join("")}
    </div>
  `;

  container.querySelectorAll(".recipe-card").forEach(card => {
    const name = card.getAttribute("data-name");

    card.addEventListener("mouseenter", () => {
      card.classList.add("card-hover");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-hover");
    });

    const favBtn = card.querySelector(".favorite-toggle");
    if (favBtn) {
      favBtn.addEventListener("click", e => {
        e.stopPropagation();
        toggleFavorite(name);
      });
    }

    requestAnimationFrame(() => {
      card.classList.add("card-animate");
    });
  });
}

function renderRecipeCardHTML(recipe) {
  const isFavorite = state.favorites.has(recipe.name);
  const missing = getMissingIngredients(recipe);

  return `
    <div class="recipe-card" data-name="${recipe.name}">
      <div class="recipe-header">
        <h3>${recipe.name}</h3>
        <button class="favorite-toggle">
          ${isFavorite ? icons.heart : icons.heartOutline}
        </button>
      </div>

      <p class="recipe-meta">
        Base: ${recipe.base} · Glass: ${recipe.glass}
      </p>

      <h4>Ingredients</h4>
      <ul class="ingredient-list">
        ${recipe.ingredients
          .map(
            ing => `
          <li>
            <span class="ingredient-amount">${ing.amount}</span>
            <span class="ingredient-name">${ing.name}</span>
          </li>
        `
          )
          .join("")}
      </ul>

      <h4>On hand</h4>
      <ul class="onhand-list">
        ${recipe.ingredients
          .map(ing => {
            const matches = findInventoryMatchesForIngredient(ing.name);
            if (matches.length === 0) {
              return `<li>${ing.name}: <span class="onhand-none">None</span></li>`;
            }
            return `<li>${ing.name}: ${matches
              .map(m => `<span class="onhand-item">${m.name}</span>`)
              .join(", ")}</li>`;
          })
          .join("")}
      </ul>

      <h4>Missing ingredients</h4>
      ${
        missing.length === 0
          ? `<p class="missing-none">You have everything for this recipe.</p>`
          : `
        <ul class="missing-list">
          ${missing
            .map(ing => `<li>${ing.amount} ${ing.name}</li>`)
            .join("")}
        </ul>
      `
      }

      <h4>Instructions</h4>
      <p>${recipe.instructions}</p>

      <h4>Substitutions</h4>
      <p>${recipe.substitutions}</p>

      <div class="recipe-tags">
        ${recipe.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `;
}

// ------------------------------
// INIT
// ------------------------------

function init() {
  setupFavoritesToggle();
  setupSearchAndFilters();
  renderInventory();
  renderRecipes();
}

document.addEventListener("DOMContentLoaded", init);
