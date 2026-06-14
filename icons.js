// ==============================
// ICONS.JS — BlueBar Icon Library
// ==============================
//
// All icons are clean, consistent SVGs designed for 64×64 containers.
// Each icon uses currentColor so it inherits CSS color automatically.
// ==============================

export const icons = {

  // ------------------------------
  // Cocktail Shaker
  // ------------------------------
  shaker: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 2h6l1 4H8l1-4z" fill="currentColor"/>
      <path d="M8 6h8l-1 14H9L8 6z" fill="currentColor"/>
    </svg>
  `,

  // ------------------------------
  // Coupe Glass
  // ------------------------------
  coupeGlass: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16c0 4-3.5 7-8 7S4 9 4 5z" fill="currentColor"/>
      <path d="M11 12h2v4h-2z" fill="currentColor"/>
      <path d="M9 20h6v1H9z" fill="currentColor"/>
    </svg>
  `,

  // ------------------------------
  // Lime Wedge (NEW — literal citrus slice)
  // ------------------------------
  limeWedge: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <!-- Outer rind -->
      <path
        d="M4 18a8 8 0 0 1 16 0"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
      <!-- Inner pulp arc -->
      <path
        d="M6 18a6 6 0 0 1 12 0"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <!-- Radial segments -->
      <line x1="12" y1="12" x2="12" y2="18"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="9" y1="13" x2="12" y2="18"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="15" y1="13" x2="12" y2="18"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,

  // ------------------------------
  // Heart (Favorite — filled)
  // ------------------------------
  heart: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-5.5-3.3-8.2-6C2 13.2 2 10.5 3.8 8.7 5.6 6.9 8.3 7 10 8.7L12 10.7l2-2c1.7-1.7 4.4-1.8 6.2 0 1.8 1.8 1.8 4.5 0 6.3C17.5 17.7 12 21 12 21z"
        fill="currentColor"
      />
    </svg>
  `,

  // ------------------------------
  // Heart Outline (Favorite — off)
  // ------------------------------
  heartOutline: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-5.5-3.3-8.2-6C2 13.2 2 10.5 3.8 8.7 5.6 6.9 8.3 7 10 8.7L12 10.7l2-2c1.7-1.7 4.4-1.8 6.2 0 1.8 1.8 1.8 4.5 0 6.3C17.5 17.7 12 21 12 21z"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  `
};
