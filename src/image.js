import pokedexApp from './components/pokedexApp.js';

let card = pokedexApp(); 
for(let i = 0; i < card.length; i++){


    document.getElementById('pokemon').appendChild(card[i]);

   
}