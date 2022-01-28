class MobileMainContent extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["titled", "parrafo"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "titled") {
        this.titled = newVal;
      }
    if (name === "parrafo") {
        this.parrafo = newVal;
      }
  }

 static get styles() {
   return /* css */ `
     :host{
        --span-color: #707070;
        font-family: 'Abhaya Libre', serif;
    }
    div {
        display: flex;
        flex-direction: column;
        padding: 35px 30px;
    }
    h1 {
        font-size: 5rem;
        letter-spacing: -0.045em;
        font-weight: 800;
        text-align: center;
        margin: 0;
    }
    p {
        font-size: 1.8rem;
        color: var(--span-color);
        text-align: center;
        margin: 0;
    }
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${MobileMainContent.styles}</style>
    <div>
        <h1>${this.titled}</h1>
        <p>${this.parrafo}</p>
    </div>`;
 }
}

customElements.define("mobile-main-content", MobileMainContent);