// ==============================
// CLASSIC COCKTAILS
// ==============================

const classicCocktails = [
  {
    name: "Martini",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Dry vermouth",
      "Lemon twist or olive"
    ],
    instructions:
      "Stir gin and dry vermouth with ice until very cold. Strain into a chilled coupe. Garnish with a lemon twist or olive.",
    substitutions:
      "Use vodka instead of gin for a Vodka Martini. Adjust vermouth ratio to taste.",
    tags: ["Dry", "Spirit-forward", "Herbal", "Refreshing"]
  },
  {
    name: "Old Fashioned",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Simple syrup",
      "Angostura bitters",
      "Orange peel"
    ],
    instructions:
      "Build in a rocks glass: bourbon, simple syrup, and bitters. Add ice and stir until chilled. Garnish with an expressed orange peel.",
    substitutions:
      "Rye can replace bourbon for a spicier profile. Demerara syrup adds richer sweetness.",
    tags: ["Sweet", "Bitter", "Spirit-forward", "Rich"]
  },
  {
    name: "Negroni",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      "Gin",
      "Sweet vermouth",
      "Campari",
      "Orange peel"
    ],
    instructions:
      "Combine gin, sweet vermouth, and Campari over ice. Stir until chilled. Garnish with an orange peel.",
    substitutions:
      "Swap gin for bourbon to make a Boulevardier. Use different amari for subtle variations.",
    tags: ["Bitter", "Herbal", "Spirit-forward", "Rich"]
  },
  {
    name: "Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      "Light rum",
      "Lime juice",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice until well chilled. Strain into a chilled coupe.",
    substitutions:
      "Use aged rum for a more complex flavor. Adjust lime and syrup for sweeter or more sour balance.",
    tags: ["Citrusy", "Refreshing", "Sour", "Fruity"]
  },
  {
    name: "Margarita",
    base: "Tequila Blanco",
    glass: "Coupe",
    ingredients: [
      "Tequila blanco",
      "Triple sec or Cointreau",
      "Lime juice",
      "Salt (rim, optional)"
    ],
    instructions:
      "Shake tequila, orange liqueur, and lime juice with ice. Strain into a salt-rimmed coupe or rocks glass.",
    substitutions:
      "Mezcal can replace tequila for a smoky twist. Agave syrup can be added for extra sweetness.",
    tags: ["Citrusy", "Sour", "Refreshing", "Fruity"]
  }
];
  {
    name: "Manhattan",
    base: "Rye",
    glass: "Coupe",
    ingredients: [
      "Rye whiskey",
      "Sweet vermouth",
      "Angostura bitters",
      "Cherry"
    ],
    instructions:
      "Stir rye, sweet vermouth, and bitters with ice until chilled. Strain into a chilled coupe and garnish with a cherry.",
    substitutions:
      "Bourbon can replace rye for a sweeter profile. Add orange bitters for complexity.",
    tags: ["Spirit-forward", "Rich", "Bitter", "Herbal"]
  },
  {
    name: "Whiskey Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Lemon juice",
      "Simple syrup",
      "Egg white (optional)"
    ],
    instructions:
      "Shake all ingredients without ice, then shake again with ice. Strain into a chilled coupe or rocks glass.",
    substitutions:
      "Use rye for a spicier version. Aquafaba can replace egg white.",
    tags: ["Sour", "Refreshing", "Citrusy", "Creamy"]
  },
  {
    name: "Sidecar",
    base: "Cognac",
    glass: "Coupe",
    ingredients: [
      "Cognac",
      "Triple sec",
      "Lemon juice",
      "Sugar rim (optional)"
    ],
    instructions:
      "Shake cognac, triple sec, and lemon juice with ice. Strain into a chilled coupe, optionally with a sugar rim.",
    substitutions:
      "Brandy can replace cognac. Adjust lemon for more or less tartness.",
    tags: ["Citrusy", "Sour", "Spirit-forward", "Dry"]
  },
  {
    name: "Tom Collins",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Build gin, lemon, and syrup in a highball with ice. Top with club soda and gently stir.",
    substitutions:
      "Use lime instead of lemon for a different citrus profile.",
    tags: ["Refreshing", "Citrusy", "Fruity", "Dry"]
  },
  {
    name: "Mojito",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      "Light rum",
      "Lime juice",
      "Mint",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Muddle mint with syrup and lime. Add rum and ice, then top with club soda.",
    substitutions:
      "Use aged rum for a deeper flavor. Add bitters for complexity.",
    tags: ["Refreshing", "Herbal", "Citrusy", "Fruity"]
  },
  {
    name: "Mai Tai",
    base: "Aged Rum",
    glass: "Rocks",
    ingredients: [
      "Aged rum",
      "Dark rum (float)",
      "Lime juice",
      "Orange curaçao",
      "Orgeat"
    ],
    instructions:
      "Shake all ingredients except dark rum. Strain over crushed ice and float dark rum on top.",
    substitutions:
      "Use light rum for a brighter version. Add pineapple for a tropical twist.",
    tags: ["Tropical", "Nutty", "Fruity", "Rich"]
  },
  {
    name: "Sazerac",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Absinthe (rinse)",
      "Sugar cube",
      "Peychaud’s bitters",
      "Lemon peel"
    ],
    instructions:
      "Rinse a chilled rocks glass with absinthe. Stir rye, sugar, and bitters with ice. Strain into the prepared glass and garnish with lemon peel.",
    substitutions:
      "Cognac can replace rye for a classic variation.",
    tags: ["Spirit-forward", "Herbal", "Dry", "Rich"]
  },
  {
    name: "Boulevardier",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Sweet vermouth",
      "Campari",
      "Orange peel"
    ],
    instructions:
      "Stir bourbon, sweet vermouth, and Campari with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Rye can replace bourbon for a spicier profile.",
    tags: ["Bitter", "Rich", "Spirit-forward", "Herbal"]
  },
  {
    name: "French 75",
    base: "Gin",
    glass: "Flute",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Simple syrup",
      "Champagne"
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a flute and top with champagne.",
    substitutions:
      "Use cognac instead of gin for a classic variation.",
    tags: ["Refreshing", "Citrusy", "Fruity", "Dry"]
  },
  {
    name: "Aviation",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Maraschino liqueur",
      "Crème de violette",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Skip crème de violette for a more traditional version.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  }
];
  {
    name: "Mint Julep",
    base: "Bourbon",
    glass: "Julep cup",
    ingredients: [
      "Bourbon",
      "Mint",
      "Simple syrup",
      "Crushed ice"
    ],
    instructions:
      "Muddle mint and syrup gently in a julep cup. Add bourbon and crushed ice. Stir until the cup frosts.",
    substitutions:
      "Use aged rum for a rum julep variation.",
    tags: ["Refreshing", "Herbal", "Sweet", "Dry"]
  },
  {
    name: "Pisco Sour",
    base: "Pisco",
    glass: "Coupe",
    ingredients: [
      "Pisco",
      "Lemon juice",
      "Simple syrup",
      "Egg white",
      "Angostura bitters"
    ],
    instructions:
      "Dry shake all ingredients except bitters, then shake again with ice. Strain into a coupe and add bitters drops.",
    substitutions:
      "Aquafaba can replace egg white.",
    tags: ["Sour", "Citrusy", "Creamy", "Refreshing"]
  },
  {
    name: "Cosmopolitan",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Triple sec",
      "Cranberry juice",
      "Lime juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use raspberry liqueur for a fruitier variation.",
    tags: ["Fruity", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Moscow Mule",
    base: "Vodka",
    glass: "Copper mug",
    ingredients: [
      "Vodka",
      "Lime juice",
      "Ginger beer"
    ],
    instructions:
      "Build vodka and lime in a copper mug with ice. Top with ginger beer.",
    substitutions:
      "Use bourbon for a Kentucky Mule or tequila for a Mexican Mule.",
    tags: ["Spicy", "Refreshing", "Citrusy", "Fruity"]
  },
  {
    name: "Caipirinha",
    base: "Other Spirits",
    glass: "Rocks",
    ingredients: [
      "Cachaça",
      "Lime",
      "Sugar"
    ],
    instructions:
      "Muddle lime and sugar. Add cachaça and crushed ice. Stir well.",
    substitutions:
      "Use vodka for a Caipiroska.",
    tags: ["Citrusy", "Refreshing", "Sour", "Fruity"]
  },
  {
    name: "Americano",
    base: "Other Spirits",
    glass: "Highball",
    ingredients: [
      "Campari",
      "Sweet vermouth",
      "Club soda"
    ],
    instructions:
      "Build Campari and vermouth over ice. Top with soda.",
    substitutions:
      "Add gin to make a Negroni.",
    tags: ["Bitter", "Refreshing", "Dry", "Herbal"]
  },
  {
    name: "Vesper",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Vodka",
      "Lillet Blanc",
      "Lemon twist"
    ],
    instructions:
      "Shake gin, vodka, and Lillet with ice. Strain into a chilled coupe and garnish with a lemon twist.",
    substitutions:
      "Cocchi Americano can replace Lillet.",
    tags: ["Spirit-forward", "Dry", "Herbal", "Refreshing"]
  },
  {
    name: "Rob Roy",
    base: "Scotch",
    glass: "Coupe",
    ingredients: [
      "Scotch",
      "Sweet vermouth",
      "Angostura bitters",
      "Cherry"
    ],
    instructions:
      "Stir Scotch, vermouth, and bitters with ice. Strain into a coupe and garnish with a cherry.",
    substitutions:
      "Use dry vermouth for a Dry Rob Roy.",
    tags: ["Spirit-forward", "Rich", "Herbal", "Dry"]
  },
  {
    name: "Gimlet",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Lime juice",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a Vodka Gimlet.",
    tags: ["Citrusy", "Refreshing", "Sour", "Dry"]
  },
  {
    name: "Bee’s Knees",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Honey syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Add lavender bitters for a floral variation.",
    tags: ["Sweet", "Citrusy", "Refreshing", "Floral"]
  }
];
  {
    name: "Clover Club",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Raspberry syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a chilled coupe.",
    substitutions:
      "Grenadine can replace raspberry syrup in a pinch.",
    tags: ["Fruity", "Creamy", "Citrusy", "Refreshing"]
  },
  {
    name: "Last Word",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Green Chartreuse",
      "Maraschino liqueur",
      "Lime juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Yellow Chartreuse creates a softer variation.",
    tags: ["Herbal", "Citrusy", "Refreshing", "Dry"]
  },
  {
    name: "Corpse Reviver #2",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Cointreau",
      "Lillet Blanc",
      "Lemon juice",
      "Absinthe (rinse)"
    ],
    instructions:
      "Rinse a coupe with absinthe. Shake remaining ingredients with ice and strain into the glass.",
    substitutions:
      "Cocchi Americano can replace Lillet.",
    tags: ["Citrusy", "Herbal", "Refreshing", "Dry"]
  },
  {
    name: "Vieux Carré",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Cognac",
      "Sweet vermouth",
      "Bénédictine",
      "Angostura bitters",
      "Peychaud’s bitters"
    ],
    instructions:
      "Stir all ingredients with ice and strain over a large cube.",
    substitutions:
      "Increase cognac for a richer version.",
    tags: ["Rich", "Herbal", "Spirit-forward", "Bitter"]
  },
  {
    name: "Ramos Gin Fizz",
    base: "Gin",
    glass: "Fizz glass",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Lime juice",
      "Cream",
      "Egg white",
      "Orange flower water",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake all ingredients except soda for at least 30 seconds. Add ice and shake again. Strain into a tall glass and top with soda.",
    substitutions:
      "Skip cream for a lighter fizz.",
    tags: ["Creamy", "Citrusy", "Floral", "Refreshing"]
  },
  {
    name: "Planter’s Punch",
    base: "Dark Rum",
    glass: "Highball",
    ingredients: [
      "Dark rum",
      "Lime juice",
      "Grenadine",
      "Simple syrup",
      "Angostura bitters"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a highball over fresh ice.",
    substitutions:
      "Add pineapple juice for a tropical twist.",
    tags: ["Tropical", "Fruity", "Sweet", "Spicy"]
  },
  {
    name: "Hemingway Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      "Light rum",
      "Grapefruit juice",
      "Lime juice",
      "Maraschino liqueur"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Add simple syrup if you prefer it sweeter.",
    tags: ["Citrusy", "Dry", "Refreshing", "Fruity"]
  },
  {
    name: "Singapore Sling",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Cherry liqueur",
      "Benedictine",
      "Cointreau",
      "Pineapple juice",
      "Lime juice",
      "Grenadine",
      "Angostura bitters"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a highball over fresh ice.",
    substitutions:
      "Use soda water to lighten the drink.",
    tags: ["Fruity", "Tropical", "Sweet", "Refreshing"]
  },
  {
    name: "Harvey Wallbanger",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Orange juice",
      "Galliano"
    ],
    instructions:
      "Build vodka and orange juice over ice. Float Galliano on top.",
    substitutions:
      "Use vanilla syrup for a non-alcoholic Galliano substitute.",
    tags: ["Fruity", "Sweet", "Refreshing", "Citrusy"]
  },
  {
    name: "Rusty Nail",
    base: "Scotch",
    glass: "Rocks",
    ingredients: [
      "Scotch",
      "Drambuie"
    ],
    instructions:
      "Stir Scotch and Drambuie with ice and strain over a large cube.",
    substitutions:
      "Use blended Scotch for a milder version.",
    tags: ["Sweet", "Rich", "Spirit-forward", "Herbal"]
  }
];
  {
    name: "Blood and Sand",
    base: "Scotch",
    glass: "Coupe",
    ingredients: [
      "Scotch",
      "Sweet vermouth",
      "Cherry liqueur",
      "Orange juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use blended Scotch for a softer profile.",
    tags: ["Fruity", "Sweet", "Rich", "Spirit-forward"]
  },
  {
    name: "Bramble",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Simple syrup",
      "Blackberry liqueur"
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain over crushed ice and drizzle blackberry liqueur on top.",
    substitutions:
      "Use raspberry liqueur for a twist.",
    tags: ["Fruity", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Caipiroska",
    base: "Vodka",
    glass: "Rocks",
    ingredients: [
      "Vodka",
      "Lime",
      "Sugar"
    ],
    instructions:
      "Muddle lime and sugar. Add vodka and crushed ice. Stir well.",
    substitutions:
      "Use brown sugar for a richer flavor.",
    tags: ["Citrusy", "Refreshing", "Sour", "Dry"]
  },
  {
    name: "Jack Rose",
    base: "Brandy",
    glass: "Coupe",
    ingredients: [
      "Apple brandy",
      "Grenadine",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use pomegranate syrup instead of grenadine.",
    tags: ["Fruity", "Citrusy", "Sour", "Refreshing"]
  },
  {
    name: "Hanky Panky",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Sweet vermouth",
      "Fernet-Branca"
    ],
    instructions:
      "Stir all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Add orange bitters for brightness.",
    tags: ["Herbal", "Bitter", "Dry", "Spirit-forward"]
  },
  {
    name: "Paper Plane",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Aperol",
      "Amaro Nonino",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use Montenegro if Nonino is unavailable.",
    tags: ["Bitter", "Citrusy", "Refreshing", "Dry"]
  },
  {
    name: "Gin Fizz",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Add egg white for a Silver Fizz.",
    tags: ["Refreshing", "Citrusy", "Dry", "Fruity"]
  },
  {
    name: "Cuba Libre",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      "Light rum",
      "Cola",
      "Lime juice"
    ],
    instructions:
      "Build rum and lime over ice. Top with cola.",
    substitutions:
      "Use aged rum for more depth.",
    tags: ["Sweet", "Refreshing", "Fruity", "Citrusy"]
  },
  {
    name: "Tequila Sunrise",
    base: "Tequila Blanco",
    glass: "Highball",
    ingredients: [
      "Tequila blanco",
      "Orange juice",
      "Grenadine"
    ],
    instructions:
      "Build tequila and orange juice over ice. Slowly pour grenadine to create a sunrise effect.",
    substitutions:
      "Use blood orange juice for a richer color.",
    tags: ["Fruity", "Sweet", "Citrusy", "Refreshing"]
  },
  {
    name: "Amaretto Sour",
    base: "Other Spirits",
    glass: "Rocks",
    ingredients: [
      "Amaretto",
      "Lemon juice",
      "Simple syrup",
      "Egg white (optional)"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Add bourbon for a more balanced modern version.",
    tags: ["Nutty", "Sweet", "Citrusy", "Creamy"]
  }
];
// ==============================
// MODERN COCKTAILS
// ==============================

const modernCocktails = [
  {
    name: "Espresso Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Coffee liqueur",
      "Fresh espresso",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients hard with ice to create a foamy texture. Strain into a chilled coupe.",
    substitutions:
      "Cold brew concentrate can replace espresso. Adjust syrup for sweetness.",
    tags: ["Coffee", "Dessert", "Rich", "Sweet"]
  },
  {
    name: "Penicillin",
    base: "Scotch",
    glass: "Rocks",
    ingredients: [
      "Blended Scotch",
      "Honey-ginger syrup",
      "Lemon juice",
      "Islay Scotch (float)"
    ],
    instructions:
      "Shake blended Scotch, honey-ginger syrup, and lemon with ice. Strain over fresh ice in a rocks glass. Float a small amount of Islay Scotch on top.",
    substitutions:
      "Use bourbon if Scotch is unavailable. Ginger syrup can be simplified with ginger and sugar.",
    tags: ["Smoky", "Spicy", "Rich", "Herbal"]
  },
  {
    name: "Paper Plane",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Aperol",
      "Amaro Nonino",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use Montenegro if Nonino is unavailable.",
    tags: ["Bitter", "Citrusy", "Refreshing", "Dry"]
  },
  {
    name: "Oaxaca Old Fashioned",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      "Mezcal",
      "Tequila reposado",
      "Agave syrup",
      "Angostura bitters",
      "Orange peel"
    ],
    instructions:
      "Stir mezcal, tequila, agave, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use only tequila for a less smoky version.",
    tags: ["Smoky", "Spirit-forward", "Rich", "Dry"]
  },
  {
    name: "Basil Smash",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Simple syrup",
      "Fresh basil"
    ],
    instructions:
      "Muddle basil with syrup and lemon. Add gin and ice, shake hard, and double strain over fresh ice.",
    substitutions:
      "Use mint instead of basil for a different herbal profile.",
    tags: ["Herbal", "Refreshing", "Citrusy", "Dry"]
  },
  {
    name: "Naked and Famous",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      "Mezcal",
      "Aperol",
      "Yellow Chartreuse",
      "Lime juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use green Chartreuse for a sharper herbal note.",
    tags: ["Smoky", "Herbal", "Citrusy", "Refreshing"]
  },
  {
    name: "Jungle Bird",
    base: "Dark Rum",
    glass: "Rocks",
    ingredients: [
      "Dark rum",
      "Campari",
      "Pineapple juice",
      "Lime juice",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use aged rum for more depth.",
    tags: ["Tropical", "Bitter", "Fruity", "Refreshing"]
  },
  {
    name: "Aperol Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Aperol",
      "Prosecco",
      "Club soda",
      "Orange slice"
    ],
    instructions:
      "Build Aperol and prosecco over ice. Add a splash of soda and garnish with an orange slice.",
    substitutions:
      "Use Campari for a more bitter spritz.",
    tags: ["Refreshing", "Bitter", "Citrusy", "Dry"]
  },
  {
    name: "Mezcal Mule",
    base: "Mezcal",
    glass: "Copper mug",
    ingredients: [
      "Mezcal",
      "Lime juice",
      "Ginger beer"
    ],
    instructions:
      "Build mezcal and lime over ice. Top with ginger beer.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Spicy", "Refreshing", "Citrusy"]
  },
  {
    name: "French Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Raspberry liqueur",
      "Pineapple juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use blackberry liqueur for a darker fruit profile.",
    tags: ["Fruity", "Sweet", "Tropical", "Refreshing"]
  }
];
  {
    name: "Gin Basil Smash",
    base: "Gin",
    glass: "Rocks",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Simple syrup",
      "Fresh basil"
    ],
    instructions:
      "Muddle basil with syrup and lemon juice. Add gin and ice, shake hard, and double strain over fresh ice.",
    substitutions:
      "Swap basil for mint for a different herbal profile.",
    tags: ["Herbal", "Refreshing", "Citrusy", "Dry"]
  },
  {
    name: "Clover Club Revival",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Raspberry syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a chilled coupe.",
    substitutions:
      "Use grenadine if raspberry syrup is unavailable.",
    tags: ["Fruity", "Creamy", "Citrusy", "Refreshing"]
  },
  {
    name: "Mezcal Paloma",
    base: "Mezcal",
    glass: "Highball",
    ingredients: [
      "Mezcal",
      "Grapefruit juice",
      "Lime juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Build mezcal, juices, and syrup in a highball with ice. Top with soda and stir gently.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Citrusy", "Refreshing", "Dry"]
  },
  {
    name: "Elderflower Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Elderflower liqueur",
      "Prosecco",
      "Club soda",
      "Lemon wheel"
    ],
    instructions:
      "Build elderflower liqueur and prosecco over ice. Add a splash of soda and garnish with a lemon wheel.",
    substitutions:
      "Use tonic water for a more bitter profile.",
    tags: ["Floral", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Chartreuse Swizzle",
    base: "Other Spirits",
    glass: "Highball",
    ingredients: [
      "Green Chartreuse",
      "Pineapple juice",
      "Lime juice",
      "Falernum",
      "Crushed ice"
    ],
    instructions:
      "Build all ingredients in a highball with crushed ice. Swizzle until frosty.",
    substitutions:
      "Use yellow Chartreuse for a softer herbal note.",
    tags: ["Herbal", "Tropical", "Fruity", "Refreshing"]
  },
  {
    name: "Modern Mai Tai",
    base: "Aged Rum",
    glass: "Rocks",
    ingredients: [
      "Aged rum",
      "Lime juice",
      "Orgeat",
      "Orange curaçao",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain over crushed ice.",
    substitutions:
      "Add a dark rum float for extra richness.",
    tags: ["Tropical", "Nutty", "Fruity", "Sweet"]
  },
  {
    name: "Lavender Bee’s Knees",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Lavender honey syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use regular honey syrup if lavender is unavailable.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Smoked Maple Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Maple syrup",
      "Angostura bitters",
      "Orange peel"
    ],
    instructions:
      "Stir rye, maple syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Sweet", "Spirit-forward", "Smoky"]
  },
  {
    name: "Grapefruit Collins",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Grapefruit juice",
      "Lemon juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake vodka, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal version.",
    tags: ["Citrusy", "Refreshing", "Dry", "Fruity"]
  },
  {
    name: "Pineapple Mezcal Sour",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      "Mezcal",
      "Pineapple juice",
      "Lime juice",
      "Simple syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a chilled coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Smoky", "Tropical", "Creamy", "Refreshing"]
  }
];
  {
    name: "Blackberry Bourbon Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Blackberries",
      "Lemon juice",
      "Simple syrup",
      "Mint"
    ],
    instructions:
      "Muddle blackberries and mint with syrup. Add bourbon and lemon, shake with ice, and strain over fresh ice.",
    substitutions:
      "Use raspberries for a brighter fruit profile.",
    tags: ["Fruity", "Refreshing", "Sweet", "Herbal"]
  },
  {
    name: "Coconut Rum Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      "Light rum",
      "Coconut cream",
      "Lime juice",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Tropical", "Creamy", "Sweet", "Refreshing"]
  },
  {
    name: "Ginger Pear Mule",
    base: "Vodka",
    glass: "Copper mug",
    ingredients: [
      "Vodka",
      "Pear nectar",
      "Lime juice",
      "Ginger beer"
    ],
    instructions:
      "Build vodka, pear, and lime over ice. Top with ginger beer.",
    substitutions:
      "Use gin for a more herbal version.",
    tags: ["Fruity", "Spicy", "Refreshing", "Sweet"]
  },
  {
    name: "Rosemary Gin Rickey",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Lime juice",
      "Rosemary syrup",
      "Club soda"
    ],
    instructions:
      "Build gin, lime, and syrup in a highball with ice. Top with soda and stir gently.",
    substitutions:
      "Use thyme syrup for a different herbal twist.",
    tags: ["Herbal", "Refreshing", "Dry", "Citrusy"]
  },
  {
    name: "Spicy Mango Margarita",
    base: "Tequila Blanco",
    glass: "Rocks",
    ingredients: [
      "Tequila blanco",
      "Mango puree",
      "Lime juice",
      "Simple syrup",
      "Jalapeño slices"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice. Garnish with jalapeño.",
    substitutions:
      "Use mezcal for a smoky version.",
    tags: ["Spicy", "Tropical", "Fruity", "Sweet"]
  },
  {
    name: "Blueberry Lavender Collins",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Blueberry syrup",
      "Lavender syrup",
      "Lemon juice",
      "Club soda"
    ],
    instructions:
      "Shake vodka, syrups, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a floral-herbal variation.",
    tags: ["Floral", "Fruity", "Refreshing", "Sweet"]
  },
  {
    name: "Smoked Pineapple Sour",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      "Mezcal",
      "Pineapple juice",
      "Lime juice",
      "Simple syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Smoky", "Tropical", "Creamy", "Refreshing"]
  },
  {
    name: "Cucumber Mint Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Cucumber slices",
      "Mint",
      "Lime juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Muddle cucumber and mint with syrup. Add gin and lime, shake lightly, strain into a highball, and top with soda.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Refreshing", "Herbal", "Dry", "Citrusy"]
  },
  {
    name: "Raspberry Vanilla Sour",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Raspberry syrup",
      "Vanilla syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use bourbon for a richer version.",
    tags: ["Fruity", "Sweet", "Creamy", "Citrusy"]
  },
  {
    name: "Pomegranate Gin Fizz",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Pomegranate juice",
      "Lemon juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake gin, pomegranate, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use tonic water for a more bitter finish.",
    tags: ["Fruity", "Refreshing", "Citrusy", "Dry"]
  }
];
  {
    name: "Fig & Bourbon Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Fig syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use maple syrup instead of fig syrup for a different richness.",
    tags: ["Rich", "Fruity", "Creamy", "Citrusy"]
  },
  {
    name: "Hibiscus Margarita",
    base: "Tequila Blanco",
    glass: "Rocks",
    ingredients: [
      "Tequila blanco",
      "Hibiscus syrup",
      "Lime juice",
      "Triple sec"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use mezcal for a smoky hibiscus variation.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Charred Grapefruit Paloma",
    base: "Tequila Reposado",
    glass: "Highball",
    ingredients: [
      "Tequila reposado",
      "Charred grapefruit juice",
      "Lime juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake tequila, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use regular grapefruit juice if charred is unavailable.",
    tags: ["Citrusy", "Smoky", "Refreshing", "Dry"]
  },
  {
    name: "Matcha Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Matcha syrup",
      "Lemon juice",
      "Club soda"
    ],
    instructions:
      "Build vodka, matcha syrup, and lemon in a highball with ice. Top with soda.",
    substitutions:
      "Use gin for a more herbal version.",
    tags: ["Herbal", "Refreshing", "Dry", "Citrusy"]
  },
  {
    name: "Salted Caramel White Russian",
    base: "Vodka",
    glass: "Rocks",
    ingredients: [
      "Vodka",
      "Coffee liqueur",
      "Salted caramel syrup",
      "Cream"
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use coconut cream for a dairy-free version.",
    tags: ["Dessert", "Sweet", "Creamy", "Rich"]
  },
  {
    name: "Grapefruit Rosemary Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Aperitivo liqueur",
      "Grapefruit juice",
      "Rosemary syrup",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use tonic water for a more bitter finish.",
    tags: ["Refreshing", "Citrusy", "Herbal", "Dry"]
  },
  {
    name: "Spiced Pear Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Pear nectar",
      "Lemon juice",
      "Spiced syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Fruity", "Spicy", "Creamy", "Citrusy"]
  },
  {
    name: "Pineapple Coconut Highball",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      "Light rum",
      "Pineapple juice",
      "Coconut water",
      "Lime juice"
    ],
    instructions:
      "Build all ingredients in a highball with ice and stir gently.",
    substitutions:
      "Use aged rum for more depth.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },
  {
    name: "Black Tea Collins",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Black tea syrup",
      "Lemon juice",
      "Club soda"
    ],
    instructions:
      "Shake gin, tea syrup, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use Earl Grey syrup for a floral twist.",
    tags: ["Dry", "Refreshing", "Herbal", "Citrusy"]
  },
  {
    name: "Cinnamon Maple Sour",
    base: "Rye",
    glass: "Coupe",
    ingredients: [
      "Rye whiskey",
      "Maple syrup",
      "Lemon juice",
      "Cinnamon"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a coupe.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Spicy", "Citrusy", "Sweet"]
  }
];
  {
    name: "Vanilla Chai White Russian",
    base: "Vodka",
    glass: "Rocks",
    ingredients: [
      "Vodka",
      "Coffee liqueur",
      "Chai syrup",
      "Cream",
      "Vanilla extract"
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use coconut cream for a dairy-free version.",
    tags: ["Dessert", "Creamy", "Sweet", "Rich"]
  },
  {
    name: "Ginger Lemongrass Highball",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Lemongrass syrup",
      "Lime juice",
      "Ginger beer"
    ],
    instructions:
      "Build gin, syrup, and lime over ice. Top with ginger beer.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Herbal", "Spicy", "Refreshing", "Citrusy"]
  },
  {
    name: "Blackberry Sage Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Blackberries",
      "Sage leaves",
      "Lemon juice",
      "Simple syrup"
    ],
    instructions:
      "Muddle blackberries and sage with syrup. Add bourbon and lemon, shake with ice, and strain over fresh ice.",
    substitutions:
      "Use rosemary instead of sage for a piney twist.",
    tags: ["Fruity", "Herbal", "Refreshing", "Sweet"]
  },
  {
    name: "Coconut Matcha Sour",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Matcha syrup",
      "Coconut cream",
      "Lime juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Creamy", "Herbal", "Tropical", "Refreshing"]
  },
  {
    name: "Spiced Cranberry Mule",
    base: "Vodka",
    glass: "Copper mug",
    ingredients: [
      "Vodka",
      "Cranberry juice",
      "Lime juice",
      "Spiced syrup",
      "Ginger beer"
    ],
    instructions:
      "Build vodka, cranberry, lime, and syrup over ice. Top with ginger beer.",
    substitutions:
      "Use bourbon for a warmer winter profile.",
    tags: ["Fruity", "Spicy", "Refreshing", "Sweet"]
  },
  {
    name: "Honeydew Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Honeydew juice",
      "Lime juice",
      "Simple syrup",
      "Mint"
    ],
    instructions:
      "Shake all ingredients except mint with ice. Strain into a highball over fresh ice and garnish with mint.",
    substitutions:
      "Use vodka for a softer flavor.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Smoked Cherry Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Cherry syrup",
      "Angostura bitters",
      "Smoked cherry wood"
    ],
    instructions:
      "Stir rye, syrup, and bitters with ice. Strain over a large cube and smoke with cherry wood.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Smoky", "Sweet", "Spirit-forward"]
  },
  {
    name: "Lychee Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Lychee liqueur",
      "Lychee juice",
      "Lime juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use gin for a floral-herbal variation.",
    tags: ["Fruity", "Sweet", "Refreshing", "Floral"]
  },
  {
    name: "Coconut Water Mojito",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      "Light rum",
      "Coconut water",
      "Mint",
      "Lime juice",
      "Simple syrup"
    ],
    instructions:
      "Muddle mint with syrup and lime. Add rum and coconut water, stir with ice.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Refreshing", "Herbal", "Tropical", "Citrusy"]
  },
  {
    name: "Blueberry Ginger Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Blueberry syrup",
      "Ginger syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Fruity", "Spicy", "Creamy", "Citrusy"]
  }
];
// ==============================
// COPILOT ORIGINALS
// ==============================

