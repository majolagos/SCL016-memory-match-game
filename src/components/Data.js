const data = () =>{

    fetch('./data/pokemon/pokemon.json')
    .then(resp => resp.json()).then(data => {
    
      localStorage.setItem('data',JSON.stringify(data.items)); //guardo la data en localstorage
    
    }).catch(error => console.log(error));


    let data = JSON.parse(localStorage.getItem('data')); //recupero la data del localstorage

return data;
}



export default data;