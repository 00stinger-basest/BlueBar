/* ============================================================
   BlueBar 3.1 — Application Logic
   Inventory, classification, rendering, recipes, modal
   ============================================================ */

/* ============================================================
   INVENTORY STORAGE
   ============================================================ */

let inventory = {
  liquors: [],
  liqueurs: [],
  fortified: [],
  aromatized: [],
  sparkling: [],
  bitters: [],
  mixers: [],
  perishables: []
};

function saveInventory() {
  localStorage.setItem("bluebar_inventory", JSON.stringify(inventory));
}

function loadInventory() {
  const data = localStorage.getItem("bluebar_inventory");
  if (data) inventory = JSON.parse(data);
}

/* ============================================================
   CLASSIFICATION LOGIC
   ============================================================ */

function classifyItem(name) {
  const n = name.toLowerCase().trim();

  // PERISHABLES
  const perishables = [
    "lemon", "lemons",
    "lime", "limes",
    "orange", "oranges",
    "grapefruit", "grapefruits",
    "pineapple", "pineapples",
    "mint", "basil", "rosemary",
    "cucumber", "cucumbers",
    "strawberry", "strawberries",
    "blueberry", "blueberries",
    "cream", "half and half",
    "egg", "eggs"
  ];
  if (perishables.some(p => n.includes(p))) return "perishables";

  // BITTERS
  if (n.includes("bitters")) return "bitters";

  // SPARKLING
  if (
    n.includes("champagne") ||
    n.includes("prosecco") ||
    n.includes("cava") ||
    n.includes("sparkling")
  ) {
    return "sparkling";
  }

  // AROMATIZED WINES
  if (
    n.includes("lillet") ||
    n.includes("cocchi") ||
    n.includes("dubon") ||
    n.includes("kina")
  ) {
    return "aromatized";
  }

  // FORTIFIED WINES
  if (
    n.includes("vermouth") ||
    n.includes("sherry") ||
    n.includes("port") ||
    n.includes("madeira")
  ) {
    return "fortified";
  }

  // MIXERS
  const mixers = [
    "soda", "club soda", "tonic",
    "ginger beer", "cola", "juice",
    "orange juice", "cranberry juice",
    "pineapple juice", "grapefruit juice",
    "tomato juice", "coffee", "espresso",
    "simple syrup", "honey syrup",
    "agave", "grenadine", "orgeat",
    "falernum", "syrup"
  ];
  if (mixers.some(m => n.includes(m))) return "mixers";

  // LIQUEURS
  const liqueurKeywords = [
    "liqueur", "cointreau", "triple sec", "curaçao", "curacao",
    "campari", "aperol", "amaro", "montenegro", "fernet",
    "chartreuse", "st-germain", "elderflower",
    "crème de cacao", "creme de cacao",
    "crème de menthe", "creme de menthe",
    "cassis", "maraschino", "drambuie", "galliano",
    "baileys", "coffee liqueur", "cream liqueur"
  ];
  if (liqueurKeywords.some(k => n.includes(k))) return "liqueurs";

  // DEFAULT → LIQUORS
  return "liquors";
}

/* ============================================================
   RENDER INVENTORY
   ============================================================ */

function renderInventory() {
  const map = {
    liquors: "inventory-liquors",
    liqueurs: "inventory-liqueurs",
    fortified: "inventory-fortified",
    aromatized: "inventory-aromatized",
    sparkling: "inventory-sparkling",
    bitters: "inventory-bitters",
    mixers: "inventory-mixers",
    perishables: "inventory-perishables"
  };

  Object.entries(map).forEach(([key, id]) => {
    const container = document.getElementById(id);
    container.innerHTML = "";

    inventory[key].forEach((item, index) => {
      const pill = document.createElement("div");
      pill.className = "inventory-pill";
      pill.textContent = item;

      // CLICK TO REMOVE
      pill.addEventListener("click", () => {
        inventory[key].splice(index, 1);
        saveInventory();
        renderInventory();
        renderRecipes(); // update recipe availability
      });

      container.appendChild(pill);
    });
  });
}

/* ============================================================
   ADD ITEM
   ============================================================ */

