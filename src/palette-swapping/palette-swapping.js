import { $ } from "/index.js";

const html = String.raw;

let siteExampleStyleID = 0;

class HTMLSiteExampleCssElement extends HTMLElement {
  connectedCallback() {
    const style = document.createElement("style");
    style.id = "site-example-css-" + siteExampleStyleID++;
    style.textContent = $("pre", this)?.textContent ?? "";
    document.head.append(style);
  }
}

customElements.define("site-example-css", HTMLSiteExampleCssElement);

class HTMLPaletteExampleElement extends HTMLElement {
  connectedCallback() {
    this.style.setProperty("--color1", this.dataset.color1);
    this.style.setProperty("--color2", this.dataset.color2);
    this.innerHTML = html`
      <svg viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="var(--color1)" />
        <circle cx="50" cy="50" r="37" fill="var(--color2)" />
        <circle cx="40" cy="40" r="3" fill="var(--color1)" />
        <circle cx="60" cy="40" r="3" fill="var(--color1)" />
        <path
          d="M30,55 A10,7,0,0,0,70,55"
          fill="none"
          stroke="var(--color1)"
          stroke-width="3"
          stroke="black"
        />
      </svg>
    `;
  }
}

customElements.define("site-palette-example", HTMLPaletteExampleElement);
