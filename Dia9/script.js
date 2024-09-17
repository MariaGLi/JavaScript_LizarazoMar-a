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

/*class Caja extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="caja">
            <h2>Live User Filter</h2>
            <p>Search by name and/or location</p>
            <input id="search" type="text" placeholder="Search">
        </div>
        <div id="caja2">
        </div>
        `
    }
}
customElements.define('boton-shadow', Caja)*/