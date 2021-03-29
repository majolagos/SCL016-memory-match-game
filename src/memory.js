// import cardApp from './components/App.js';
import App from './components/App.js';


//recorro el objeto y muestro con un for
let level = 6; //cambiar después

let card = App(level);
for(let i = 0; i < card.length; i++){


    document.getElementById('memory').appendChild(card[i]);

   
}

// document.getElementById('root').appendChild(App());
