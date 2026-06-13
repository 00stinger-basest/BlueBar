// Simple local storage keys
const STORAGE_KEY_INVENTORY = "bluebar_inventory";
const STORAGE_KEY_RECIPES = "bluebar_recipes";
const STORAGE_KEY_PERISHABLES = "bluebar_perishables";

// Basic in-memory state
let inventory = [];
let recipes = [];
let perishables = [];

// Default perishables list
const DEFAULT_PERISHABLES = [
  "lime juice",
  "lemon juice",
  "orange juice",
  "pineapple juice",
  "grapefruit juice",
  "fresh mint",
  "espresso"
];

// Utility: load JSON from localStorage
function loadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

// Utility: save JSON to localStorage
function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Load initial data
async function initData() {
  inventory = loadLocal(STORAGE_KEY_INVENTORY, []);
  recipes = loadLocal(STORAGE_KEY_RECIPES, []);
  perishables = loadLocal(STORAGE_KEY_PERISHABLES, []);

  if (recipes.length === 0) {
    try {
      const res = await fetch("recipes.json");
      const data = await res.json();
      recipes = data;
      saveLocal(STORAGE_KEY_RECIPES, recipes);
    } catch (e) {
      console.warn("Could not load recipes.json", e);
    }
  }

  if (perishables.length === 0) {
    perishables = [];
    saveLocal(STORAGE_KEY_PERISHABLES, perishables);
  }

  renderInventory();
  renderPerishables();
  renderDrinks();
  renderMakeList();
}

// Navigation
function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  const view = document.getElementById(id);
  if (view) view.classList.add("active");
}

// Inventory rendering
function renderInventory() {
  const list = document.getElementById("inv-items");
  list.innerHTML = "";

  const search = document.getElementById("inv-search").value.toLowerCase();

  inventory
    .filter((item) => item.name.toLowerCase().includes(search))
    .forEach((item, idx) => {
      const li = document.createElement("li");
      li.className = "inv-item";

      const left = document.createElement("div");
      left.innerHTML = `
        <div>${item.name}</div>
        <div class="inv-meta">${item.category} ${
        item.base ? "• " + item.base : ""
      } ${item.flavors && item.flavors.length ? "• " + item.flavors.join(", ") : ""}</div>
      `;

      const del = document.createElement("button");
      del.className = "inv-delete";
      del.textContent = "Remove";
      del.addEventListener("click", () => {
        inventory.splice(idx, 1);
        saveLocal(STORAGE_KEY_INVENTORY, inventory);
        renderInventory();
        renderMakeList();
      });

      li.appendChild(left);
      li.appendChild(del);
      list.appendChild(li);
    });
}

// Perishables rendering
function renderPerishables() {
  const container = document.getElementById("perishable-toggles");
  container.innerHTML = "";

  DEFAULT_PERISHABLES.forEach((p) => {
    const chip = document.createElement("button");
    chip.className = "perishable-chip";
    if (perishables.includes(p)) chip.classList.add("active");
    chip.textContent = p;
    chip.addEventListener("click", () => {
      if (perishables.includes(p)) {
        perishables = perishables.filter((x) => x !== p);
      } else {
        perishables.push(p);
      }
      saveLocal(STORAGE_KEY_PERISHABLES, perishables);
      renderPerishables();
      renderMakeList();
    });
    container.appendChild(chip);
  });
}

// Drinks rendering
function renderDrinks() {
  const list = document.getElementById("drink-items");
  list.innerHTML = "";

  const search = document.getElementById("drink-search").value.toLowerCase();
  const mainFilter = document.getElementById("filter-main").value;
  const typeFilter = document.getElementById("filter-type").value;
  const flavorFilter = document.getElementById("filter-flavor").value;

  recipes
    .filter((r) => r.name.toLowerCase().includes(search))
    .filter((r) => (mainFilter ? r.mainAlcohol === mainFilter : true))
    .filter((r) => (typeFilter ? r.type === typeFilter : true))
    .filter((r) =>
      flavorFilter ? (r.flavors || []).includes(flavorFilter) : true
    )
    .forEach((r) => {
      const li = document.createElement("li");
      li.className = "drink-card";

      const name = document.createElement("h3");
      name.className = "drink-name";
      name.textContent = r.name;

      const meta = document.createElement("div");
      meta.className = "drink-meta";
      meta.textContent = `${r.mainAlcohol || "none"} • ${r.type || "unknown"}`;

      const tags = document.createElement("div");
      tags.className = "drink-tags";
      tags.textContent = (r.flavors || []).join(", ");

      li.appendChild(name);
      li.appendChild(meta);
      li.appendChild(tags);
      list.appendChild(li);
    });
}

