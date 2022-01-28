class MobileBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log('este es el constructor')
  }

  static get observedAttributes() {
    return ["bannerImage", "shadow"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "bannerImage") {
      this.bannerImage = newVal;
    }
  }

  static get styles() {
    return /* css */ `
     :host{

    }
    div.img-container {
        width: 200px;
        height: 423px;
        background: url(${this.bannerImage});
        border-radius: 0 0 100px 100px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${MobileBanner.styles}</style>
    <div class="img-container"></div>`;
  }
}

customElements.define("mobile-banner", MobileBanner);
