export class DragonballService {
  constructor() {
    this.apiUrl = "https://dragonball-api.com/api/characters?limit=100";
  }

  fetchCharacters() {
    return fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => data.items); // <-- QUI!
  }
}


//L’API Dragon Ball non restituisce un array, ma un oggetto che contiene l’array dentro una proprietà.

//“Le descrizioni sono in spagnolo perché l’API originale fornisce i dati in quella lingua.”