// -----------------------------
// LIQUOR BOTTLE ICON
// -----------------------------
function liquorBottleSVG(color) {
  return `
    <svg viewBox="0 0 64 64" stroke="${color}" fill="none">
      <path d="M28 4h8v10l4 6v30l-4 6H28l-4-6V20l4-6V4z"/>
    </svg>
  `;
}

// -----------------------------
// MIXER CAN ICON
// -----------------------------
function mixerCanSVG(color) {
  return `
    <svg viewBox="0 0 64 64" stroke="${color}" fill="none">
      <rect x="20" y="8" width="24" height="48" rx="4"/>
      <line x1="20" y1="16" x2="44" y2="16"/>
    </svg>
  `;
}

// -----------------------------
// SIMPLE LEAF ICON (HEADER)
// -----------------------------
function leafSVG(color) {
  return `
    <svg viewBox="0 0 64 64" stroke="${color}" fill="none">
      <path d="M32 10c-12 9-16 20-16 29 0 11 7 15 16 15s16-4 16-15c0-9-4-20-16-29z"/>
      <line x1="32" y1="10" x2="32" y2="54"/>
    </svg>
  `;
}

// -----------------------------
// PERISHABLE ICONS
// -----------------------------
const perishableIcons = {
  "Lime": {
    color: "#32CD32",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <circle cx="32" cy="32" r="20"/>
        <line x1="32" y1="12" x2="32" y2="52"/>
        <line x1="12" y1="32" x2="52" y2="32"/>
      </svg>
    `
  },

  "Lemon": {
    color: "#FFD700",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <ellipse cx="32" cy="32" rx="22" ry="16"/>
      </svg>
    `
  },

  "Orange": {
    color: "#FFA500",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <circle cx="32" cy="32" r="20"/>
      </svg>
    `
  },

  "Pineapple": {
    color: "#DAA520",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <ellipse cx="32" cy="40" rx="16" ry="20"/>
        <path d="M24 20l8-8 8 8"/>
      </svg>
    `
  },

  "Cream": {
    color: "#FFFFFF",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <rect x="20" y="20" width="24" height="28" rx="6"/>
      </svg>
    `
  },

  "Coconut Milk": {
    color: "#FFFFFF",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <path d="M16 32a16 16 0 1032 0 16 16 0 10-32 0z"/>
        <circle cx="32" cy="32" r="6"/>
      </svg>
    `
  },

  "Cherry Juice": {
    color: "#B22222",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <circle cx="24" cy="40" r="10"/>
        <circle cx="40" cy="40" r="10"/>
        <path d="M24 30c4-10 16-10 16 0"/>
      </svg>
    `
  },

  "Pomegranate Juice": {
    color: "#8B0000",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <circle cx="32" cy="36" r="18"/>
        <path d="M26 16l6-6 6 6"/>
      </svg>
    `
  },

  "Basil": {
    color: "#228B22",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <path d="M32 12c-10 8-14 18-14 26 0 10 6 14 14 14s14-4 14-14c0-8-4-18-14-26z"/>
        <line x1="32" y1="12" x2="32" y2="52"/>
      </svg>
    `
  },

  "Cucumbers": {
    color: "#2E8B57",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <ellipse cx="32" cy="32" rx="20" ry="10"/>
      </svg>
    `
  },

  "Blueberries": {
    color: "#4169E1",
    svg: (c) => `
      <svg viewBox="0 0 64 64" stroke="${c}" fill="none">
        <circle cx="24" cy="32" r="8"/>
        <circle cx="40" cy="32" r="8"/>
        <circle cx="32" cy="24" r="8"/>
      </svg>
    `
  }
};
