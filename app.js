const STORAGE_KEY = "bluebar_inventory_v31";

const inventory = {
  liquors: [],
  liqueurs: [],
  fortified: [],
  aromatized: [],
  sparkling: [],
  bitters: [],
  mixers: [],
  perishables: []
};

function loadInventory() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    Object.keys(inventory).forEach(key => {
      if (Array.isArray(data[key])) inventory[key] = data[key];
    });
  } catch (e) {
    console.warn("Inventory parse error", e);
  }
}

function saveInventory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
}

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
    if (!container) return;
    container.innerHTML = "";
    inventory[key].forEach(item => {
      const pill = document.createElement("div");
      pill.className = "inventory-pill";
      pill.textContent = item;
      container.appendChild(pill);
    });
  });
}

// Very simple classifier for now; we’ll expand with your full mapping logic.
function classifyItem(name) {
  const n = name.toLowerCase();

  if (n.includes("champagne") || n.includes("prosecco") || n.includes("cava")) {
    return "sparkling";
  }
  if (n.includes("lillet") || n.includes("cocchi")) {
    return "aromatized";
  }
  if (n.includes("vermouth") || n.includes("sherry") || n.includes("port")) {
    return "fortified";
  }
  if (n.includes("campari") || n.includes("aperol") || n.includes("amaro")) {
    return "liqueurs";
  }
  if (n.includes("bitters")) {
    return "bitters";
  }
  if (n.includes("soda") || n.includes("tonic") || n.includes("ginger beer") || n.includes("juice")) {
    return "mixers";
  }
  // default: liquors
  return "liquors";
}

function addItem(name) {
  const category = classifyItem(name);
  inventory[category].push(name);
  saveInventory();
  renderInventory();
}

function initAddItem() {
  const input = document.getElementById("add-item-input");
  const button = document.getElementById("add-item-button");

  button.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;
    addItem(value);
    input.value = "";
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") button.click();
  });
}

function hasIngredient(ing) {
  const list = inventory[ing.category] || [];
  return list.some(x => x.toLowerCase().includes(ing.name.toLowerCase()));
}

function computeStatus(recipe) {
  let missing = 0;
  recipe.ingredients.forEach(ing => {
    if (!hasIngredient(ing)) missing++;
  });
  if (missing === 0) return "Ready Now";
  if (missing === 1) return "One Ingredient Away";
  return `${missing} Ingredients Away`;
}

function renderRecipes() {
  const list = document.getElementById("recipe-list");
  list.innerHTML = "";
  RECIPES.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    const main = document.createElement("div");
    main.className = "recipe-main";

    const title = document.createElement("div");
    title.className = "recipe-title";
    title.textContent = recipe.name;

    const status = document.createElement("div");
    status.className = "recipe-status";
    status.textContent = computeStatus(recipe);

    main.appendChild(title);
    main.appendChild(status);
    card.appendChild(main);

    card.addEventListener("click", () => openRecipeModal(recipe));

    list.appendChild(card);
  });
}

function openRecipeModal(recipe) {
  const modal = document.getElementById("recipe-modal");
  document.getElementById("modal-title").textContent = recipe.name;
  document.getElementById("modal-subtitle").textContent = computeStatus(recipe);

  const ingList = document.getElementById("modal-ingredients");
  ingList.innerHTML = "";
  recipe.ingredients.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = `${ing.name}`;
    ingList.appendChild(li);
  });

  // substitution notes placeholder – we’ll wire your full logic here
  document.getElementById("modal-substitutions").textContent =
    "Substitution notes will appear here based on your inventory and preferences.";

  document.getElementById("modal-instructions").textContent = recipe.instructions;

  modal.classList.remove("hidden");
}

function initModal() {
  const modal = document.getElementById("recipe-modal");
  const close = document.getElementById("modal-close");
  close.addEventListener("click", () => modal.classList.add("hidden"));
}

document.addEventListener("DOMContentLoaded", () => {
  loadInventory();
  renderInventory();
  initAddItem();
  renderRecipes();
  initModal();
});
