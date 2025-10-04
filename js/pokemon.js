class Pokemon {

    // (1)
    // (2)

    constructor(name, sprite) {
        this.name = name;
        this.sprite = sprite;
        this.element = this.createElement();
        this.addEventListeners();
    }
    
    createElement() {
      // (3) 
    }
    
    addEventListeners() {   
     	// (4)
    }
    
    move(step) { 
    	// (5)
    }
} // end of Pokemon class


document.addEventListener('keydown', function (event) {
  
   // (6)

});

document.addEventListener('keyup', function (event) {
   
  // (7)

});

function moveActivePokemon() {
   
  // (8) 

}

setInterval(moveActivePokemon, 10);

// Instantiate Pokémon
const pokemonNames = ['pikachu', 'bulbasaur', 'charmander', 'squirtle', 'jigglypuff'];

function cargarJuego () {

  // llamar a loadImage

  pokemonNames.forEach(name => {
      //Solicita al servidor externo la imagen del pokemon correspondiente y genera el pokemon
  });



}

function loadImage (url) {
 /// desarrolla la promesa
}
