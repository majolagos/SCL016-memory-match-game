
// import FlipCard from './components/FlipCard.js';
import Data from './Data.js';

  const card = []; //array a mostrar en pantalla
  const quantityCard = []; //array con cantidad de cartas segun nivel para luego mezclar
  let contador = 0

  const cardApp = (levelSelect) => { //funcion del juego
    let data = Data(); //traido la data del componente Data
    let level = levelSelect;

    for(let i = 0; i<level; i++){ //obtengo la cantidad de cartas
      quantityCard.push({id: data[i].id, image: data[i].image, bgColor: data[i].bgColor});
    }
    CreateCard(quantityCard, level);
    CreateCard(quantityCard, level);
  

    return card; //retorno el nuevo array con la data

}

const CreateCard  = (quantityCard, level) =>{

  quantityCard.sort(()=>0.5-Math.random()); //mezclo 

  for (let i = 0; i < quantityCard.length; i++){ //recorro la data

    if(contador >= level){

      quantityCard[i].id =  quantityCard[i].id + "2";
      
    }

    const img = document.createElement('img'); //creo div de la carta
    img.setAttribute("src", "../img/carta2.png"); //back
    img.setAttribute("id", quantityCard[i].id);
    img.setAttribute("class", "card");   
    img.addEventListener("click", ()=> FlipCard(quantityCard, img));
    card.push(img); //lleno el array a mostrar
   
    contador= contador+1;
  } 
}

const FlipCard = (quantityCard, img) =>{

  let cardImg =  img.id
 
  for (let i = 0; i < quantityCard.length; i++){ 
        

        if(cardImg === quantityCard[i].id){
  
          img.setAttribute("src", quantityCard[i].image); //front
          
        }else if(cardImg === quantityCard[i].id+"2"){

          img.setAttribute("src", quantityCard[i].image); //front

        }else{
          // "selecciona una carta"
        }
      }
   
}




export default cardApp;
