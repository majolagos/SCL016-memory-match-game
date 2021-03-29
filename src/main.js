// import cardApp from './components/App.js';
import App from './components/App.js';

let level = 6; //cambiar después
let card = App(level);
let mistyButton = document.getElementById("btn1");
let ashButton = document.getElementById("btn2");
let lobby = document.querySelector(".lobby");
let instructions = document.querySelector(".instructions");


ashButton.addEventListener("click", () => {
  let user = "Hola " + document.getElementById("userName").value;


  if (user == null || user == "Hola ") {
    console.log("no ingresaste un usuario");
  } else {

    document.querySelector("#user").textContent = user;

    instructions.classList.add('show');
    instructions.classList.remove('hidden'); //menu y juego

    lobby.classList.remove('show'); //bienvenida
    lobby.classList.add('hidden');
    document.querySelector('.body').setAttribute("style", "background-image: url('img/fondo.png')");
    document.querySelector('.trainer').setAttribute("style", "content: url('img/ash-trainer.png')");
  }


});
mistyButton.addEventListener("click", () => {
   
    //imagen misty en el juego
  let user = "Hola " + document.getElementById("userName").value;

  if (user == null || user == "Hola ") {
  console.log("no ingresaste un usuario");

  } else {
  
    document.querySelector("#user").textContent = user;
    instructions.classList.add('show');
    instructions.classList.remove('hidden'); //menu y juego

    lobby.classList.remove('show'); //bienvenida
    lobby.classList.add('hidden');
    document.querySelector('.body').setAttribute("style", "background-image: url('img/fondo.png')");
    document.querySelector('.trainer').setAttribute("style", "content: url('img/misty-trainer.png')");

  }
});

for (let i = 0; i < card.length; i++) {


  document.getElementById('memory').appendChild(card[i]);


}
