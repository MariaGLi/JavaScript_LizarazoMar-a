let url = `https://pokeapi.co/api/v2/pokemon/`;


document.getElementById("holder").addEventListener('input',(e)=>{
    var search = document.getElementById("name").value;
    fetch(url + search)
    .then(res => res.json())
    .then(data =>{
        var cont = document.getElementById("cont2");
        
        cont.innerHTML=`
        <p id="idecito">${data.id}</p>
        <p id="nombre">${data.name}</p>
        <img id="gifs" src="${data.sprites.other.showdown.front_default}">
        `
    });
});

