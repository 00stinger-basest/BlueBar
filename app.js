// app.js

import { recipes } from "./recipes.js";
import { icons } from "./icons.js";

// ------------------------------
// STATE
// ------------------------------

const state = {
  inventory: [], // { name, category, type }
  favorites: new Set(), // recipe names
  showFavoritesOnly: false
};

// ------------------------------
// INVENTORY CLASSIFICATION
// ------------------------------

const typeMap = [
  { keywords: ["maker's mark", "bourbon"], type: "Bourbon" },
  { keywords: ["rye"], type: "Rye" },
  { keywords: ["gin"], type: "Gin" },
  { keywords: ["vodka"], type: "Vodka" },
  { keywords: ["rum"], type: "Rum" },
  { keywords: ["tequila"], type: "Tequila" },
  { keywords: ["mezcal"], type: "Mezcal" },
  { keywords: ["scotch"], type: "Scotch" },
  { keywords: ["cognac", "brandy"], type: "Brandy/Cognac" }
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

  // Clickable sections
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
// INVENTORY MATCHING FOR RECIPES
// ------------------------------

function findInventoryMatchesForIngredient(ingredientName) {
  const lower = ingredientName.toLowerCase();

  // Map ingredient to type
  let type = "Other";
  if (lower.includes("bourbon")) type = "Bourbon";
  else if (lower.includes("rye")) type = "Rye";
  else if (lower.includes("gin")) type = "Gin";
  else if (lower.includes("vodka")) type = "Vodka";
  else if (lower.includes("rum")) type = "Rum";
  else if (lower.includes("tequila")) type = "Tequila";
  else if (lower.includes("mezcal")) type = "Mezcal";
  else if (lower.includes("scotch")) type = "Scotch";
  else if (lower.includes("cognac") || lower.includes("brandy")) type = "Brandy/Cognac";

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

function renderRecipes() {
  const container = document.getElementById("recipes");
  if (!container) return;

  let list = recipes;

  if (state.showFavoritesOnly) {
    list = list.filter(r => state.favorites.has(r.name));
  }

  container.innerHTML = `
    <h2>Recipes</h2>
    <div class="recipe-grid">
      ${list.map(renderRecipeCardHTML).join("")}
    </div>
  `;

  // Attach events (favorites, hover animations)
  container.querySelectorAll(".recipe-card").forEach(card => {
    const name = card.getAttribute("data-name");

    // Hover effect (CSS handles visuals)
    card.addEventListener("mouseenter", () => {
      card.classList.add("card-hover");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-hover");
    });

    // Favorite toggle
    const favBtn = card.querySelector(".favorite-toggle");
    if (favBtn) {
      favBtn.addEventListener("click", e => {
        e.stopPropagation();
        toggleFavorite(name);
      });
    }

    // Simple entry animation
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
        <button class="favorite-toggle" aria-label="Toggle favorite">
          <span class="favorite-icon">
            ${isFavorite ? icons.heart : icons.heartOutline}
          </span>
        </button>
      </div>
      <p class="recipe-meta">
        Base: ${recipe.base} · Glass: ${recipe.glass}
      </p>
      <div class="recipe-body">
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

        <h4>On hand (optional)</h4>
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
              .map(
                ing => `
              <li>${ing.amount} ${ing.name}</li>
            `
              )
              .join("")}
          </ul>
        `
        }

        <h4>Instructions</h4>
        <p class="recipe-instructions">${recipe.instructions}</p>

        <h4>Substitutions</h4>
        <p class="recipe-substitutions">${recipe.substitutions}</p>

        <div class="recipe-tags">
          ${recipe.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

// ------------------------------
// INIT
// ------------------------------

function init() {
  setupFavoritesToggle();
  renderInventory();
  renderRecipes();

  // Example: pre-load one inventory item so you can see mapping
  addInventoryItem("Maker's Mark 47", "Liquors & Spirits");
}

document.addEventListener("DOMContentLoaded", init);
