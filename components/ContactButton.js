class ContactButton extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["contact"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "contact") {
      this.contact = newVal;
    }
  }

 static get styles() {
   return /* css */ `
     :host{
        --button-background: #55412B;
    }

    button.contact-button {
        font-family: 'Abhaya Libre', serif;
        background: var(--button-background);
        border-width: 0px;
        font-size: 1.8rem;
        padding: 12px 33px;
        color: white;
        border-radius: 50px 0 0 50px;
        margin: 0;
    }
    button.contact-button:hover {
        background:#9a7d5d;
    }
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${ContactButton.styles}</style>
    <button type="button" class="contact-button">${this.contact}</button>
    `;
 }
}

customElements.define("contact-button", ContactButton);