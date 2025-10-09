class Pokemon {

  static activePokemon = null;
  static keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  };


  constructor(name, sprite) {
    this.name = name;
    this.sprite = sprite;
    this.element = this.createElement();
    this.addEventListeners();
  }

  createElement() {
    const img = document.createElement('img');
    img.src = this.sprite;
    img.style.position = 'absolute';
    img.style.top = Math.ceil(Math.random() * 100) + 'px';
    img.style.left = Math.ceil(Math.random() * 100) + 'px';
    document.body.appendChild(img);
    return img;

  }

  addEventListeners() {
    this.element.addEventListener('click', () => {
      Pokemon.activePokemon = this;
    });

  }

  move(step) {
    let top = parseInt(this.element.style.top);
    let left = parseInt(this.element.style.left);
    if (Pokemon.keys.ArrowUp)
      this.element.style.top = (top - step) + 'px';
    if (Pokemon.keys.ArrowDown)
      this.element.style.top = (top + step) + 'px';
    if (Pokemon.keys.ArrowLeft)
      this.element.style.left = (left - step) + 'px';
    if (Pokemon.keys.ArrowRight)
      this.element.style.left = (left + step) + 'px';
  }
} // end of Pokemon class
window.onload = sortuEtaHasi;
function sortuEtaHasi() {
  let botoia = document.getElementById("buscarPokemon");
  botoia.onclick = cargarJuego;
}




document.addEventListener('keydown', function (event) {

  Pokemon.keys[event.key] = true;

});

document.addEventListener('keyup', function (event) {

  Pokemon.keys[event.key] = false;

});

function moveActivePokemon() {
  const step = 5;
  if (Pokemon.activePokemon) {
    Pokemon.activePokemon.move(step);
  }

}

setInterval(moveActivePokemon, 10);

// Instantiate Pokémon
const pokemonNames = ['pikachu', 'bulbasaur', 'charmander', 'squirtle', 'jigglypuff'];

function cargarJuego() {
  let checkbox = document.getElementById("shiny");
  // llamar a loadImage
  loadImage("https://preview.redd.it/dnlz6c3xni951.jpg?width=1080&crop=smart&auto=webp&s=84af1d3e4e27eddc5c612a7b75244a9886389f77").then(img => document.body.appendChild(img)).catch(err => console.log("No va"+err));
  pokemonNames.forEach(name => {
    //Solicita al servidor externo la imagen del pokemon correspondiente y genera el pokemon
    fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(response => response.json()).then(data => {
      if (!checkbox.checked) {
        new Pokemon(name, data.sprites.front_default);
      } else {
        new Pokemon(name, data.sprites.front_shiny);
      }
    }).catch(err => console.error(err));

  });

}

function loadImage(url) {
  /// desarrolla la promesa
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => { resolve(image) });
    image.addEventListener('error', () => reject(console.log("Error al cargar la imagen")));
    image.src = url;
  });
  ;
}
