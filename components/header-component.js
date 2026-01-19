class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = `
      header {
        background-color: #ff9800;
        color: white;
        padding: 10px 0;
        text-align: center;
      }
      .link {
        color: white;
        margin: 0 15px;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
    `;
    this.shadow.appendChild(style);

    this.shadow.innerHTML += `
      <header>
        <h1>Dragon Ball Characters</h1>
        <nav>
          <a href="./#home" class="link">Home</a>
          <a href="./#home2" class="link">Slider</a>
          <a href="./#about" class="link">About</a>
          <a href="./#contact" class="link">Contact</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("super-header", HeaderComponent);
