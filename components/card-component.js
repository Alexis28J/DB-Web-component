class CardComponent extends HTMLElement {
  static observedAttributes = ["card-name", "card-image", "card-description", "card-race"];

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback() {
    this.shadow.innerHTML = "";

    const style = document.createElement("style");
    style.textContent = `
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 260px; /* larghezza fissa */
    font-family: Arial, sans-serif;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card img {
    width: 100%;
    height: 300px; /* altezza fissa */
    object-fit: cover; /* ritaglia senza deformare */
    object-position: top; /* MOSTRA LA PARTE SUPERIORE */
    border-radius: 4px;
}

  .card h2 {
    margin: 12px 0 8px 0;
    font-size: 1.4em;
    text-align: center;
  }

  .card p {
    color: #555;
    text-align: center;
  }

  .race {
    font-size: 0.9em;
    color: #888;
    text-align: center;
  }
`;

    this.shadow.appendChild(style);

    this.shadow.innerHTML += `
      <div class="card">
        <img src="${this.getAttribute("card-image")}" alt="${this.getAttribute("card-name")}">
        <h2>${this.getAttribute("card-name")}</h2>
        <p class="race">${this.getAttribute("card-race")}</p>
        <p>${this.getAttribute("card-description")}</p>
      </div>
    `;
  }
}

customElements.define("super-card", CardComponent);
