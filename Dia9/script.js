let url = `https://pokeapi.co/api/v2/pokemon/`;

document.getElementById("holder").addEventListener('change',(e)=>{
    var search = document.getElementById("name").value;
    console.log(search);
    
    fetch(url+search)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        var cont = document.getElementById("cont2");

        cont.innerHTML=`
        <img id="gifs" src="${data.sprites.other.showdown.front_default}">
        `        
    });
});