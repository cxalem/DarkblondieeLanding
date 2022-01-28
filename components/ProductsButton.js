class ProductsButton extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["products"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "products") {
      this.products = newVal;
    }
  }

 static get styles() {
   return /* css */ `
     :host{
         --products-btn-bg: #D9B88F;
    }
    button.products-button {
        font-family: 'Abhaya Libre', serif;
        background: var(--products-btn-bg);
        border-width: 0px;
        font-size: 1.8rem;
        padding: 12px 33px;
        color: white;
        border-radius: 0px 50px 50px 0px;
        margin: 0;
    }
    button.products-button:hover {
        background:#8a6e4a;
    }
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${ProductsButton.styles}</style>
    <button type="button" class="products-button">${this.products}</button>
    `;
 }
}

customElements.define("products-button", ProductsButton);