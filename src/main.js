// import cardApp from './components/App.js';
import App from './components/App.js';


//recorro el objeto y muestro con un for
let level = 8; //cambiar después

let mistyButton = document.getElementById("btn1");
let ashButton = document.getElementById("btn2");
let lobby = document.querySelector(".lobby");
let instructions = document.querySelector(".instructions");

ashButton.addEventListener("click", () =>{ 
    // document.getElementById("lobby").style.display = "none";
    // document.querySelector("instructions").style.display = "inline";

    instructions.classList.add('show');
    instructions.classList.remove('hidden');//menu y juego
    
    lobby.classList.remove('show'); //bienvenida
    lobby.classList.add('hidden');
    document.querySelector('.body').setAttribute("style", "background-image: url('img/fondo.png')");

});
mistyButton.addEventListener("click", () =>{ 
    // document.getElementById("lobby").style.display = "none";
    // document.querySelector("instructions").style.display = "inline";

    instructions.classList.add('show');
    instructions.classList.remove('hidden');//menu y juego
    
    lobby.classList.remove('show'); //bienvenida
    lobby.classList.add('hidden');
    document.querySelector('.body').setAttribute("style", "background-image: url('img/fondo.png')");

});


let card = App(level);
for(let i = 0; i < card.length; i++){


    document.getElementById('memory').appendChild(card[i]);

   
}

// document.getElementById('root').appendChild(App());





  

