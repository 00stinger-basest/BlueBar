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

  input.value = "";
}

document.getElementById("add-item-button").addEventListener("click", addItem);
document.getElementById("add-item-input").addEventListener("keypress", e => {
  if (e.key === "Enter") addItem();
});

/* ============================================================
   RECIPE FILTERING
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
   RENDER RECIPES
   ============================================================ */

function renderRecipes(filter = "all") {
  const list = document.getElementById("recipe-list");
  list.innerHTML = "";

  recipes.forEach(recipe => {
    const ready = hasAllIngredients(recipe);
    const oneAway = isOneAway(recipe);

    if (filter === "ready" && !ready) return;
    if (filter === "one" && !oneAway) return;

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

document.getElementById("filter-ready").addEventListener("click", () => {
  renderRecipes("ready");
});
document.getElementById("filter-one-away").addEventListener("click", () => {
  renderRecipes("one");
});
document.getElementById("surprise-me").addEventListener("click", () => {
  const r = recipes[Math.floor(Math.random() * recipes.length)];
  openRecipeModal(r);
});

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
