// INVENTORY ARRAYS
const liquors = ["Vodka", "Gin", "Rum", "Tequila", "Whiskey"];
const mixers = ["Tonic Water", "Ginger Beer", "Club Soda", "Cola", "Orange Juice"];

const perishables = [
  "Lime",
  "Lemon",
  "Orange",
  "Pineapple",
  "Cream",
  "Coconut Milk",
  "Cherry Juice",
  "Pomegranate Juice",
  "Basil",
  "Cucumbers",
  "Blueberries"
];

const activePerishables = new Set();

// THEME TOGGLE
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("theme-dark")) {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    themeToggle.textContent = "Light";
  } else {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    themeToggle.textContent = "Dark";
  }
});

// HEADER ICONS
document.getElementById("liquor-header-icon").innerHTML = liquorBottleSVG("#007aff");
document.getElementById("mixer-header-icon").innerHTML = mixerCanSVG("#c0c0c0");
document.getElementById("perishable-header-icon").innerHTML = leafSVG("#32cd32");

// INVENTORY RENDERING
const liquorGrid = document.getElementById("liquor-grid");
const mixerGrid = document.getElementById("mixer-grid");

function renderLiquors(filter = "") {
  liquorGrid.innerHTML = "";
  liquors
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "icon-item";
      div.innerHTML = liquorBottleSVG("#007aff") + `<div class="icon-label">${item}</div>`;
      liquorGrid.appendChild(div);
    });
}

function renderMixers(filter = "") {
  mixerGrid.innerHTML = "";
  mixers
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "icon-item";
      div.innerHTML = mixerCanSVG("#c0c0c0") + `<div class="icon-label">${item}</div>`;
      mixerGrid.appendChild(div);
    });
}

renderLiquors();
renderMixers();

// PERISHABLE BUTTONS + ICONS
const perishableGrid = document.getElementById("perishable-grid");
const perishableContainer = document.getElementById("perishables-container");

function renderPerishableButtons(filter = "") {
  perishableContainer.innerHTML = "";
  perishables
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {
      const btn = document.createElement("button");
      btn.className = "perishable-button";
      btn.textContent = item;

      if (activePerishables.has(item)) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {
          activePerishables.add(item);
          addPerishableIcon(item);
        } else {
          activePerishables.delete(item);
          removePerishableIcon(item);
        }
        updateRecipes();
      });

      perishableContainer.appendChild(btn);
    });
}

function addPerishableIcon(item) {
  const meta = perishableIcons[item];
  if (!meta) return;
  const id = `perishable-${item.replace(/\s+/g, "")}`;
  if (document.getElementById(id)) return;

  const div = document.createElement("div");
  div.className = "icon-item";
  div.id = id;
  div.innerHTML = meta.svg(meta.color) + `<div class="icon-label">${item}</div>`;
  perishableGrid.appendChild(div);
}

function removePerishableIcon(item) {
  const id = `perishable-${item.replace(/\s+/g, "")}`;
  const el = document.getElementById(id);
  if (el) el.remove();
}

renderPerishableButtons();

// INVENTORY SEARCH
const searchInput = document.getElementById("inventory-search");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim();
  renderLiquors(term);
  renderMixers(term);
  renderPerishableButtons(term);
});

// RECIPE ENGINE
const recipesReadyList = document.getElementById("recipes-ready");
const recipesOneAwayList = document.getElementById("recipes-one-away");
const recipesFavoritesList = document.getElementById("recipes-favorites");

const filterLiquorSelect = document.getElementById("filter-liquor");
const filterMixerSelect = document.getElementById("filter-mixer");

let selectedLiquorFilter = "";
let selectedMixerFilter = "";