// What I Can Make rendering
function renderMakeList() {
  const list = document.getElementById("make-items");
  list.innerHTML = "";

  const filter = document.getElementById("make-filter").value;

  recipes.forEach((r) => {
    const { status, missing } = evaluateRecipeAvailability(r);

    if (filter === "can" && status !== "can") return;
    if (filter === "almost" && status !== "almost") return;

    const li = document.createElement("li");
    li.className = "make-card";

    const name = document.createElement("h3");
    name.className = "drink-name";
    name.textContent = r.name;

    const statusEl = document.createElement("div");
    statusEl.className = "make-status";
    statusEl.textContent =
      status === "can"
        ? "Can make"
        : status === "almost"
        ? "Almost can make"
        : "Missing ingredients";

    const missingEl = document.createElement("div");
    missingEl.className = "make-missing";
    if (missing.length) {
      missingEl.textContent = "Missing: " + missing.join(", ");
    } else {
      missingEl.textContent = "";
    }

    li.appendChild(name);
    li.appendChild(statusEl);
    li.appendChild(missingEl);
    list.appendChild(li);
  });
}

// Evaluate recipe availability
function evaluateRecipeAvailability(recipe) {
  const invNames = inventory.map((i) => i.name.toLowerCase());
  const invBases = inventory.map((i) => i.base && i.base.toLowerCase());

  let missing = [];

  recipe.ingredients.forEach((ing) => {
    const name = ing.name.toLowerCase();
    const type = ing.type || "mixer";

    if (type === "perishable") {
      if (!perishables.includes(name)) {
        missing.push(name);
      }
      return;
    }

    // Check exact name
    const hasExact = invNames.includes(name);

    // Check base spirit if defined
    const base = ing.base && ing.base.toLowerCase();
    const hasBase = base ? invBases.includes(base) : false;

    if (!hasExact && !hasBase) {
      missing.push(name);
    }
  });

  if (missing.length === 0) return { status: "can", missing };
  if (missing.length <= 2) return { status: "almost", missing };
  return { status: "missing", missing };
}

// Free-form recipe parsing (simple heuristic)
function parseRecipeText(text) {
  const lines = text.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const joined = lines.join(" ");

  // Split ingredients from instructions by first sentence break
  const parts = joined.split(/\. /);
  const ingredientsPart = parts[0];
  const instructionsPart = parts.slice(1).join(". ");

  const ingredientTokens = ingredientsPart.split(/,/).map((t) => t.trim());

  const ingredients = ingredientTokens
    .map((token) => {
      // e.g. "2 oz gin" or "0.75 oz lemon juice"
      const match = token.match(
        /([\d\.]+)\s*(oz|ml|dash|dashes)?\s*(.+)/i
      );
      if (!match) {
        return {
          name: token.toLowerCase(),
          amount: "",
          type: "mixer"
        };
      }
      const amount = match[1] + (match[2] ? " " + match[2] : "");
      const name = match[3].toLowerCase();

      let type = "mixer";
      let base = "";

      // crude classification
      const spirits = [
        "gin",
        "vodka",
        "rum",
        "tequila",
        "whiskey",
        "bourbon",
        "rye",
        "mezcal",
        "brandy"
      ];
      const perishableWords = [
        "lime juice",
        "lemon juice",
        "orange juice",
        "pineapple juice",
        "grapefruit juice",
        "espresso",
        "fresh mint"
      ];

      if (spirits.some((s) => name.includes(s))) {
        type = "spirit";
        const found = spirits.find((s) => name.includes(s));
        base =
          found === "bourbon" || found === "rye" ? "whiskey" : found;
      } else if (perishableWords.some((p) => name.includes(p))) {
        type = "perishable";
      } else if (name.includes("vermouth") || name.includes("liqueur")) {
        type = "liqueur";
      } else {
        type = "mixer";
      }

      return { name, amount, type, base };
    })
    .filter((ing) => ing.name);

  // Guess main alcohol
  const mainSpirit = ingredients.find((i) => i.type === "spirit");
  const mainAlcohol = mainSpirit ? mainSpirit.base || mainSpirit.name : "none";

  // Guess type and flavors from instructions + ingredients
  const lowerInstr = instructionsPart.toLowerCase();
  const flavors = [];
  let type = "";

  if (ingredients.some((i) => i.name.includes("lime") || i.name.includes("lemon"))) {
    flavors.push("sour", "refreshing");
    type = "sour";
  }
  if (ingredients.some((i) => i.name.includes("campari") || i.name.includes("amaro"))) {
    flavors.push("bitter");
  }
  if (ingredients.some((i) => i.name.includes("simple syrup") || i.name.includes("syrup"))) {
    flavors.push("sweet");
  }
  if (ingredients.some((i) => i.type === "spirit") && !type) {
    type = "spirit-forward";
    flavors.push("boozy");
  }
  if (lowerInstr.includes("spritz") || ingredients.some((i) => i.name.includes("soda"))) {
    type = type || "spritz";
    flavors.push("light", "refreshing");
  }

  if (!type) type = "unknown";

  return {
    ingredients,
    instructions: instructionsPart || joined,
    mainAlcohol,
    type,
    flavors: Array.from(new Set(flavors))
  };
}

