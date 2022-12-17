const defaultTheme = {
  bitColorBg: "hsl(22 100% 95%)",
  bitColorFg: "hsl(22 100% 30%)",
  bitColorShadow: "hsl(22 80% 80%)",
  bitColorAccent: "hsl(202 100% 30%)",
};

class ThemeSwitchersElement extends HTMLElement {
  connectedCallback() {
    this.classList.add("site-theme-grid");
    for (const element of this.querySelectorAll("[data-theme-switcher]")) {
      const root = document.createElement("div");
      root.className = "bit-root site-theme-container";
      root.style.padding = "1rem";
      const paletteOrb = document.createElement("div");
      paletteOrb.className = "site-palette-orb";
      element.classList.add("site-theme-button");
      element.insertAdjacentElement("afterbegin", paletteOrb);
      const newTheme = { ...defaultTheme, ...element.dataset };
      root.style.setProperty("--bit-color-bg", newTheme.bitColorBg);
      root.style.setProperty("--bit-color-fg", newTheme.bitColorFg);
      root.style.setProperty("--bit-color-shadow", newTheme.bitColorShadow);
      root.style.setProperty("--bit-color-accent", newTheme.bitColorAccent);
      element.addEventListener(
        "click",
        () => {
          setThemeColors(newTheme);
          updateThemeExample(newTheme);
        },
        false
      );
      element.insertAdjacentElement("beforebegin", root);
      root.appendChild(element);
    }
  }
}

customElements.define("theme-switchers", ThemeSwitchersElement);

function updateThemeExample({
  bitColorBg,
  bitColorFg,
  bitColorShadow,
  bitColorAccent,
}) {
  const example = document.querySelector("#theme-example");
  if (!example) {
    return;
  }
  example.textContent = `\
.bit-root,
.bit-auto {
  --bit-color-bg: ${bitColorBg};
  --bit-color-fg: ${bitColorFg};
  --bit-color-shadow: ${bitColorShadow};
  --bit-color-accent: ${bitColorAccent};
}`;
}

function getTheme() {
  const userTheme = jsonStorageGet("user-theme", {});
  return { ...defaultTheme, ...userTheme };
}

function restoreUserTheme() {
  const theme = getTheme();
  setThemeColors(theme);
  updateThemeExample(theme);
}

function setThemeColors({
  bitColorBg,
  bitColorFg,
  bitColorShadow,
  bitColorAccent,
}) {
  const root = document.documentElement;
  root.style.setProperty("--bit-color-bg", bitColorBg);
  root.style.setProperty("--bit-color-fg", bitColorFg);
  root.style.setProperty("--bit-color-shadow", bitColorShadow);
  root.style.setProperty("--bit-color-accent", bitColorAccent);
  jsonStorageSet("user-theme", {
    bitColorBg,
    bitColorFg,
    bitColorShadow,
    bitColorAccent,
  });
}

function jsonStorageGet(key, fallback) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return fallback;
  }
  return JSON.parse(json);
}

function jsonStorageSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

restoreUserTheme();
