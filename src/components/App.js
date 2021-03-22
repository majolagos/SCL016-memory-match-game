
// import FlipCard from './components/FlipCard.js';
import Data from './Data.js';

  const card = []; //array a mostrar en pantalla
  const quantityCard = []; //array con cantidad de cartas segun nivel para luego mezclar
  let data = Data(); //traido la data del componente Data
  let cardsChosen = []; //carta elegida
  let cardsChosenId = []; //id carta elegida

  const cardApp = (levelSelect) => { //funcion del juego
  let level = levelSelect;

    quantityCard.push(...data.slice(0,level),...data.slice(0,level)); //data duplicada segun nivel elegido por el usuario
  
    CreateCard(quantityCard);

    return card; //retorno el nuevo array con la data

}

const CreateCard  = (quantityCard) =>{

    for (let i = 0; i < quantityCard.length; i++){ //recorro la data
          
    const img = document.createElement('img'); //creo div de la carta
    img.setAttribute("src", "../img/carta2.png"); //back
    img.setAttribute("id", i);
    img.setAttribute("class", "card");   
    img.addEventListener("click", ()=> FlipCard(quantityCard, img));
    card.push(img); //lleno el array a mostrar
   
  } 
  card.sort(()=>0.5-Math.random()); //mezclo las cartas}
}

const FlipCard = (quantityCard, img) =>{

  let cardId = img.id; //id de la carta
  cardsChosen.push(quantityCard[cardId].id); //se agrega la carta al array (nombre del pokemon)
  cardsChosenId.push(img.id); //se agrega el id de la carta al array

  console.log(img.id);
  img.setAttribute("src", quantityCard[cardId].image); //imagen front
  
  console.log(cardsChosen);
  console.log(cardsChosenId);

  if(cardsChosen.length === 2){ //si hay dos cartas...
    let result = MatchCard(cardsChosen); //compara las cartas

     localStorage.setItem('array',JSON.stringify(cardsChosenId)); //guardo la data en localstorage
    if(!result){ //si no son iguales
      
     setTimeout( ()=>{    

     let cardsChosenId = JSON.parse(localStorage.getItem('array')); //recupero la data del localstorage

        for(let i = 0; i < cardsChosenId.length; i++){ //recorro array con cartas dadas vuelta
          let card = document.getElementById(cardsChosenId[i]);
          card.setAttribute("src", "../img/carta2.png"); //back     
        }
        
   
  }, 1000 );
}

  cardsChosen = [];
  cardsChosenId = [];
}

 
}   

const MatchCard = (cardsChosen) => cardsChosen[0] === cardsChosen[1] ? true : false;
//no hacer clic en la misma carta

export default cardApp;