// Modal handling
function openRecipeModal() {
  document.getElementById("recipe-modal").classList.remove("hidden");
  document.getElementById("recipe-text").value = "";
  document.getElementById("recipe-preview").classList.add("hidden");
  document.getElementById("recipe-preview").innerHTML = "";
}

function closeRecipeModal() {
  document.getElementById("recipe-modal").classList.add("hidden");
}

// Initialize events
function initEvents() {
  // Dashboard buttons
  document.querySelectorAll(".dash-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      showView(target);
    });
  });

  // Back buttons
  document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      showView(target);
    });
  });

  // Inventory add
  document.getElementById("inv-add-btn").addEventListener("click", () => {
    const name = document.getElementById("inv-name").value.trim();
    const category = document.getElementById("inv-category").value;
    const base = document.getElementById("inv-base").value;
    const flavorsRaw = document.getElementById("inv-flavors").value.trim();

    if (!name) return;

    const flavors = flavorsRaw
      ? flavorsRaw.split(",").map((f) => f.trim()).filter(Boolean)
      : [];

    inventory.push({ name, category, base, flavors });
    saveLocal(STORAGE_KEY_INVENTORY, inventory);

    document.getElementById("inv-name").value = "";
    document.getElementById("inv-flavors").value = "";
    renderInventory();
    renderMakeList();
  });

  // Inventory search
  document.getElementById("inv-search").addEventListener("input", renderInventory);

  // Drinks filters
  document.getElementById("drink-search").addEventListener("input", renderDrinks);
  document.getElementById("filter-main").addEventListener("change", renderDrinks);
  document.getElementById("filter-type").addEventListener("change", renderDrinks);
  document.getElementById("filter-flavor").addEventListener("change", renderDrinks);

  // Make filter
  document.getElementById("make-filter").addEventListener("change", renderMakeList);

  // Add drink modal
  document.getElementById("add-drink-btn").addEventListener("click", openRecipeModal);
  document.getElementById("recipe-cancel").addEventListener("click", closeRecipeModal);

  document.getElementById("recipe-parse").addEventListener("click", () => {
    const text = document.getElementById("recipe-text").value.trim();
    if (!text) return;

    const parsed = parseRecipeText(text);

    const preview = document.getElementById("recipe-preview");
    preview.classList.remove("hidden");
    preview.innerHTML = `
      <strong>Parsed:</strong><br/>
      Main alcohol: ${parsed.mainAlcohol}<br/>
      Type: ${parsed.type}<br/>
      Flavors: ${(parsed.flavors || []).join(", ")}<br/>
      Ingredients:<br/>
      ${parsed.ingredients
        .map((i) => `- ${i.amount} ${i.name} (${i.type}${i.base ? ", " + i.base : ""})`)
        .join("<br/>")}
      <br/><br/>
      Instructions:<br/>
      ${parsed.instructions}
    `;

    // Simple prompt for name
    const name = prompt("Name for this drink:", "New Drink");
    if (!name) return;

    const recipe = {
      name,
      ingredients: parsed.ingredients,
      instructions: parsed.instructions,
      mainAlcohol: parsed.mainAlcohol,
      type: parsed.type,
      flavors: parsed.flavors
    };

    recipes.push(recipe);
    saveLocal(STORAGE_KEY_RECIPES, recipes);
    renderDrinks();
    renderMakeList();
    closeRecipeModal();
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  initEvents();
  initData();
  showView("dashboard");
});