// FAVORITES PERSISTENCE
function loadFavorites() {
  try {
    const raw = localStorage.getItem("bluebar_favorites");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveFavorites(favs) {
  try {
    localStorage.setItem("bluebar_favorites", JSON.stringify(favs));
  } catch {
    // ignore
  }
}

let favoriteNames = new Set(loadFavorites());

// FILTER HANDLERS
filterLiquorSelect.addEventListener("change", () => {
  selectedLiquorFilter = filterLiquorSelect.value;
  updateRecipes();
});

filterMixerSelect.addEventListener("change", () => {
  selectedMixerFilter = filterMixerSelect.value;
  updateRecipes();
});

// UPDATE RECIPES
function updateRecipes() {
  recipesReadyList.innerHTML = "";
  recipesOneAwayList.innerHTML = "";
  recipesFavoritesList.innerHTML = "";

  const inventoryLiquors = new Set(liquors);
  const inventoryMixers = new Set(mixers);
  const inventoryPerishables = new Set(activePerishables);

  const favoritesArray = [];

  RECIPES.forEach(recipe => {
    // Filter by liquor/mixer
    if (selectedLiquorFilter) {
      if (!recipe.liquors.includes(selectedLiquorFilter)) return;
    }
    if (selectedMixerFilter) {
      if (!recipe.mixers.includes(selectedMixerFilter)) return;
    }

    const missing = [];

    recipe.liquors.forEach(l => {
      if (!inventoryLiquors.has(l)) missing.push(l);
    });

    recipe.mixers.forEach(m => {
      if (!inventoryMixers.has(m)) missing.push(m);
    });

    recipe.perishables.forEach(p => {
      if (!inventoryPerishables.has(p)) missing.push(p);
    });

    const isFavorite = favoriteNames.has(recipe.name);

    const li = document.createElement("li");
    li.classList.toggle("favorite", isFavorite);

    let inner = `<span class="recipe-name">${recipe.name}</span>`;
    if (missing.length === 1) {
      inner += `<span class="recipe-missing">Missing: ${missing[0]}</span>`;
    } else if (missing.length > 1) {
      inner += `<span class="recipe-missing">Missing: ${missing.length} items</span>`;
    }

    const favBtn = document.createElement("button");
    favBtn.className = "favorite-toggle";
    favBtn.innerHTML = heartSVG(isFavorite ? "#ffcc00" : "#888888");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(recipe.name);
    });

    li.innerHTML = inner;
    li.appendChild(favBtn);

    li.addEventListener("click", () => showRecipeDetails(recipe));

    if (missing.length === 0) {
      recipesReadyList.appendChild(li);
    } else if (missing.length === 1) {
      recipesOneAwayList.appendChild(li);
    }

    if (isFavorite) {
      favoritesArray.push(recipe);
    }
  });

  // Render favorites list
  favoritesArray.forEach(recipe => {
    const li = document.createElement("li");
    li.classList.add("favorite");
    li.innerHTML = `<span class="recipe-name">${recipe.name}</span>`;
    li.addEventListener("click", () => showRecipeDetails(recipe));
    recipesFavoritesList.appendChild(li);
  });
}

function toggleFavorite(name) {
  if (favoriteNames.has(name)) {
    favoriteNames.delete(name);
  } else {
    favoriteNames.add(name);
  }
  saveFavorites(Array.from(favoriteNames));
  updateRecipes();
}

// RECIPE DETAILS (simple alert for now)
function showRecipeDetails(recipe) {
  const text = `
${recipe.name}

Liquors: ${recipe.liquors.join(", ") || "None"}
Mixers: ${recipe.mixers.join(", ") || "None"}
Perishables: ${recipe.perishables.join(", ") || "None"}
  `.trim();
  alert(text);
}

// SURPRISE ME BUTTON
const surpriseButton = document.getElementById("surprise-button");
const surpriseIconSpan = document.querySelector(".surprise-icon");
surpriseIconSpan.innerHTML = surpriseSVG("#ffcc00");

surpriseButton.addEventListener("click", () => {
  const filtered = RECIPES.filter(recipe => {
    if (selectedLiquorFilter && !recipe.liquors.includes(selectedLiquorFilter)) return false;
    if (selectedMixerFilter && !recipe.mixers.includes(selectedMixerFilter)) return false;
    return true;
  });

  const pool = filtered.length ? filtered : RECIPES;
  const random = pool[Math.floor(Math.random() * pool.length)];
  showRecipeDetails(random);
});

// ADD YOUR OWN RECIPE UI
const newRecipeNameInput = document.getElementById("new-recipe-name");
const newRecipeLiquorsInput = document.getElementById("new-recipe-liquors");
const newRecipeMixersInput = document.getElementById("new-recipe-mixers");
const newRecipePerishablesInput = document.getElementById("new-recipe-perishables");
const addRecipeButton = document.getElementById("add-recipe-button");

addRecipeButton.addEventListener("click", () => {
  const name = newRecipeNameInput.value.trim();
  if (!name) {
    alert("Please enter a recipe name.");
    return;
  }

  const liquorsList = newRecipeLiquorsInput.value
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const mixersList = newRecipeMixersInput.value
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const perishablesList = newRecipePerishablesInput.value
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  addUserRecipe({
    name,
    liquors: liquorsList,
    mixers: mixersList,
    perishables: perishablesList
  });

  newRecipeNameInput.value = "";
  newRecipeLiquorsInput.value = "";
  newRecipeMixersInput.value = "";
  newRecipePerishablesInput.value = "";

  alert("Recipe saved!");
  updateRecipes();
});

// INITIAL RECIPE RENDER
updateRecipes();
