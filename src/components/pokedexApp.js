//Documento que muestra la imágen del pokémon en la pestaña del menú pokédex

const pokemonCard = []; //array a mostrar en pantalla --> los pokémon que se mostrarán
const cardArrayF = []; //array que contiene y guarda la información del Data pokemon.json

const cardApp = () => { //funcion que crea la imagen 
  
let data = JSON.parse(localStorage.getItem('data')); //se guarda la información del data
let level = 9; // pokémon que se mostrarán siempre en la pokédex

for(let i = 0; i<level; i++){ //recorre la data y muestra todos los pokémon
  cardArrayF.push({id: data[i].id, image: data[i].image, bgColor: data[i].bgColor});
}

for (let i = 0; i < cardArrayF.length; i++){ //recorro la data
  
  console.log("1 "+cardArrayF[i].id)

  const div = document.createElement('div'); //creo div de la "carta" para mostrar en el navegador

  div.className = 'card'; //agrego clase
  div.id = cardArrayF[i].id; //asigno id
  div.innerHTML= /* html */
  `
  <div class="card-content">
  <button class = "pokemon-btn">
  <img src="${cardArrayF[i].image}">
  </button>
  </div>
  
  `

  pokemonCard.push(div); //se completa el array
 }

return pokemonCard; // finalmente, retorna el nuevo array con la data a mostrar

 }

export default cardApp;