// -----------------------------
// INVENTORY ARRAYS
// -----------------------------
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

// Track active perishables
const activePerishables = new Set();

// -----------------------------
// THEME TOGGLE
// -----------------------------
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

// -----------------------------
// SECTION HEADER ICONS
// -----------------------------
document.getElementById("liquor-header-icon").innerHTML = liquorBottleSVG("#007aff");
document.getElementById("mixer-header-icon").innerHTML = mixerCanSVG("#C0C0C0");
document.getElementById("perishable-header-icon").innerHTML = leafSVG("#32CD32");

// -----------------------------
// RENDER LIQUORS & MIXERS
// -----------------------------
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
      div.innerHTML = mixerCanSVG("#C0C0C0") + `<div class="icon-label">${item}</div>`;
      mixerGrid.appendChild(div);
    });
}

// Initial render
renderLiquors();
renderMixers();

// -----------------------------
// PERISHABLE BUTTONS + ICONS
// -----------------------------
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

// Initial render of perishable buttons
renderPerishableButtons();

// -----------------------------
// INVENTORY SEARCH
// -----------------------------
const searchInput = document.getElementById("inventory-search");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim();
  renderLiquors(term);
  renderMixers(term);
  renderPerishableButtons(term);
});

// -----------------------------
// RECIPE ENGINE
// -----------------------------
const recipesReadyList = document.getElementById("recipes-ready");
const recipesOneAwayList = document.getElementById("recipes-one-away");

function updateRecipes() {
  recipesReadyList.innerHTML = "";
  recipesOneAwayList.innerHTML = "";

  const inventoryLiquors = new Set(liquors);
  const inventoryMixers = new Set(mixers);
  const inventoryPerishables = new Set(activePerishables);

  RECIPES.forEach(recipe => {
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

    if (missing.length === 0) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="recipe-name">${recipe.name}</span>`;
      li.addEventListener("click", () => showRecipeDetails(recipe));
      recipesReadyList.appendChild(li);
    } else if (missing.length === 1) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="recipe-name">${recipe.name}</span>
        <span class="recipe-missing">Missing: ${missing[0]}</span>
      `;
      li.addEventListener("click", () => showRecipeDetails(recipe));
      recipesOneAwayList.appendChild(li);
    }
  });
}

// Simple detail display (alert for now)
function showRecipeDetails(recipe) {
  const text = `
${recipe.name}

Liquors: ${recipe.liquors.join(", ") || "None"}
Mixers: ${recipe.mixers.join(", ") || "None"}
Perishables: ${recipe.perishables.join(", ") || "None"}
  `.trim();
  alert(text);
}

// Initial recipe calculation
updateRecipes();
