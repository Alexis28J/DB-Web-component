import { DragonballService } from "../services/dragonball-service.js";

class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = `
      .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        padding: 16px;
        max-width: 100vw;
        box-sizing: border-box;
      }
    `;
    this.shadow.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("card-container");

    const service = new DragonballService();
    service.fetchCharacters().then(chars => {
      // puoi limitare il numero se sono troppi
      const limited = chars.slice(0, 60);
      for (const char of limited) {
        const name = char.name || "Unknown";
        const description = char.description || "No description available.";
        const image = char.image || "";
        const race = char.race || "Unknown";

        container.innerHTML += `
          <super-card 
            card-name="${name.replaceAll('"', "")}"
            card-description="${description.replaceAll('"', "")}"
            card-image="${image}"
            card-race="${race.replaceAll('"', "")}">
          </super-card>
        `;
      }
    });

    this.shadow.appendChild(container);
  }
}

customElements.define("super-home", HomeComponent);
