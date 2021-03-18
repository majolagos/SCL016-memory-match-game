
// import FlipCard from './components/FlipCard.js';
import Data from './Data.js';

  const card = []; //array a mostrar en pantalla
  const quantityCard = []; //array con cantidad de cartas segun nivel para luego mezclar
  let data = Data(); //traido la data del componente Data
  const cardsChosen = []; //carta elegida
  const cardsChosenId = []; //id carta elegida

  const cardApp = (levelSelect) => { //funcion del juego
  let level = levelSelect;

    quantityCard.push(...data.slice(0,level),...data.slice(0,level));
    
    // for(let i = 0; i<level; i++){ //obtengo la cantidad de cartas
    //   quantityCard.push({id: data[i].id, image: data[i].image, bgColor: data[i].bgColor},{id: data[i].id, image: data[i].image, bgColor: data[i].bgColor});
    // }
    CreateCard(quantityCard);

    return card; //retorno el nuevo array con la data

}

const CreateCard  = (quantityCard) =>{

    for (let i = 0; i < quantityCard.length; i++){ //recorro la data
          
    const img = document.createElement('img'); //creo div de la carta
    img.setAttribute("src", "../img/carta2.png"); //back
    img.setAttribute("id", i);
    img.setAttribute("name", quantityCard[i].id);
    img.setAttribute("class", "card");   
    img.addEventListener("click", ()=> FlipCard(quantityCard, img));
    card.push(img); //lleno el array a mostrar
   
  } 
  card.sort(()=>0.5-Math.random()); //mezclo las cartas}
}

const FlipCard = (quantityCard, img) =>{


  let cardId = img.id; //id de la carta
  cardsChosen.push(quantityCard[cardId].id); //se agrega la carta al array
  img.setAttribute("src", quantityCard[cardId].image); //front
  
  console.log(cardsChosen);
    
  if(cardsChosen.length === 2){ //si hay dos cartas...

    let result = MatchCard(cardsChosen); //compara las cartas


    if(result){ //si son iguales
          img.setAttribute("src", quantityCard[cardId].image); //mantiene imagen front          
      }else{ // muestra imagen back
          img.setAttribute("src", "../img/carta2.png"); //falta dar vuelta las dos cartas
      }
    }else{// muestra imagen back
      img.setAttribute("src", "../img/carta2.png");
    }

}   

const MatchCard = (cardsChosen) => cardsChosen[0] === cardsChosen[1] ? true : false;



export default cardApp;