function addItem() {
  const input = document.getElementById("add-item-input");
  const value = input.value.trim();
  if (!value) return;

  const category = classifyItem(value);
  inventory[category].push(value);

  saveInventory();
  renderInventory();
  renderRecipes();

  input.value = "";
}

document.getElementById("add-item-button").addEventListener("click", addItem);
document.getElementById("add-item-input").addEventListener("keypress", e => {
  if (e.key === "Enter") addItem();
});

/* ============================================================
   RECIPE FILTERING HELPERS
   ============================================================ */

function hasAllIngredients(recipe) {
  return recipe.ingredients.every(i => isInInventory(i));
}

function isInInventory(ingredient) {
  const all = Object.values(inventory).flat();
  return all.some(item => item.toLowerCase() === ingredient.toLowerCase());
}

function isOneAway(recipe) {
  const missing = recipe.ingredients.filter(i => !isInInventory(i));
  return missing.length === 1;
}

/* ============================================================
   FILTER STATE
   ============================================================ */

let currentMode = "all"; // all | ready | one

/* ============================================================
   RENDER RECIPES (FULL FILTER PIPELINE)
   ============================================================ */

function renderRecipes() {
  const list = document.getElementById("recipe-list");
  list.innerHTML = "";

  const search = document.getElementById("recipe-search").value.toLowerCase();
  const base = document.getElementById("filter-base").value;
  const flavor = document.getElementById("filter-flavor").value;

  recipes.forEach(recipe => {
    const ready = hasAllIngredients(recipe);
    const oneAway = isOneAway(recipe);

    // MODE FILTER
    if (currentMode === "ready" && !ready) return;
    if (currentMode === "one" && !oneAway) return;

    // SEARCH FILTER
    const matchesSearch =
      recipe.name.toLowerCase().includes(search) ||
      recipe.ingredients.some(i => i.toLowerCase().includes(search));
    if (!matchesSearch) return;

    // BASE FILTER
    if (base && recipe.base !== base) return;

    // FLAVOR FILTER
    if (flavor && !recipe.tags.includes(flavor)) return;

    // CARD
    const card = document.createElement("div");
    card.className = "recipe-card";

    const main = document.createElement("div");
    main.className = "recipe-main";

    const title = document.createElement("div");
    title.className = "recipe-title";
    title.textContent = recipe.name;

    const status = document.createElement("div");
    status.className = "recipe-status";
    status.textContent = ready
      ? "Ready to make"
      : oneAway
      ? "One ingredient away"
      : "Missing ingredients";

    main.appendChild(title);
    main.appendChild(status);
    card.appendChild(main);

    card.addEventListener("click", () => openRecipeModal(recipe));

    list.appendChild(card);
  });
}

/* ============================================================
   BUTTONS & FILTER EVENTS
   ============================================================ */

document.getElementById("filter-all").addEventListener("click", () => {
  currentMode = "all";
  renderRecipes();
});

document.getElementById("filter-ready").addEventListener("click", () => {
  currentMode = "ready";
  renderRecipes();
});

document.getElementById("filter-one-away").addEventListener("click", () => {
  currentMode = "one";
  renderRecipes();
});

document.getElementById("surprise-me").addEventListener("click", () => {
  const r = recipes[Math.floor(Math.random() * recipes.length)];
  openRecipeModal(r);
});

// SEARCH + DROPDOWNS
document.getElementById("recipe-search").addEventListener("input", renderRecipes);
document.getElementById("filter-base").addEventListener("change", renderRecipes);
document.getElementById("filter-flavor").addEventListener("change", renderRecipes);

/* ============================================================
   MODAL
   ============================================================ */

function openRecipeModal(recipe) {
  document.getElementById("modal-title").textContent = recipe.name;
  document.getElementById("modal-subtitle").textContent = recipe.glass || "";

  const ingList = document.getElementById("modal-ingredients");
  ingList.innerHTML = "";
  recipe.ingredients.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ingList.appendChild(li);
  });

  document.getElementById("modal-substitutions").textContent =
    recipe.substitutions || "No substitution notes.";

  document.getElementById("modal-instructions").textContent =
    recipe.instructions || "";

  document.getElementById("recipe-modal").classList.remove("hidden");
}

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("recipe-modal").classList.add("hidden");
});

/* ============================================================
   INIT
   ============================================================ */

loadInventory();
renderInventory();
renderRecipes();
