import { $ } from "/index.js";

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