const copilotOriginals = [
  {
    name: "BlueBar Signature Coupe",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Elderflower liqueur",
      "Dry vermouth",
      "Lemon juice",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice until well chilled. Double strain into a chilled coupe and garnish with a lemon twist.",
    substitutions:
      "Use vodka instead of gin for a softer profile.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Midnight Citrus Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Grapefruit juice",
      "Lime juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Build vodka, juices, and syrup in a highball with ice. Top with club soda and stir gently.",
    substitutions:
      "Use gin for a more herbal variation.",
    tags: ["Citrusy", "Refreshing", "Dry", "Fruity"]
  },
  {
    name: "Electric Ocean Sour",
    base: "Tequila Blanco",
    glass: "Coupe",
    ingredients: [
      "Tequila blanco",
      "Blue curaçao",
      "Lime juice",
      "Agave syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Citrusy", "Tropical", "Creamy", "Refreshing"]
  },
  {
    name: "Smoked Honey Ember",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      "Mezcal",
      "Honey syrup",
      "Lemon juice",
      "Angostura bitters"
    ],
    instructions:
      "Shake all ingredients with ice and strain over a large cube.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Sweet", "Citrusy", "Rich"]
  },
  {
    name: "Lavender Sky Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Elderflower liqueur",
      "Lavender syrup",
      "Prosecco",
      "Club soda",
      "Lemon wheel"
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use tonic water for a more bitter finish.",
    tags: ["Floral", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Golden Orchard Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Apple cider",
      "Lemon juice",
      "Cinnamon syrup",
      "Apple slices"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice. Garnish with apple slices.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Fruity", "Spicy", "Rich", "Sweet"]
  },
  {
    name: "Neon Dragon Fizz",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Dragonfruit puree",
      "Lime juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake vodka, puree, lime, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more botanical version.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },
  {
    name: "Cocoa Smoke Old Fashioned",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      "Mezcal",
      "Cocoa nib syrup",
      "Angostura bitters",
      "Orange peel"
    ],
    instructions:
      "Stir mezcal, cocoa syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter, less smoky version.",
    tags: ["Smoky", "Chocolate", "Rich", "Spirit-forward"]
  },
  {
    name: "Sunset Orchard Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Aperitivo liqueur",
      "Peach nectar",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier profile.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Frosted Mint Gimlet",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Lime juice",
      "Mint syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Refreshing", "Herbal", "Citrusy", "Dry"]
  }
];
  {
    name: "Crimson Orchard Fizz",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Cranberry juice",
      "Apple cider",
      "Lime juice",
      "Club soda"
    ],
    instructions:
      "Shake vodka, cranberry, cider, and lime with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal profile.",
    tags: ["Fruity", "Refreshing", "Citrusy", "Sweet"]
  },
  {
    name: "Honeydew Sky Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Honeydew juice",
      "Lime juice",
      "Simple syrup",
      "Mint"
    ],
    instructions:
      "Shake all ingredients except mint with ice. Strain into a highball over fresh ice and garnish with mint.",
    substitutions:
      "Use vodka for a softer flavor.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Golden Chai Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Chai syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use maple syrup instead of chai syrup for a richer profile.",
    tags: ["Spicy", "Creamy", "Rich", "Citrusy"]
  },
  {
    name: "Tropical Ember Highball",
    base: "Mezcal",
    glass: "Highball",
    ingredients: [
      "Mezcal",
      "Pineapple juice",
      "Lime juice",
      "Agave syrup",
      "Club soda"
    ],
    instructions:
      "Shake mezcal, pineapple, lime, and agave with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Tropical", "Refreshing", "Fruity"]
  },
  {
    name: "Velvet Rose Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Rose syrup",
      "Lychee juice",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use gin for a floral-herbal variation.",
    tags: ["Floral", "Fruity", "Sweet", "Refreshing"]
  },
  {
    name: "Citrus Grove Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Orange blossom honey syrup",
      "Angostura bitters",
      "Orange peel"
    ],
    instructions:
      "Stir rye, honey syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Citrusy", "Spirit-forward", "Sweet"]
  },
  {
    name: "Blueberry Cloud Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Blueberry syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Fruity", "Creamy", "Citrusy", "Refreshing"]
  },
  {
    name: "Coconut Orchid Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Coconut liqueur",
      "Pineapple juice",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier profile.",
    tags: ["Tropical", "Refreshing", "Sweet", "Fruity"]
  },
  {
    name: "Amber Maple Smash",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Maple syrup",
      "Lemon juice",
      "Orange bitters"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Rich", "Sweet", "Citrusy", "Dry"]
  },
  {
    name: "Starlight Gin Fizz",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Lavender syrup",
      "Club soda"
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use elderflower syrup for a floral twist.",
    tags: ["Floral", "Refreshing", "Citrusy", "Dry"]
  }
];
  {
    name: "Citrus Starlight Cooler",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Lemon juice",
      "Grapefruit juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake vodka, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal variation.",
    tags: ["Citrusy", "Refreshing", "Dry", "Fruity"]
  },
  {
    name: "Orchid Mist Martini",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Elderflower liqueur",
      "Lavender syrup",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a softer floral profile.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Maple Ember Old Fashioned",
    base: "Bourbon",
    glass: "Rocks",
    ingredients: [
      "Bourbon",
      "Maple syrup",
      "Angostura bitters",
      "Orange peel"
    ],
    instructions:
      "Stir bourbon, maple syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Rich", "Sweet", "Spirit-forward", "Dry"]
  },
  {
    name: "Tropical Starlight Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Passionfruit syrup",
      "Pineapple juice",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice in a wine glass and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier version.",
    tags: ["Tropical", "Refreshing", "Sweet", "Fruity"]
  },
  {
    name: "Frosted Coconut Sour",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      "Light rum",
      "Coconut cream",
      "Lime juice",
      "Simple syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use aquafaba instead of egg white.",
    tags: ["Creamy", "Tropical", "Refreshing", "Sweet"]
  },
  {
    name: "Blue Velvet Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Blue curaçao",
      "Lemon juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake vodka, curaçao, lemon, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more botanical profile.",
    tags: ["Citrusy", "Refreshing", "Sweet", "Tropical"]
  },
  {
    name: "Honey Blossom Gimlet",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Honey syrup",
      "Lime juice",
      "Orange blossom water"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use vodka for a softer flavor.",
    tags: ["Floral", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Crimson Smoke Sour",
    base: "Mezcal",
    glass: "Coupe",
    ingredients: [
      "Mezcal",
      "Pomegranate juice",
      "Lime juice",
      "Simple syrup",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Fruity", "Creamy", "Citrusy"]
  },
  {
    name: "Peach Garden Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Peach nectar",
      "Elderflower liqueur",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling wine for a drier version.",
    tags: ["Fruity", "Floral", "Refreshing", "Sweet"]
  },
  {
    name: "Winter Spice Highball",
    base: "Rye",
    glass: "Highball",
    ingredients: [
      "Rye whiskey",
      "Spiced syrup",
      "Lemon juice",
      "Club soda"
    ],
    instructions:
      "Shake rye, syrup, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Spicy", "Refreshing", "Citrusy", "Dry"]
  }
];
  {
    name: "Solar Flare Daiquiri",
    base: "Light Rum",
    glass: "Coupe",
    ingredients: [
      "Light rum",
      "Passionfruit syrup",
      "Lime juice",
      "Simple syrup"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Tropical", "Citrusy", "Refreshing", "Sweet"]
  },
  {
    name: "Emerald Garden Cooler",
    base: "Gin",
    glass: "Highball",
    ingredients: [
      "Gin",
      "Cucumber juice",
      "Lime juice",
      "Mint syrup",
      "Club soda"
    ],
    instructions:
      "Shake gin, cucumber, lime, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Refreshing", "Herbal", "Dry", "Citrusy"]
  },
  {
    name: "Crimson Velvet Martini",
    base: "Vodka",
    glass: "Coupe",
    ingredients: [
      "Vodka",
      "Raspberry syrup",
      "Vanilla syrup",
      "Lemon juice"
    ],
    instructions:
      "Shake all ingredients with ice and strain into a chilled coupe.",
    substitutions:
      "Use gin for a more botanical variation.",
    tags: ["Fruity", "Sweet", "Citrusy", "Refreshing"]
  },
  {
    name: "Honey Fire Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Honey syrup",
      "Cinnamon bitters",
      "Orange peel"
    ],
    instructions:
      "Stir rye, honey syrup, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Spicy", "Sweet", "Spirit-forward"]
  },
  {
    name: "Blue Lagoon Breeze",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Blue curaçao",
      "Pineapple juice",
      "Lime juice",
      "Club soda"
    ],
    instructions:
      "Shake vodka, curaçao, pineapple, and lime with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use coconut water instead of soda for a tropical twist.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },
  {
    name: "Rose Gold Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Elderflower liqueur",
      "Rose syrup",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier version.",
    tags: ["Floral", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Cocoa Mint Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Cocoa syrup",
      "Mint syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Chocolate", "Herbal", "Creamy", "Citrusy"]
  },
  {
    name: "Pineapple Ember Smash",
    base: "Mezcal",
    glass: "Rocks",
    ingredients: [
      "Mezcal",
      "Pineapple juice",
      "Lime juice",
      "Agave syrup",
      "Chili bitters"
    ],
    instructions:
      "Shake all ingredients with ice and strain over fresh ice.",
    substitutions:
      "Use tequila for a less smoky version.",
    tags: ["Smoky", "Tropical", "Spicy", "Fruity"]
  },
  {
    name: "Lavender Moon Collins",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Lavender syrup",
      "Lemon juice",
      "Club soda"
    ],
    instructions:
      "Shake vodka, lavender, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a floral-herbal twist.",
    tags: ["Floral", "Refreshing", "Citrusy", "Dry"]
  },
  {
    name: "Autumn Orchard Fizz",
    base: "Bourbon",
    glass: "Highball",
    ingredients: [
      "Bourbon",
      "Apple cider",
      "Lemon juice",
      "Maple syrup",
      "Club soda"
    ],
    instructions:
      "Shake bourbon, cider, lemon, and maple with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Fruity", "Rich", "Refreshing", "Citrusy"]
  }
];
  {
    name: "Starfall Gin Sparkler",
    base: "Gin",
    glass: "Flute",
    ingredients: [
      "Gin",
      "Lemon juice",
      "Elderflower syrup",
      "Champagne"
    ],
    instructions:
      "Shake gin, lemon, and syrup with ice. Strain into a flute and top with champagne.",
    substitutions:
      "Use prosecco for a sweeter finish.",
    tags: ["Floral", "Citrusy", "Refreshing", "Dry"]
  },
  {
    name: "Cocoa Cherry Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Cherry syrup",
      "Cocoa syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use rye for a spicier version.",
    tags: ["Chocolate", "Fruity", "Creamy", "Rich"]
  },
  {
    name: "Tangerine Dream Highball",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Tangerine juice",
      "Lime juice",
      "Simple syrup",
      "Club soda"
    ],
    instructions:
      "Shake vodka, juices, and syrup with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more botanical twist.",
    tags: ["Citrusy", "Refreshing", "Fruity", "Sweet"]
  },
  {
    name: "Maple Orchid Old Fashioned",
    base: "Rye",
    glass: "Rocks",
    ingredients: [
      "Rye whiskey",
      "Maple syrup",
      "Orange bitters",
      "Orange peel"
    ],
    instructions:
      "Stir rye, maple, and bitters with ice. Strain over a large cube and garnish with orange peel.",
    substitutions:
      "Use bourbon for a sweeter version.",
    tags: ["Rich", "Sweet", "Spirit-forward", "Dry"]
  },
  {
    name: "Blue Ember Margarita",
    base: "Tequila Reposado",
    glass: "Rocks",
    ingredients: [
      "Tequila reposado",
      "Blue curaçao",
      "Lime juice",
      "Agave syrup",
      "Smoked salt rim"
    ],
    instructions:
      "Shake tequila, curaçao, lime, and agave with ice. Strain over fresh ice in a smoked-salt-rimmed glass.",
    substitutions:
      "Use mezcal for a smoky version.",
    tags: ["Citrusy", "Smoky", "Tropical", "Refreshing"]
  },
  {
    name: "Frosted Berry Fizz",
    base: "Vodka",
    glass: "Highball",
    ingredients: [
      "Vodka",
      "Mixed berry syrup",
      "Lemon juice",
      "Club soda"
    ],
    instructions:
      "Shake vodka, syrup, and lemon with ice. Strain into a highball and top with soda.",
    substitutions:
      "Use gin for a more herbal variation.",
    tags: ["Fruity", "Refreshing", "Sweet", "Citrusy"]
  },
  {
    name: "Golden Spice Sour",
    base: "Bourbon",
    glass: "Coupe",
    ingredients: [
      "Bourbon",
      "Turmeric syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use ginger syrup for a sharper spice profile.",
    tags: ["Spicy", "Creamy", "Citrusy", "Rich"]
  },
  {
    name: "Coconut Starlight Cooler",
    base: "Light Rum",
    glass: "Highball",
    ingredients: [
      "Light rum",
      "Coconut water",
      "Pineapple juice",
      "Lime juice"
    ],
    instructions:
      "Build all ingredients in a highball with ice and stir gently.",
    substitutions:
      "Use aged rum for a deeper flavor.",
    tags: ["Tropical", "Refreshing", "Fruity", "Sweet"]
  },
  {
    name: "Lavender Ember Sour",
    base: "Gin",
    glass: "Coupe",
    ingredients: [
      "Gin",
      "Lavender syrup",
      "Lemon juice",
      "Egg white"
    ],
    instructions:
      "Dry shake all ingredients, then shake again with ice. Double strain into a coupe.",
    substitutions:
      "Use vodka for a cleaner profile.",
    tags: ["Floral", "Creamy", "Citrusy", "Refreshing"]
  },
  {
    name: "Crimson Horizon Spritz",
    base: "Other Spirits",
    glass: "Wine glass",
    ingredients: [
      "Aperitivo liqueur",
      "Blood orange juice",
      "Prosecco",
      "Club soda"
    ],
    instructions:
      "Build all ingredients over ice and stir gently.",
    substitutions:
      "Use sparkling rosé for a fruitier version.",
    tags: ["Citrusy", "Refreshing", "Sweet", "Fruity"]
  }
];
// ==============================
// EXPORT
// ==============================

export const recipes = [
  ...classicCocktails,
  ...modernCocktails,
  ...copilotOriginals
];
