function createIcon(svg, colorVar) {
  const span = document.createElement("span");
  span.innerHTML = svg;
  const svgEl = span.querySelector("svg");
  svgEl.style.width = "22px";
  svgEl.style.height = "22px";
  svgEl.style.stroke = `var(${colorVar})`;
  svgEl.style.fill = "none";
  return span.firstChild;
}

function initIcons() {
  const icons = {
    "icon-liquors": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M9 3h6v3l-1 2v11H10V8L9 6V3z" />
      </svg>`,
      "--color-liquors"
    ),
    "icon-liqueurs": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M9 4h6l1 3-2 9H10L8 7l1-3z" />
        <path d="M9 10h6" />
      </svg>`,
      "--color-liqueurs"
    ),
    "icon-fortified": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M10 3h4l1 4v11h-6V7l1-4z" />
        <path d="M12 9l2 2-2 2-2-2 2-2z" />
      </svg>`,
      "--color-fortified"
    ),
    "icon-aromatized": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M10 4h4l1 3v10h-6V7l1-3z" />
        <circle cx="6" cy="17" r="3" />
        <path d="M4.5 15.5 7.5 18.5" />
      </svg>`,
      "--color-aromatized"
    ),
    "icon-sparkling": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M10 4h4l-1 8v6h-2v-6l-1-8z" />
        <path d="M16 5l1-1 1 1-1 1-1-1zM17 9l1-1 1 1-1 1-1-1z" />
      </svg>`,
      "--color-sparkling"
    ),
    "icon-bitters": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M10 5h4l1 3v9h-6V8l1-3z" />
        <path d="M12 3v2" />
        <path d="M12 15v3" />
      </svg>`,
      "--color-bitters"
    ),
    "icon-mixers": createIcon(
      `<svg viewBox="0 0 24 24">
        <path d="M9 4h6l-1 14H10L9 4z" />
        <path d="M10 7h4" />
      </svg>`,
      "--color-mixers"
    ),
    "icon-perishables": createIcon(
      `<svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
      </svg>`,
      "--color-liquors"
    )
  };

  Object.entries(icons).forEach(([id, svg]) => {
    const el = document.getElementById(id);
    if (el) el.appendChild(svg);
  });
}

document.addEventListener("DOMContentLoaded", initIcons);
