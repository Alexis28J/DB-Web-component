import { DragonballService } from "../services/dragonball-service.js";

class Home2Component extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const style = document.createElement("style");
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px;
                font-family: Arial, sans-serif;
            }

            .buttons {
                display: flex;
                gap: 20px;
            }

            button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                border: none;
                border-radius: 6px;
                background-color: #ff9800;
                color: white;
                transition: 0.2s;
            }

            button:hover {
                background-color: #e68900;
            }
        `;
        this.shadow.appendChild(style);

        const service = new DragonballService();
        service.fetchCharacters().then(chars => this.displaySlider(chars));
    }

    displaySlider(chars) {
        const container = document.createElement("div");
        container.classList.add("container");

        let index = 0;

        // Creazione card
        const superCard = document.createElement("super-card");
        this.updateCard(superCard, chars[index]);

        // Pulsanti
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("buttons");

        const backBtn = document.createElement("button");
        backBtn.textContent = "← Indietro";

        const forwardBtn = document.createElement("button");
        forwardBtn.textContent = "Avanti →";

        // Logica pulsante indietro
        backBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                this.updateCard(superCard, chars[index]);
            }
        });

        // Logica pulsante avanti
        forwardBtn.addEventListener("click", () => {
            if (index < chars.length - 1) {
                index++;
                this.updateCard(superCard, chars[index]);
            }
        });

        btnContainer.appendChild(backBtn);
        btnContainer.appendChild(forwardBtn);

        container.appendChild(superCard);
        container.appendChild(btnContainer);

        this.shadow.appendChild(container);
    }

    updateCard(superCard, character) {
        const name = character.name || "Unknown";
        const description = character.description || "No description available.";
        const image = character.image || "";
        const race = character.race || "Unknown";

        superCard.setAttribute("card-name", name.replaceAll('"', ""));
        superCard.setAttribute("card-description", description.replaceAll('"', ""));
        superCard.setAttribute("card-image", image);
        superCard.setAttribute("card-race", race.replaceAll('"', ""));
    }
}

customElements.define("super-home-2", Home2Component);
