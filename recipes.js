// ==============================
// CLASSIC COCKTAILS
// ==============================

const classicCocktails = [

  // ------------------------------
  // MARTINI
  // ------------------------------
  {
    name: "Martini",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2.5 oz" },
      { name: "Dry vermouth", amount: "0.5 oz" },
      { name: "Lemon twist or olive", amount: "1 garnish" }
    ],
    instructions:
      "Stir gin and dry vermouth with ice until very cold. Strain into a chilled coupe. Garnish with a lemon twist or olive.",
    substitutions:
      "Use vodka instead of gin for a Vodka Martini. Adjust vermouth ratio to taste.",
    tags: ["Dry", "Spirit-forward", "Herbal", "Refreshing"]
  },

  // ------------------------------
  // OLD FASHIONED
  // ------------------------------
  {
    name: "Old Fashioned",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Simple syrup", amount: "0.25 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Build in a rocks glass: bourbon, simple syrup, and bitters. Add ice and stir until chilled. Garnish with an expressed orange peel.",
    substitutions:
      "Rye can replace bourbon for a spicier profile. Demerara syrup adds richer sweetness.",
    tags: ["Sweet", "Bitter", "Spirit-forward", "Rich"]
  },

  // ------------------------------
  // NEGRONI
  // ------------------------------
  {
    name: "Negroni",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      { name: "Gin", amount: "1 oz" },
      { name: "Sweet vermouth", amount: "1 oz" },
      { name: "Campari", amount: "1 oz" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Combine gin, sweet vermouth, and Campari over ice. Stir until chilled. Garnish with an orange peel.",
    substitutions:
      "Swap gin for bourbon to make a Boulevardier. Use different amari for subtle variations.",
    tags: ["Bitter", "Herbal", "Spirit-forward", "Rich"]
  },

  // ------------------------------
  // DAIQUIRI
  // ------------------------------
  {
    name: "Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      { name: "Light rum", amount: "2 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice until well chilled. Strain into a chilled coupe.",
    substitutions:
      "Use aged rum for a more complex flavor. Adjust lime and syrup for sweeter or more sour balance.",
    tags: ["Citrusy", "Refreshing", "Sour", "Fruity"]
  },

  // ------------------------------
  // MARGARITA
  // ------------------------------
  {
    name: "Margarita",
    base: "Tequila Blanco",
    glass: "Coupe",
    ingredients: [
      { name: "Tequila blanco", amount: "2 oz" },
      { name: "Cointreau or triple sec", amount: "1 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Salt (rim, optional)", amount: "1 pinch" }
    ],
    instructions:
      "Shake tequila, orange liqueur, and lime juice with ice. Strain into a salt-rimmed coupe or rocks glass.",
    substitutions:
      "Mezcal can replace tequila for a smoky twist. Add agave syrup for extra sweetness.",
    tags: ["Citrusy", "Sour", "Refreshing", "Fruity"]
  },

  // ------------------------------
  // MANHATTAN
  // ------------------------------
  {
    name: "Manhattan",
    base: "Rye",
    glass: "Coupe",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Sweet vermouth", amount: "1 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Cherry", amount: "1 garnish" }
    ],
    instructions:
      "Stir rye, sweet vermouth, and bitters with ice until chilled. Strain into a chilled coupe and garnish with a cherry.",
    substitutions:
      "Bourbon can replace rye for a sweeter profile. Add orange bitters for complexity.",
    tags: ["Spirit-forward", "Rich", "Bitter", "Herbal"]
  },

  // ------------------------------
  // WHISKEY SOUR
  // ------------------------------
  {
    name: "Whiskey Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.75 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Shake all ingredients without ice, then shake again with ice. Strain into a chilled coupe or rocks glass.",
    substitutions:
      "Use rye for a spicier version. Aquafaba can replace egg white.",
    tags: ["Sour", "Refreshing", "Citrusy", "Creamy"]
  },

  // ------------------------------
  // SIDECAR
  // ------------------------------
  {
    name: "Sidecar",
    base: "Cognac",
    glass: "Coupe",
    ingredients: [
      { name: "Cognac", amount: "2 oz" },
      { name: "Triple sec", amount: "1 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Sugar rim (optional)", amount: "1 garnish" }
    ],
    instructions:
      "Shake cognac, triple sec, and lemon juice with ice. Strain into a chilled coupe, optionally with a sugar rim.",
    substitutions:
      "Brandy can replace cognac. Adjust lemon for more or less tartness.",
    tags: ["Citrusy", "Sour", "Spirit-forward", "Dry"]
  },

  // ------------------------------
  // TOM COLLINS
  // ------------------------------
  {
    name: "Tom Collins",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Build gin, lemon, and syrup in a highball with ice. Top with club soda and gently stir.",
    substitutions:
      "Use lime instead of lemon for a different citrus profile.",
    tags: ["Refreshing", "Citrusy", "Fruity", "Dry"]
  },

  // ------------------------------
  // MOJITO
  // ------------------------------
  {
    name: "Mojito",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      { name: "Light rum", amount: "2 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Mint", amount: "8–10 leaves" },
      { name: "Simple syrup", amount: "0.75 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Muddle mint with syrup and lime. Add rum and ice, then top with club soda.",
    substitutions:
      "Use aged rum for a deeper flavor. Add bitters for complexity.",
    tags: ["Refreshing", "Herbal", "Citrusy", "Fruity"]
  },

  // ------------------------------
  // MAI TAI
  // ------------------------------
  {
    name: "Mai Tai",
    base: "Aged Rum",
    glass: "Rocks",
    ingredients: [
      { name: "Aged rum", amount: "1.5 oz" },
      { name: "Dark rum (float)", amount: "0.5 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Orange curaçao", amount: "0.5 oz" },
      { name: "Orgeat", amount: "0.5 oz" }
    ],
    instructions:
      "Shake all ingredients except dark rum. Strain over crushed ice and float dark rum on top.",
    substitutions:
      "Use light rum for a brighter version. Add pineapple for a tropical twist.",
    tags: ["Tropical", "Nutty", "Fruity", "Rich"]
  },

  // ------------------------------
  // SAZERAC
  // ------------------------------
  {
    name: "Sazerac",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Absinthe (rinse)", amount: "Rinse" },
      { name: "Sugar cube", amount: "1" },
      { name: "Peychaud’s bitters", amount: "3 dashes" },
      { name: "Lemon peel", amount: "1 peel" }
    ],
    instructions:
      "Rinse a chilled rocks glass with absinthe. Stir rye, sugar, and bitters with ice. Strain into the prepared glass and garnish with lemon peel.",
    substitutions:
      "Cognac can replace rye for a classic variation.",
    tags: ["Spirit-forward", "Herbal", "Dry", "Rich"]
  },

  // ------------------------------
  // BOULEVARDIER
  // ------------------------------
  {
    name: "Boulevardier",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      { name: "Bourbon", amount: "1 oz" },
      { name: "Sweet vermouth", amount: "1 oz" },
      { name: "Campari", amount: "1 oz" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir bourbon, sweet vermouth, and Campari with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Rye can replace bourbon for a spicier profile.",
    tags: ["Bitter", "Rich", "Spirit-forward", "Herbal"]
  },

  // ------------------------------
  // FRENCH 75
  // ------------------------------
  {
    name: "French 75",
    base: "Gin",
    glass: "Flute",
    ingredients: [
      { name: "Gin", amount: "1 oz" },
      { name: "Lemon juice", amount: "0.5 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Champagne", amount: "Top" }
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a flute and top with champagne.",
    substitutions:
      "Use cognac instead of gin for a classic variation.",
    tags: ["Refreshing", "Citrusy", "Fruity", "Dry"]
  }

]; // END OF SECTION 1
// ==============================
// CLASSIC COCKTAILS (continued)
// ==============================

  // ------------------------------
  // AVIATION
  // ------------------------------
  {
    name: "Aviation",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Maraschino liqueur", amount: "0.5 oz" },
      { name: "Crème de violette", amount: "0.25 oz" },
      { name: "Lemon juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Skip crème de violette for a more traditional version.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // MINT JULEP
  // ------------------------------
  {
    name: "Mint Julep",
    base: "Bourbon",
    glass: "Julep cup",
    ingredients: [
      { name: "Bourbon", amount: "2.5 oz" },
      { name: "Mint", amount: "8–10 leaves" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Crushed ice", amount: "Fill" }
    ],
    instructions:
      "Muddle mint and syrup gently in a julep cup. Add bourbon and crushed ice. Stir until the cup frosts.",
    substitutions:
      "Use aged rum for a rum julep variation.",
    tags: ["Refreshing", "Herbal", "Sweet", "Dry"]
  },

  // ------------------------------
  // PISCO SOUR
  // ------------------------------
  {
    name: "Pisco Sour",
    base: "Pisco",
    glass: "Coupe",
    ingredients: [
      { name: "Pisco", amount: "2 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.75 oz" },
      { name: "Egg white (optional)", amount: "1" },
      { name: "Angostura bitters", amount: "3 drops" }
    ],
    instructions:
      "Dry shake all ingredients except bitters, then shake again with ice. Strain into a coupe and add bitters drops.",
    substitutions:
      "Aquafaba can replace egg white.",
    tags: ["Sour", "Citrusy", "Creamy", "Refreshing"]
  },

  // ------------------------------
  // COSMOPOLITAN
  // ------------------------------
  {
    name: "Cosmopolitan",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      { name: "Vodka", amount: "1.5 oz" },
      { name: "Triple sec", amount: "1 oz" },
      { name: "Cranberry juice", amount: "0.5 oz" },
      { name: "Lime juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use raspberry liqueur for a fruitier variation.",
    tags: ["Fruity", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // MOSCOW MULE
  // ------------------------------
  {
    name: "Moscow Mule",
    base: "Vodka",
    glass: "Copper mug",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Ginger beer", amount: "Top" }
    ],
    instructions:
      "Build vodka and lime in a copper mug with ice. Top with ginger beer.",
    substitutions:
      "Use bourbon for a Kentucky Mule or tequila for a Mexican Mule.",
    tags: ["Spicy", "Refreshing", "Citrusy", "Fruity"]
  },

  // ------------------------------
  // CAIPIRINHA
  // ------------------------------
  {
    name: "Caipirinha",
    base: "Other Spirits",
    glass: "Rocks",
    ingredients: [
      { name: "Cachaça", amount: "2 oz" },
      { name: "Lime", amount: "4 wedges" },
      { name: "Sugar", amount: "2 tsp" }
    ],
    instructions:
      "Muddle lime and sugar. Add cachaça and crushed ice. Stir well.",
    substitutions:
      "Use vodka for a Caipiroska.",
    tags: ["Citrusy", "Refreshing", "Sour", "Fruity"]
  },

  // ------------------------------
  // AMERICANO
  // ------------------------------
  {
    name: "Americano",
    base: "Other Spirits",
    glass: "Highball",
    ingredients: [
      { name: "Campari", amount: "1 oz" },
      { name: "Sweet vermouth", amount: "1 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Build Campari and vermouth over ice. Top with soda.",
    substitutions:
      "Add gin to make a Negroni.",
    tags: ["Bitter", "Refreshing", "Dry", "Herbal"]
  },

  // ------------------------------
  // VESPER
  // ------------------------------
  {
    name: "Vesper",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "3 oz" },
      { name: "Vodka", amount: "1 oz" },
      { name: "Lillet Blanc", amount: "0.5 oz" },
      { name: "Lemon twist", amount: "1 garnish" }
    ],
    instructions:
      "Shake gin, vodka, and Lillet with ice. Strain into a chilled coupe and garnish with a lemon twist.",
    substitutions:
      "Cocchi Americano can replace Lillet.",
    tags: ["Spirit-forward", "Dry", "Herbal", "Refreshing"]
  },

  // ------------------------------
  // ROB ROY
  // ------------------------------
  {
    name: "Rob Roy",
    base: "Scotch",
    glass: "Coupe",
    ingredients: [
      { name: "Scotch", amount: "2 oz" },
      { name: "Sweet vermouth", amount: "1 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Cherry", amount: "1 garnish" }
    ],
    instructions:
      "Stir Scotch, vermouth, and bitters with ice. Strain into a coupe and garnish with a cherry.",
    substitutions:
      "Use dry vermouth for a Dry Rob Roy.",
    tags: ["Spirit-forward", "Rich", "Herbal", "Dry"]
  },

  // ------------------------------
  // GIMLET
  // ------------------------------
  {
    name: "Gimlet",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a Vodka Gimlet.",
    tags: ["Citrusy", "Refreshing", "Sour", "Dry"]
  },

  // ------------------------------
  // BEE’S KNEES
  // ------------------------------
  {
    name: "Bee’s Knees",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Honey syrup", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Add lavender bitters for a floral variation.",
    tags: ["Sweet", "Citrusy", "Refreshing", "Floral"]
  },

  // ------------------------------
  // CLOVER CLUB
  // ------------------------------
  {
    name: "Clover Club",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "1.5 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Raspberry syrup", amount: "0.5 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a chilled coupe.",
    substitutions:
      "Grenadine can replace raspberry syrup in a pinch.",
    tags: ["Fruity", "Creamy", "Citrusy", "Refreshing"]
  },

  // ------------------------------
  // LAST WORD
  // ------------------------------
  {
    name: "Last Word",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "0.75 oz" },
      { name: "Green Chartreuse", amount: "0.75 oz" },
      { name: "Maraschino liqueur", amount: "0.75 oz" },
      { name: "Lime juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Yellow Chartreuse creates a softer variation.",
    tags: ["Herbal", "Citrusy", "Refreshing", "Dry"]
  },

  // ------------------------------
  // CORPSE REVIVER #2
  // ------------------------------
  {
    name: "Corpse Reviver #2",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "0.75 oz" },
      { name: "Cointreau", amount: "0.75 oz" },
      { name: "Lillet Blanc", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Absinthe (rinse)", amount: "Rinse" }
    ],
    instructions:
      "Rinse a coupe with absinthe. Shake remaining ingredients with ice and strain into the glass.",
    substitutions:
      "Cocchi Americano can replace Lillet.",
    tags: ["Citrusy", "Herbal", "Refreshing", "Dry"]
  },

  // ------------------------------
  // VIEUX CARRÉ
  // ------------------------------
  {
    name: "Vieux Carré",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      { name: "Rye whiskey", amount: "1 oz" },
      { name: "Cognac", amount: "1 oz" },
      { name: "Sweet vermouth", amount: "1 oz" },
      { name: "Bénédictine", amount: "0.25 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Peychaud’s bitters", amount: "2 dashes" }
    ],
    instructions:
      "Stir all ingredients with ice and strain over a large cube.",
    substitutions:
      "Increase cognac for a richer version.",
    tags: ["Rich", "Herbal", "Spirit-forward", "Bitter"]
  }

]; // END OF SECTION 2
// ==============================
// MODERN COCKTAILS
// ==============================

const modernCocktails = [

  // ------------------------------
  // ESPRESSO MARTINI
  // ------------------------------
  {
    name: "Espresso Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Coffee liqueur", amount: "0.5 oz" },
      { name: "Fresh espresso", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.25–0.5 oz" }
    ],
    instructions:
      "Shake all ingredients hard with ice to create a foamy texture. Strain into a chilled coupe.",
    substitutions:
      "Cold brew concentrate can replace espresso. Adjust syrup for sweetness.",
    tags: ["Coffee", "Dessert", "Rich", "Sweet"]
  },

  // ------------------------------
  // PENICILLIN
  // ------------------------------
  {
    name: "Penicillin",
    base: "Scotch",
    glass: "Rocks",
    ingredients: [
      { name: "Blended Scotch", amount: "2 oz" },
      { name: "Honey-ginger syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Islay Scotch (float)", amount: "0.25 oz" }
    ],
    instructions:
      "Shake blended Scotch, honey-ginger syrup, and lemon with ice. Strain over fresh ice in a rocks glass. Float a small amount of Islay Scotch on top.",
    substitutions:
      "Use bourbon if Scotch is unavailable. Ginger syrup can be simplified with ginger and sugar.",
    tags: ["Smoky", "Spicy", "Rich", "Herbal"]
  },

  // ------------------------------
  // PAPER PLANE
  // ------------------------------
  {
    name: "Paper Plane",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      { name: "Bourbon", amount: "0.75 oz" },
      { name: "Aperol", amount: "0.75 oz" },
      { name: "Amaro Nonino", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use Montenegro if Nonino is unavailable.",
    tags: ["Bitter", "Citrusy", "Refreshing", "Dry"]
  },

  // ------------------------------
  // OAXACA OLD FASHIONED
  // ------------------------------
  {
    name: "Oaxaca Old Fashioned",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      { name: "Mezcal", amount: "1.5 oz" },
      { name: "Tequila reposado", amount: "0.5 oz" },
      { name: "Agave syrup", amount: "0.25 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir mezcal, tequila, agave, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use only tequila for a less smoky version.",
    tags: ["Smoky", "Spirit-forward", "Rich", "Dry"]
  },

  // ------------------------------
  // BASIL SMASH
  // ------------------------------
  {
    name: "Basil Smash",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.75 oz" },
      { name: "Fresh basil", amount: "8–12 leaves" }
    ],
    instructions:
      "Muddle basil with syrup and lemon. Add gin and ice, shake hard, and double strain over fresh ice.",
    substitutions:
      "Use mint instead of basil for a different herbal profile.",
    tags: ["Herbal", "Refreshing", "Citrusy", "Dry"]
  },

  // ------------------------------
  // NAKED AND FAMOUS
  // ------------------------------
  {
    name: "Naked and Famous",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      { name: "Mezcal", amount: "0.75 oz" },
      { name: "Aperol", amount: "0.75 oz" },
      { name: "Yellow Chartreuse", amount: "0.75 oz" },
      { name: "Lime juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use green Chartreuse for a sharper herbal note.",
    tags: ["Smoky", "Herbal", "Citrusy", "Refreshing"]
  },

  // ------------------------------
  // JUNGLE BIRD
  // ------------------------------
  {
    name: "Jungle Bird",
    base: "Dark Rum",
    glass: "Rocks",
    ingredients: [
      { name: "Dark rum", amount: "1.5 oz" },
      { name: "Campari", amount: "0.75 oz" },
      { name: "Pineapple juice", amount: "1.5 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Simple syrup", amount: "0.5 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use aged rum for more depth.",
    tags: ["Tropical", "Bitter", "Fruity", "Refreshing"]
  },

  // ------------------------------
  // APEROL SPRITZ
  // ------------------------------
  {
    name: "Aperol Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Aperol", amount: "3 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" },
      { name: "Orange slice", amount: "1 garnish" }
    ],
    instructions:
      "Build Aperol and prosecco over ice. Add a splash of soda and garnish with an orange slice.",
    substitutions:
      "Use Campari for a more bitter spritz.",
    tags: ["Refreshing", "Bitter", "Citrusy", "Dry"]
  },

  // ------------------------------
  // MEZCAL MULE
  // ------------------------------
  {
    name: "Mezcal Mule",
    base: "Mezcal",
    glass: "Copper mug",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Ginger beer", amount: "Top" }
    ],
    instructions:
      "Build mezcal and lime over ice. Top with ginger beer.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Spicy", "Refreshing", "Citrusy"]
  },

  // ------------------------------
  // FRENCH MARTINI
  // ------------------------------
  {
    name: "French Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Raspberry liqueur", amount: "0.5 oz" },
      { name: "Pineapple juice", amount: "1.5 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use blackberry liqueur for a darker fruit profile.",
    tags: ["Fruity", "Sweet", "Tropical", "Refreshing"]
  },

  // ------------------------------
  // GIN BASIL SMASH (REVIVAL)
  // ------------------------------
  {
    name: "Gin Basil Smash",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.75 oz" },
      { name: "Fresh basil", amount: "8–12 leaves" }
    ],
    instructions:
      "Muddle basil with syrup and lemon juice. Add gin and ice, shake hard, and double strain over fresh ice.",
    substitutions:
      "Swap basil for mint for a different herbal profile.",
    tags: ["Herbal", "Refreshing", "Citrusy", "Dry"]
  },

  // ------------------------------
  // CLOVER CLUB REVIVAL
  // ------------------------------
  {
    name: "Clover Club Revival",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "1.5 oz" },
      { name: "Raspberry syrup", amount: "0.5 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a chilled coupe.",
    substitutions:
      "Use grenadine if raspberry syrup is unavailable.",
    tags: ["Fruity", "Creamy", "Citrusy", "Refreshing"]
  },

  // ------------------------------
  // MEZCAL PALOMA
  // ------------------------------
  {
    name: "Mezcal Paloma",
    base: "Mezcal",
    glass: "Highball",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Grapefruit juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Simple syrup", amount: "0.25 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Build mezcal, juices, and syrup in a highball with ice. Top with soda and stir gently.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Citrusy", "Refreshing", "Dry"]
  },

  // ------------------------------
  // ELDERFLOWER SPRITZ
  // ------------------------------
  {
    name: "Elderflower Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Elderflower liqueur", amount: "2 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" },
      { name: "Lemon wheel", amount: "1 garnish" }
    ],
    instructions:
      "Build elderflower liqueur and prosecco over ice. Add a splash of soda and garnish with a lemon wheel.",
    substitutions:
      "Use tonic water for a more bitter profile.",
    tags: ["Floral", "Refreshing", "Sweet", "Citrusy"]
  },

  // ------------------------------
  // CHARTREUSE SWIZZLE
  // ------------------------------
  {
    name: "Chartreuse Swizzle",
    base: "Other Spirits",
    glass: "Highball",
    ingredients: [
      { name: "Green Chartreuse", amount: "1.5 oz" },
      { name: "Pineapple juice", amount: "1.5 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Falernum", amount: "0.5 oz" },
      { name: "Crushed ice", amount: "Fill" }
    ],
    instructions:
      "Build all ingredients in a highball with crushed ice. Swizzle until frosty.",
    substitutions:
      "Use yellow Chartreuse for a softer herbal note.",
    tags: ["Herbal", "Tropical", "Fruity", "Refreshing"]
  },

  // ------------------------------
  // MODERN MAI TAI
  // ------------------------------
  {
    name: "Modern Mai Tai",
    base: "Aged Rum",
    glass: "Rocks",
    ingredients: [
      { name: "Aged rum", amount: "1.5 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Orgeat", amount: "0.5 oz" },
      { name: "Orange curaçao", amount: "0.5 oz" },
      { name: "Simple syrup", amount: "0.25 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over crushed ice.",
    substitutions:
      "Add a dark rum float for extra richness.",
    tags: ["Tropical", "Nutty", "Fruity", "Sweet"]
  },

  // ------------------------------
  // LAVENDER BEE’S KNEES
  // ------------------------------
  {
    name: "Lavender Bee’s Knees",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Lavender honey syrup", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use regular honey syrup if lavender is unavailable.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // SMOKED MAPLE OLD FASHIONED
  // ------------------------------
  {
    name: "Smoked Maple Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Maple syrup", amount: "0.25 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir rye, maple syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Sweet", "Spirit-forward", "Smoky"]
  },

  // ------------------------------
  // GRAPEFRUIT COLLINS
  // ------------------------------
  {
    name: "Grapefruit Collins",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Grapefruit juice", amount: "2 oz" },
      { name: "Lemon juice", amount: "0.5 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal version.",
    tags: ["Citrusy", "Refreshing", "Dry", "Fruity"]
  },

  // ------------------------------
  // PINEAPPLE MEZCAL SOUR
  // ------------------------------
  {
    name: "Pineapple Mezcal Sour",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Pineapple juice", amount: "1 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a chilled coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Smoky", "Tropical", "Creamy", "Refreshing"]
  }

]; // END OF SECTION 3
// ==============================
// MODERN COCKTAILS (continued)
// ==============================

  // ------------------------------
  // BLACKBERRY BOURBON SMASH
  // ------------------------------
  {
    name: "Blackberry Bourbon Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Blackberries", amount: "4–5 berries" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Mint", amount: "6–8 leaves" }
    ],
    instructions:
      "Muddle blackberries and mint with syrup. Add bourbon and lemon, shake with ice, and strain over fresh ice.",
    substitutions:
      "Use raspberries for a brighter fruit profile.",
    tags: ["Fruity", "Refreshing", "Sweet", "Herbal"]
  },

  // ------------------------------
  // COCONUT RUM DAIQUIRI
  // ------------------------------
  {
    name: "Coconut Rum Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      { name: "Light rum", amount: "2 oz" },
      { name: "Coconut cream", amount: "1 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.5 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Tropical", "Creamy", "Sweet", "Refreshing"]
  },

  // ------------------------------
  // GINGER PEAR MULE
  // ------------------------------
  {
    name: "Ginger Pear Mule",
    base: "Vodka",
    glass: "Copper mug",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Pear nectar", amount: "2 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Ginger beer", amount: "Top" }
    ],
    instructions:
      "Build vodka, pear, and lime over ice. Top with ginger beer.",
    substitutions:
      "Use gin for a more herbal version.",
    tags: ["Fruity", "Spicy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // ROSEMARY GIN RICKEY
  // ------------------------------
  {
    name: "Rosemary Gin Rickey",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Rosemary syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Build gin, lime, and syrup in a highball with ice. Top with soda and stir gently.",
    substitutions:
      "Use thyme syrup for a different herbal twist.",
    tags: ["Herbal", "Refreshing", "Dry", "Citrusy"]
  },

  // ------------------------------
  // SPICY MANGO MARGARITA
  // ------------------------------
  {
    name: "Spicy Mango Margarita",
    base: "Tequila Blanco",
    glass: "Rocks",
    ingredients: [
      { name: "Tequila blanco", amount: "2 oz" },
      { name: "Mango puree", amount: "1.5 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Jalapeño slices", amount: "2–3 slices" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice. Garnish with jalapeño.",
    substitutions:
      "Use mezcal for a smoky version.",
    tags: ["Spicy", "Tropical", "Fruity", "Sweet"]
  },

  // ------------------------------
  // BLUEBERRY LAVENDER COLLINS
  // ------------------------------
  {
    name: "Blueberry Lavender Collins",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Blueberry syrup", amount: "0.75 oz" },
      { name: "Lavender syrup", amount: "0.25 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, syrups, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a floral-herbal variation.",
    tags: ["Floral", "Fruity", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // SMOKED PINEAPPLE SOUR
  // ------------------------------
  {
    name: "Smoked Pineapple Sour",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Pineapple juice", amount: "1 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Smoky", "Tropical", "Creamy", "Refreshing"]
  },

  // ------------------------------
  // CUCUMBER MINT COOLER
  // ------------------------------
  {
    name: "Cucumber Mint Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Cucumber slices", amount: "4–5 slices" },
      { name: "Mint", amount: "6–8 leaves" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Muddle cucumber and mint with syrup. Add gin and lime, shake lightly, strain into a highball, and top with soda.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Refreshing", "Herbal", "Dry", "Citrusy"]
  },

  // ------------------------------
  // RASPBERRY VANILLA SOUR
  // ------------------------------
  {
    name: "Raspberry Vanilla Sour",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Raspberry syrup", amount: "0.75 oz" },
      { name: "Vanilla syrup", amount: "0.25 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use bourbon for a richer version.",
    tags: ["Fruity", "Sweet", "Creamy", "Citrusy"]
  },

  // ------------------------------
  // POMEGRANATE GIN FIZZ
  // ------------------------------
  {
    name: "Pomegranate Gin Fizz",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Pomegranate juice", amount: "1.5 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake gin, pomegranate, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use tonic water for a more bitter finish.",
    tags: ["Fruity", "Refreshing", "Citrusy", "Dry"]
  }

]; // END OF SECTION 4

// ==============================
// COPILOT ORIGINALS
// ==============================

const copilotOriginals = [

  // ------------------------------
  // BLUEBAR SIGNATURE COUPE
  // ------------------------------
  {
    name: "BlueBar Signature Coupe",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Elderflower liqueur", amount: "0.5 oz" },
      { name: "Dry vermouth", amount: "0.5 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.25 oz" }
    ],
    instructions:
      "Shake all ingredients with ice until well chilled. Double strain into a chilled coupe and garnish with a lemon twist.",
    substitutions:
      "Use vodka instead of gin for a softer profile.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // MIDNIGHT CITRUS HIGHBALL
  // ------------------------------
  {
    name: "Midnight Citrus Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Grapefruit juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Build vodka, juices, and syrup in a highball with ice. Top with club soda and stir gently.",
    substitutions:
      "Use gin for a more herbal variation.",
    tags: ["Citrusy", "Refreshing", "Dry", "Fruity"]
  },

  // ------------------------------
  // ELECTRIC OCEAN SOUR
  // ------------------------------
  {
    name: "Electric Ocean Sour",
    base: "Tequila Blanco",
    glass: "Coupe",
    ingredients: [
      { name: "Tequila blanco", amount: "2 oz" },
      { name: "Blue curaçao", amount: "0.5 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Agave syrup", amount: "0.5 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Citrusy", "Tropical", "Creamy", "Refreshing"]
  },

  // ------------------------------
  // SMOKED HONEY EMBER
  // ------------------------------
  {
    name: "Smoked Honey Ember",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Honey syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Angostura bitters", amount: "2 dashes" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over a large cube.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Sweet", "Citrusy", "Rich"]
  },

  // ------------------------------
  // LAVENDER SKY SPRITZ
  // ------------------------------
  {
    name: "Lavender Sky Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Elderflower liqueur", amount: "1.5 oz" },
      { name: "Lavender syrup", amount: "0.5 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" },
      { name: "Lemon wheel", amount: "1 garnish" }
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use tonic water for a more bitter finish.",
    tags: ["Floral", "Refreshing", "Sweet", "Citrusy"]
  },

  // ------------------------------
  // GOLDEN ORCHARD SMASH
  // ------------------------------
  {
    name: "Golden Orchard Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Apple cider", amount: "1.5 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Cinnamon syrup", amount: "0.5 oz" },
      { name: "Apple slices", amount: "2–3 slices" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice. Garnish with apple slices.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Fruity", "Spicy", "Rich", "Sweet"]
  },

  // ------------------------------
  // NEON DRAGON FIZZ
  // ------------------------------
  {
    name: "Neon Dragon Fizz",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Dragonfruit puree", amount: "1.5 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, puree, lime, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more botanical version.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },

  // ------------------------------
  // COCOA SMOKE OLD FASHIONED
  // ------------------------------
  {
    name: "Cocoa Smoke Old Fashioned",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Cocoa nib syrup", amount: "0.5 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir mezcal, cocoa syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter, less smoky version.",
    tags: ["Smoky", "Chocolate", "Rich", "Spirit-forward"]
  },

  // ------------------------------
  // SUNSET ORCHARD SPRITZ
  // ------------------------------
  {
    name: "Sunset Orchard Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Aperitivo liqueur", amount: "2 oz" },
      { name: "Peach nectar", amount: "2 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" }
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier profile.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },

  // ------------------------------
  // FROSTED MINT GIMLET
  // ------------------------------
  {
    name: "Frosted Mint Gimlet",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Mint syrup", amount: "0.5 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Refreshing", "Herbal", "Citrusy", "Dry"]
  },

  // ------------------------------
  // CRIMSON ORCHARD FIZZ
  // ------------------------------
  {
    name: "Crimson Orchard Fizz",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Cranberry juice", amount: "1.5 oz" },
      { name: "Apple cider", amount: "1 oz" },
      { name: "Lime juice", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, cranberry, cider, and lime with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal profile.",
    tags: ["Fruity", "Refreshing", "Citrusy", "Sweet"]
  },

  // ------------------------------
  // HONEYDEW SKY COOLER
  // ------------------------------
  {
    name: "Honeydew Sky Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Honeydew juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Mint", amount: "6–8 leaves" }
    ],
    instructions:
      "Shake all ingredients except mint with ice. Strain into a highball over fresh ice and garnish with mint.",
    substitutions:
      "Use vodka for a softer flavor.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },

  // ------------------------------
  // GOLDEN CHAI SOUR
  // ------------------------------
  {
    name: "Golden Chai Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Chai syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use maple syrup instead of chai syrup for a richer profile.",
    tags: ["Spicy", "Creamy", "Rich", "Citrusy"]
  },

  // ------------------------------
  // TROPICAL EMBER HIGHBALL
  // ------------------------------
  {
    name: "Tropical Ember Highball",
    base: "Mezcal",
    glass: "Highball",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Pineapple juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Agave syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake mezcal, pineapple, lime, and agave with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Tropical", "Refreshing", "Fruity"]
  },

  // ------------------------------
  // VELVET ROSE MARTINI
  // ------------------------------
  {
    name: "Velvet Rose Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Rose syrup", amount: "0.5 oz" },
      { name: "Lychee juice", amount: "1 oz" },
      { name: "Lemon juice", amount: "0.5 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use gin for a floral-herbal variation.",
    tags: ["Floral", "Fruity", "Sweet", "Refreshing"]
  },

  // ------------------------------
  // CITRUS GROVE OLD FASHIONED
  // ------------------------------
  {
    name: "Citrus Grove Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Orange blossom honey syrup", amount: "0.25 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir rye, honey syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Citrusy", "Spirit-forward", "Sweet"]
  },

  // ------------------------------
  // BLUEBERRY CLOUD SOUR
  // ------------------------------
  {
    name: "Blueberry Cloud Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Blueberry syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Fruity", "Creamy", "Citrusy", "Refreshing"]
  },

  // ------------------------------
  // COCONUT ORCHID SPRITZ
  // ------------------------------
  {
    name: "Coconut Orchid Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Coconut liqueur", amount: "2 oz" },
      { name: "Pineapple juice", amount: "2 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" }
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier profile.",
    tags: ["Tropical", "Refreshing", "Sweet", "Fruity"]
  },

  // ------------------------------
  // AMBER MAPLE SMASH
  // ------------------------------
  {
    name: "Amber Maple Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Maple syrup", amount: "0.5 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Orange bitters", amount: "2 dashes" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Rich", "Sweet", "Citrusy", "Dry"]
  },

  // ------------------------------
  // STARLIGHT GIN FIZZ
  // ------------------------------
  {
    name: "Starlight Gin Fizz",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Lavender syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use elderflower syrup for a floral twist.",
    tags: ["Floral", "Refreshing", "Citrusy", "Dry"]
  },

  // ------------------------------
  // CITRUS STARLIGHT COOLER
  // ------------------------------
  {
    name: "Citrus Starlight Cooler",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Grapefruit juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal variation.",
    tags: ["Citrusy", "Refreshing", "Dry", "Fruity"]
  },

  // ------------------------------
  // ORCHID MIST MARTINI
  // ------------------------------
  {
    name: "Orchid Mist Martini",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Elderflower liqueur", amount: "0.5 oz" },
      { name: "Lavender syrup", amount: "0.25 oz" },
      { name: "Lemon juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a softer floral profile.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // MAPLE EMBER OLD FASHIONED
  // ------------------------------
  {
    name: "Maple Ember Old Fashioned",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Maple syrup", amount: "0.25 oz" },
      { name: "Angostura bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir bourbon, maple syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Rich", "Sweet", "Spirit-forward", "Dry"]
  },

  // ------------------------------
  // TROPICAL STARLIGHT SPRITZ
  // ------------------------------
  {
    name: "Tropical Starlight Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Passionfruit syrup", amount: "1.5 oz" },
      { name: "Pineapple juice", amount: "2 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" }
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier version.",
    tags: ["Tropical", "Refreshing", "Sweet", "Fruity"]
  },

  // ------------------------------
  // FROSTED COCONUT SOUR
  // ------------------------------
  {
    name: "Frosted Coconut Sour",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      { name: "Light rum", amount: "2 oz" },
      { name: "Coconut cream", amount: "1 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Creamy", "Tropical", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // BLUE VELVET HIGHBALL
  // ------------------------------
  {
    name: "Blue Velvet Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Blue curaçao", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, curaçao, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more botanical profile.",
    tags: ["Citrusy", "Refreshing", "Sweet", "Tropical"]
  },

  // ------------------------------
  // HONEY BLOSSOM GIMLET
  // ------------------------------
  {
    name: "Honey Blossom Gimlet",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Honey syrup", amount: "0.75 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Orange blossom water", amount: "2–3 drops" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a softer flavor.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // CRIMSON SMOKE SOUR
  // ------------------------------
  {
    name: "Crimson Smoke Sour",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Pomegranate juice", amount: "1 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Fruity", "Creamy", "Citrusy"]
  },

  // ------------------------------
  // PEACH GARDEN SPRITZ
  // ------------------------------
  {
    name: "Peach Garden Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Peach nectar", amount: "2 oz" },
      { name: "Elderflower liqueur", amount: "1 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" }
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling wine for a drier version.",
    tags: ["Fruity", "Floral", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // WINTER SPICE HIGHBALL
  // ------------------------------
  {
    name: "Winter Spice Highball",
    base: "Rye",
    glass: "Highball",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Spiced syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake rye, syrup, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Spicy", "Refreshing", "Citrusy", "Dry"]
  },

  // ------------------------------
  // SOLAR FLARE DAIQUIRI
  // ------------------------------
  {
    name: "Solar Flare Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      { name: "Light rum", amount: "2 oz" },
      { name: "Passionfruit syrup", amount: "0.75 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Simple syrup", amount: "0.25 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Tropical", "Citrusy", "Refreshing", "Sweet"]
  },

  // ------------------------------
  // EMERALD GARDEN COOLER
  // ------------------------------
  {
    name: "Emerald Garden Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Cucumber juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Mint syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake gin, cucumber, lime, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Refreshing", "Herbal", "Dry", "Citrusy"]
  },

  // ------------------------------
  // CRIMSON VELVET MARTINI
  // ------------------------------
  {
    name: "Crimson Velvet Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Raspberry syrup", amount: "0.75 oz" },
      { name: "Vanilla syrup", amount: "0.25 oz" },
      { name: "Lemon juice", amount: "0.75 oz" }
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use gin for a more botanical variation.",
    tags: ["Fruity", "Sweet", "Citrusy", "Refreshing"]
  },

  // ------------------------------
  // HONEY FIRE OLD FASHIONED
  // ------------------------------
  {
    name: "Honey Fire Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Honey syrup", amount: "0.25 oz" },
      { name: "Cinnamon bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir rye, honey syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Spicy", "Sweet", "Spirit-forward"]
  },

  // ------------------------------
  // BLUE LAGOON BREEZE
  // ------------------------------
  {
    name: "Blue Lagoon Breeze",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Blue curaçao", amount: "0.75 oz" },
      { name: "Pineapple juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, curaçao, pineapple, and lime with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use coconut water instead of soda for a tropical twist.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },

  // ------------------------------
  // ROSE GOLD SPRITZ
  // ------------------------------
  {
    name: "Rose Gold Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Elderflower liqueur", amount: "1.5 oz" },
      { name: "Rose syrup", amount: "0.5 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" }
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier version.",
    tags: ["Floral", "Refreshing", "Sweet", "Citrusy"]
  },

  // ------------------------------
  // COCOA MINT SOUR
  // ------------------------------
  {
    name: "Cocoa Mint Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Cocoa syrup", amount: "0.5 oz" },
      { name: "Mint syrup", amount: "0.25 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Chocolate", "Herbal", "Creamy", "Citrusy"]
  },

  // ------------------------------
  // PINEAPPLE EMBER SMASH
  // ------------------------------
  {
    name: "Pineapple Ember Smash",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      { name: "Mezcal", amount: "2 oz" },
      { name: "Pineapple juice", amount: "1.5 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Agave syrup", amount: "0.5 oz" },
      { name: "Chili bitters", amount: "2 dashes" }
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Tropical", "Spicy", "Fruity"]
  },

  // ------------------------------
  // LAVENDER MOON COLLINS
  // ------------------------------
  {
    name: "Lavender Moon Collins",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Lavender syrup", amount: "0.5 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, lavender, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a floral-herbal twist.",
    tags: ["Floral", "Refreshing", "Citrusy", "Dry"]
  },

  // ------------------------------
  // AUTUMN ORCHARD FIZZ
  // ------------------------------
  {
    name: "Autumn Orchard Fizz",
    base: "Bourbon",
    glass: "Highball",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Apple cider", amount: "2 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Maple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake bourbon, cider, lemon, and maple with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Fruity", "Rich", "Refreshing", "Citrusy"]
  },

  // ------------------------------
  // STARFALL GIN SPARKLER
  // ------------------------------
  {
    name: "Starfall Gin Sparkler",
    base: "Gin",
    glass: "Flute",
    ingredients: [
      { name: "Gin", amount: "1.5 oz" },
      { name: "Lemon juice", amount: "0.75 oz" },
      { name: "Elderflower syrup", amount: "0.5 oz" },
      { name: "Champagne", amount: "Top" }
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a flute and top with champagne.",
    substitutions:
      "Use prosecco for a sweeter finish.",
    tags: ["Floral", "Citrusy", "Refreshing", "Dry"]
  },

  // ------------------------------
  // COCOA CHERRY SOUR
  // ------------------------------
  {
    name: "Cocoa Cherry Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Cherry syrup", amount: "0.75 oz" },
      { name: "Cocoa syrup", amount: "0.5 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Chocolate", "Fruity", "Creamy", "Rich"]
  },

  // ------------------------------
  // TANGERINE DREAM HIGHBALL
  // ------------------------------
  {
    name: "Tangerine Dream Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Tangerine juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" },
      { name: "Simple syrup", amount: "0.5 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more botanical twist.",
    tags: ["Citrusy", "Refreshing", "Fruity", "Sweet"]
  },

  // ------------------------------
  // MAPLE ORCHID OLD FASHIONED
  // ------------------------------
  {
    name: "Maple Orchid Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      { name: "Rye whiskey", amount: "2 oz" },
      { name: "Maple syrup", amount: "0.25 oz" },
      { name: "Orange bitters", amount: "2 dashes" },
      { name: "Orange peel", amount: "1 peel" }
    ],
    instructions:
      "Stir rye, maple, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Sweet", "Spirit-forward", "Dry"]
  },

  // ------------------------------
  // BLUE EMBER MARGARITA
  // ------------------------------
  {
    name: "Blue Ember Margarita",
    base: "Tequila Reposado",
    glass: "Rocks",
    ingredients: [
      { name: "Tequila reposado", amount: "2 oz" },
      { name: "Blue curaçao", amount: "0.75 oz" },
      { name: "Lime juice", amount: "1 oz" },
      { name: "Agave syrup", amount: "0.5 oz" },
      { name: "Smoked salt rim", amount: "1 garnish" }
    ],
    instructions:
      "Shake tequila, curaçao, lime, and agave with ice. Strain over fresh ice in a smoked-salt-rimmed glass.",
    substitutions:
      "Use mezcal for a smoky version.",
    tags: ["Citrusy", "Smoky", "Tropical", "Refreshing"]
  },

  // ------------------------------
  // FROSTED BERRY FIZZ
  // ------------------------------
  {
    name: "Frosted Berry Fizz",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      { name: "Vodka", amount: "2 oz" },
      { name: "Mixed berry syrup", amount: "1 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Club soda", amount: "Top" }
    ],
    instructions:
      "Shake vodka, syrup, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal variation.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },

  // ------------------------------
  // GOLDEN SPICE SOUR
  // ------------------------------
  {
    name: "Golden Spice Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      { name: "Bourbon", amount: "2 oz" },
      { name: "Turmeric syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use ginger syrup for a sharper spice profile.",
    tags: ["Spicy", "Creamy", "Citrusy", "Rich"]
  },

  // ------------------------------
  // COCONUT STARLIGHT COOLER
  // ------------------------------
  {
    name: "Coconut Starlight Cooler",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      { name: "Light rum", amount: "2 oz" },
      { name: "Coconut water", amount: "2 oz" },
      { name: "Pineapple juice", amount: "2 oz" },
      { name: "Lime juice", amount: "0.75 oz" }
    ],
    instructions:
      "Build all ingredients in a highball with ice and stir gently.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },

  // ------------------------------
  // LAVENDER EMBER SOUR
  // ------------------------------
  {
    name: "Lavender Ember Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      { name: "Gin", amount: "2 oz" },
      { name: "Lavender syrup", amount: "0.75 oz" },
      { name: "Lemon juice", amount: "1 oz" },
      { name: "Egg white (optional)", amount: "1" }
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Floral", "Creamy", "Citrusy", "Refreshing"]
  },

  // ------------------------------
  // CRIMSON HORIZON SPRITZ
  // ------------------------------
  {
    name: "Crimson Horizon Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      { name: "Aperitivo liqueur", amount: "2 oz" },
      { name: "Blood orange juice", amount: "2 oz" },
      { name: "Prosecco", amount: "3 oz" },
      { name: "Club soda", amount: "1 oz" }
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier version.",
    tags: ["Citrusy", "Refreshing", "Sweet", "Fruity"]
  }

]; // END COPILOT ORIGINALS

// ==============================
// EXPORT (GLOBAL)
// ==============================

const allRecipes = [
  ...classicCocktails,
  ...modernCocktails,
  ...copilotOriginals
];

// Make available to app.js
window.recipes = allRecipes;

