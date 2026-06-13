// ============================================================
//  BLUEBAR RECIPE DATABASE (100 RECIPES)
//  + USER-ADDED RECIPE PERSISTENCE
// ============================================================

// ------------------------------------------------------------
// 100 BASE RECIPES
// ------------------------------------------------------------
const BASE_RECIPES = [

  // === SIMPLE HIGHBALLS ===
  { name: "Gin & Tonic", liquors: ["Gin"], mixers: ["Tonic Water"], perishables: ["Lime"] },
  { name: "Vodka Soda", liquors: ["Vodka"], mixers: ["Club Soda"], perishables: ["Lime"] },
  { name: "Rum & Cola", liquors: ["Rum"], mixers: ["Cola"], perishables: [] },
  { name: "Tequila Sunrise", liquors: ["Tequila"], mixers: ["Orange Juice"], perishables: ["Orange"] },
  { name: "Dark & Stormy", liquors: ["Rum"], mixers: ["Ginger Beer"], perishables: ["Lime"] },
  { name: "Whiskey Highball", liquors: ["Whiskey"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Cuba Libre", liquors: ["Rum"], mixers: ["Cola"], perishables: ["Lime"] },
  { name: "Paloma", liquors: ["Tequila"], mixers: ["Club Soda"], perishables: ["Lime"] },
  { name: "Greyhound", liquors: ["Vodka"], mixers: ["Orange Juice"], perishables: ["Lemon"] },
  { name: "Screwdriver", liquors: ["Vodka"], mixers: ["Orange Juice"], perishables: [] },

  // === WHISKEY CLASSICS ===
  { name: "Old Fashioned", liquors: ["Whiskey"], mixers: [], perishables: ["Orange"] },
  { name: "Manhattan", liquors: ["Whiskey"], mixers: [], perishables: ["Cherry Juice"] },
  { name: "Whiskey Sour", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "Boulevardier", liquors: ["Whiskey"], mixers: [], perishables: ["Orange"] },
  { name: "Gold Rush", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "John Collins", liquors: ["Whiskey"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "New York Sour", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "Whiskey Smash", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon", "Basil"] },
  { name: "Brown Derby", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "Irish Mule", liquors: ["Whiskey"], mixers: ["Ginger Beer"], perishables: ["Lime"] },

  // === GIN CLASSICS ===
  { name: "Negroni", liquors: ["Gin"], mixers: [], perishables: ["Orange"] },
  { name: "Martini", liquors: ["Gin"], mixers: [], perishables: ["Lemon"] },
  { name: "Tom Collins", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Gimlet", liquors: ["Gin"], mixers: [], perishables: ["Lime"] },
  { name: "French 75", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Gin Rickey", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Lime"] },
  { name: "Bee’s Knees", liquors: ["Gin"], mixers: [], perishables: ["Lemon"] },
  { name: "Southside", liquors: ["Gin"], mixers: [], perishables: ["Lime", "Basil"] },
  { name: "Gin Fizz", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Basil Smash", liquors: ["Gin"], mixers: [], perishables: ["Lemon", "Basil"] },

  // === RUM CLASSICS ===
  { name: "Daiquiri", liquors: ["Rum"], mixers: [], perishables: ["Lime"] },
  { name: "Mojito", liquors: ["Rum"], mixers: ["Club Soda"], perishables: ["Lucumbers", "Lime", "Basil"] },
  { name: "Mai Tai", liquors: ["Rum"], mixers: [], perishables: ["Lime"] },
  { name: "Painkiller", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Pineapple"] },
  { name: "Jungle Bird", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Lime"] },
  { name: "Rum Punch", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Lime"] },
  { name: "Hemingway Daiquiri", liquors: ["Rum"], mixers: [], perishables: ["Lime"] },
  { name: "Blue Hawaiian", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Pineapple"] },
  { name: "Rum Sour", liquors: ["Rum"], mixers: [], perishables: ["Lemon"] },
  { name: "Rum Swizzle", liquors: ["Rum"], mixers: ["Club Soda"], perishables: ["Lime"] },

  // === TEQUILA CLASSICS ===
  { name: "Margarita", liquors: ["Tequila"], mixers: [], perishables: ["Lime"] },
  { name: "Tequila Collins", liquors: ["Tequila"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Mexican Mule", liquors: ["Tequila"], mixers: ["Ginger Beer"], perishables: ["Lime"] },
  { name: "Ranch Water", liquors: ["Tequila"], mixers: ["Club Soda"], perishables: ["Lime"] },
  { name: "Tequila Sour", liquors: ["Tequila"], mixers: [], perishables: ["Lemon"] },
  { name: "Matador", liquors: ["Tequila"], mixers: ["Orange Juice"], perishables: ["Pineapple"] },
  { name: "Bloody Maria", liquors: ["Tequila"], mixers: [], perishables: ["Lemon"] },
  { name: "Tequila Fizz", liquors: ["Tequila"], mixers: ["Club Soda"], perishables: ["Lime"] },
  { name: "Tequila Smash", liquors: ["Tequila"], mixers: [], perishables: ["Lime", "Basil"] },
  { name: "Sunset Cooler", liquors: ["Tequila"], mixers: ["Orange Juice"], perishables: ["Orange"] },

  // === VODKA CLASSICS ===
  { name: "Cosmopolitan", liquors: ["Vodka"], mixers: [], perishables: ["Lime"] },
  { name: "Espresso Martini", liquors: ["Vodka"], mixers: [], perishables: [] },
  { name: "Moscow Mule", liquors: ["Vodka"], mixers: ["Ginger Beer"], perishables: ["Lime"] },
  { name: "Vodka Collins", liquors: ["Vodka"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Sea Breeze", liquors: ["Vodka"], mixers: ["Orange Juice"], perishables: ["Lime"] },
  { name: "Bay Breeze", liquors: ["Vodka"], mixers: ["Orange Juice"], perishables: ["Lime"] },
  { name: "Lemon Drop", liquors: ["Vodka"], mixers: [], perishables: ["Lemon"] },
  { name: "Black Russian", liquors: ["Vodka"], mixers: [], perishables: [] },
  { name: "White Russian", liquors: ["Vodka"], mixers: [], perishables: ["Cream"] },
  { name: "Vodka Gimlet", liquors: ["Vodka"], mixers: [], perishables: ["Lime"] },

  // === MODERN FAVORITES ===
  { name: "Paper Plane", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "Penicillin", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "Naked & Famous", liquors: ["Tequila"], mixers: [], perishables: ["Lime"] },
  { name: "Gold Rush", liquors: ["Whiskey"], mixers: [], perishables: ["Lemon"] },
  { name: "Basil Gimlet", liquors: ["Gin"], mixers: [], perishables: ["Lime", "Basil"] },
  { name: "Pineapple Basil Cooler", liquors: ["Vodka"], mixers: ["Club Soda"], perishables: ["Pineapple", "Basil"] },
  { name: "Coconut Cream Martini", liquors: ["Vodka"], mixers: [], perishables: ["Coconut Milk", "Cream"] },
  { name: "Cherry Gin Fizz", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Cherry Juice"] },
  { name: "Pomegranate Whiskey Smash", liquors: ["Whiskey"], mixers: [], perishables: ["Pomegranate Juice", "Lemon"] },
  { name: "Blueberry Collins", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Blueberries", "Lemon"] },

  // === TROPICAL / FUN ===
  { name: "Piña Colada", liquors: ["Rum"], mixers: [], perishables: ["Pineapple", "Cream"] },
  { name: "Bahama Mama", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Pineapple"] },
  { name: "Hurricane", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Lime"] },
  { name: "Blue Lagoon", liquors: ["Vodka"], mixers: ["Club Soda"], perishables: ["Lemon"] },
  { name: "Tropical Cooler", liquors: ["Vodka"], mixers: ["Orange Juice"], perishables: ["Pineapple"] },
  { name: "Island Fizz", liquors: ["Rum"], mixers: ["Club Soda"], perishables: ["Pineapple", "Lime"] },
  { name: "Sunset Punch", liquors: ["Rum"], mixers: ["Orange Juice"], perishables: ["Orange"] },
  { name: "Citrus Breeze", liquors: ["Vodka"], mixers: ["Club Soda"], perishables: ["Lemon", "Orange"] },
  { name: "Blueberry Smash", liquors: ["Whiskey"], mixers: [], perishables: ["Blueberries", "Lemon"] },
  { name: "Cucumber Cooler", liquors: ["Gin"], mixers: ["Club Soda"], perishables: ["Cucumbers", "Lime"] }
];

// ------------------------------------------------------------
// USER-ADDED RECIPES (PERSISTED IN LOCALSTORAGE)
// ------------------------------------------------------------
function loadUserRecipes() {
  try {
    const raw = localStorage.getItem("bluebar_user_recipes");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUserRecipes(recipes) {
  try {
    localStorage.setItem("bluebar_user_recipes", JSON.stringify(recipes));
  } catch {
    // ignore
  }
}

let USER_RECIPES = loadUserRecipes();

// This is what BlueBar uses everywhere
const RECIPES = BASE_RECIPES.concat(USER_RECIPES);

// ------------------------------------------------------------
// HELPER: ADD A USER RECIPE
// ------------------------------------------------------------
function addUserRecipe(recipe) {
  if (!recipe || !recipe.name) return;

  USER_RECIPES.push({
    name: recipe.name,
    liquors: recipe.liquors || [],
    mixers: recipe.mixers || [],
    perishables: recipe.perishables || []
  });

  saveUserRecipes(USER_RECIPES);
}
