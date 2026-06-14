// icons.js

// High-level section icons (line-style concept)
const sectionIcons = {
  inventoryLiquor: "🍾",      // tall liquor bottle vibe
  inventoryMixers: "🥤",      // mixer / soda
  inventoryPerishables: "🥬", // fresh/perishable
  inventoryOther: "📦",       // other / misc
  recipes: "📖",              // recipe book
  favorites: "⭐"             // favorites
};

// Base spirit icons for recipes
const baseIcons = {
  Gin: "🍸",
  Vodka: "🍸",
  "Light Rum": "🍹",
  "Dark Rum": "🍹",
  "Aged Rum": "🍹",
  "Tequila Blanco": "🥃",
  "Tequila Reposado": "🥃",
  Bourbon: "🥃",
  Rye: "🥃",
  Scotch: "🥃",
  Mezcal: "🥃",
  Cognac: "🥃",
  "Other Spirits": "🍷"
};

// Expose globally for app.js
window.sectionIcons = sectionIcons;
window.baseIcons = baseIcons;

// Recipe favorite icons
const icons = {
  heart: "❤️",
  heartOutline: "🤍"
};

// Expose globally
window.icons = icons;
