class MobileBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["img"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "img") {
      this.img = newVal;
    }
  }

  static get styles() {
    return /* css */ `
     :host{
       --img-container-width: 200px;
       --img-container-heigth: 423px;
    }
    
    div.img-container {
        width: var(--img-container-width);
        height: var(--img-container-heigth);
        border-radius: 0 0 100px 100px;
    }
  `;
  }

  connectedCallback() {
    this.render();
  }


  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${MobileBanner.styles}
      div.img-container {
        background: url(${this.img});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
      } 
    </style>
    <div class="img-container"></div>`;
  }

}

customElements.define("mobile-banner", MobileBanner);
