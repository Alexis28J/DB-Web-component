class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = `
      footer {
        background-color: #222;
        color: white;
        padding: 10px 0;
        text-align: center;
      }
      .link {
        color: #ffeb3b;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
    `;
    this.shadow.appendChild(style);

    this.shadow.innerHTML += `
      <footer>
        <p>© 2024 Dragon Ball App - <a href="#" class="link">Privacy Policy</a></p>
      </footer>
    `;
  }
}

customElements.define("super-footer", FooterComponent);
