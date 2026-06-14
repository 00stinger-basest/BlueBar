/* ============================================================
   BlueBar 3.1 — Premium 64×64 Outline Icon Set
   All icons use:
   - stroke-width: 2.5
   - stroke-linecap: round
   - stroke-linejoin: round
   - no fill
   - centered inside 64×64 viewBox
   ============================================================ */

function createIcon(color, pathData) {
  const svg = `
    <svg viewBox="0 0 64 64" stroke="${color}" fill="none"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      ${pathData}
    </svg>
  `;
  return svg;
}

/* ============================================================
   ICON DEFINITIONS
   ============================================================ */

/* ------------------------------
   LIQUORS — Tall angular bottle
   ------------------------------ */
const ICON_LIQUORS = createIcon(
  "var(--color-liquors)",
  `
    <path d="M28 10 h8 v10 l6 8 v24 h-20 v-24 l6-8 z" />
    <path d="M28 10 v-4 h8 v4" />
  `
);

/* ------------------------------
   LIQUEURS — Fancy bottle w/ ribbon
   ------------------------------ */
const ICON_LIQUEURS = createIcon(
  "var(--color-liqueurs)",
  `
    <path d="M30 8 h4 v10 l6 6 v26 h-16 v-26 l6-6 z" />
    <path d="M22 30 h20" />
  `
);

/* ------------------------------
   FORTIFIED — Wine bottle + shield
   ------------------------------ */
const ICON_FORTIFIED = createIcon(
  "var(--color-fortified)",
  `
    <path d="M30 8 h4 v12 l4 6 v26 h-12 v-26 l4-6 z" />
    <path d="M24 34 h16" />
    <path d="M32 40 l6 4 l-6 4 l-6-4 z" />
  `
);

/* ------------------------------
   AROMATIZED — Bottle + citrus slice
   ------------------------------ */
const ICON_AROMATIZED = createIcon(
  "var(--color-aromatized)",
  `
    <path d="M30 10 h4 v12 l4 6 v22 h-12 v-22 l4-6 z" />
    <circle cx="46" cy="46" r="6" />
    <path d="M46 40 v12" />
    <path d="M40 46 h12" />
  `
);

/* ------------------------------
   SPARKLING — Champagne flute + sparkles
   ------------------------------ */
const ICON_SPARKLING = createIcon(
  "var(--color-sparkling)",
  `
    <path d="M28 8 h8 v20 h-8 z" />
    <path d="M32 28 v20" />
    <path d="M26 48 h12" />
    <path d="M44 10 l3 3" />
    <path d="M47 10 l-3 3" />
    <path d="M42 16 h4" />
  `
);

/* ------------------------------
   BITTERS — Dropper bottle
   ------------------------------ */
const ICON_BITTERS = createIcon(
  "var(--color-bitters)",
  `
    <path d="M28 8 h8 v8 h-8 z" />
    <path d="M26 16 h12 v28 h-12 z" />
    <path d="M32 44 v8" />
  `
);

/* ------------------------------
   MIXERS — Aluminum can
   ------------------------------ */
const ICON_MIXERS = createIcon(
  "var(--color-mixers)",
  `
    <rect x="24" y="10" width="16" height="44" rx="3" />
    <path d="M24 18 h16" />
    <path d="M24 40 h16" />
  `
);

/* ------------------------------
   PERISHABLES — Lime wedge (curved + segmented)
   ------------------------------ */
const ICON_PERISHABLES = createIcon(
  "var(--color-perishables)",
  `
    <!-- Outer curved rind -->
    <path d="M16 48
             A24 24 0 0 1 48 48
             L32 32
             Z" />

    <!-- Segment lines -->
    <path d="M32 32 L16 48" />
    <path d="M32 32 L48 48" />
    <path d="M32 32 L32 48" />
  `
);

/* ============================================================
   ICON INJECTION
   ============================================================ */

function injectIcons() {
  const map = {
    "icon-liquors": ICON_LIQUORS,
    "icon-liqueurs": ICON_LIQUEURS,
    "icon-fortified": ICON_FORTIFIED,
    "icon-aromatized": ICON_AROMATIZED,
    "icon-sparkling": ICON_SPARKLING,
    "icon-bitters": ICON_BITTERS,
    "icon-mixers": ICON_MIXERS,
    "icon-perishables": ICON_PERISHABLES
  };

  Object.entries(map).forEach(([id, svg]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = svg;
  });
}

document.addEventListener("DOMContentLoaded", injectIcons);
