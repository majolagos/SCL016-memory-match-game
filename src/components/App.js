
// import FlipCard from './components/FlipCard.js';
import Data from './Data.js';

  const card = []; //array a mostrar en pantalla
  const quantityCard = []; //array con cantidad de cartas segun nivel para luego mezclar
  let data = Data(); //traido la data del componente Data
  let cardsChosen = []; //carta elegida
  let cardsChosenId = []; //id carta elegida
  let score = 0;
  
  document.getElementById('score').textContent = score;
  const cardApp = (levelSelect) => { //funcion del juego
  let level = levelSelect;

    quantityCard.push(...data.slice(0,level),...data.slice(0,level)); //data duplicada segun nivel elegido por el usuario
    CreateCard();
    return card; //retorno el nuevo array con la data
}

const CreateCard  = () =>{ //se crean las tarjetas

    for (let i = 0; i < quantityCard.length; i++){ //recorro la data
          
    const img = document.createElement('img'); //creo div de la carta
    img.setAttribute("src", "../img/carta2.png"); //back
    img.setAttribute("id", i);
    img.setAttribute("class", "card");   
    img.addEventListener("click", ()=> FlipCard(img.id));
    card.push(img); //lleno el array a mostrar

  

    } 
  card.sort(()=>0.5-Math.random()); //mezclo las cartas}
}

const FlipCard = (idCard) =>{ // voltear las tarjetas

  let img = document.getElementById(idCard);
  console.log("recibo imagen en flipcard");
  console.log(img);

  cardsChosen.push(quantityCard[idCard].id); //se agrega la carta al array (nombre del pokemon)
  cardsChosenId.push(idCard); //se agrega el id de la carta al array
  img.setAttribute("src", quantityCard[idCard].image); //imagen front
  
  if(cardsChosen.length === 2){ //si hay dos cartas... //aqui validar si es la misma carta
    let img1 = document.getElementById(cardsChosenId[0]);
    let img2 = document.getElementById(cardsChosenId[1]);
    
    MatchCard(img1, img2);

    document.getElementById('score').textContent = score;
    if(score === quantityCard.length){
           
      document.querySelector(".win").classList.add('show');
      document.querySelector(".win").classList.remove('hidden'); 
      document.querySelector(".trainer").classList.add('hidden');
      document.querySelector(".trainer").classList.remove('show'); 
      
    }
   
  }

}   

const MatchCard = (img1,img2) => {

  if(cardsChosenId[0] === cardsChosenId[1]){
    console.log("es la misma carta!, mejorar esto luego");
    cardsChosen.pop();
    cardsChosenId.pop();
  }else if(cardsChosen[0] === cardsChosen[1]){
    console.log("Son iguales!");
    img1.setAttribute('src',  quantityCard[cardsChosenId[0]].image);
    img2.setAttribute('src',  quantityCard[cardsChosenId[1]].image);
    cardsChosen = [];
    cardsChosenId = [];
    score = score + 2;
  }else{
   
    console.log("No son iguales!");
    cardsChosen = [];
    cardsChosenId = [];
    setTimeout(() => {
      img1.setAttribute("src", "../img/carta2.png");
      img2.setAttribute("src", "../img/carta2.png");
    }, 1000);
   
  }
}

export default cardApp;

