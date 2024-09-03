let url = "https://rickandmortyapi.com/api/character/"

document.getElementById("rick").addEventListener('input',(e)=>{
    var search = document.getElementById("morty").value;
    fetch(url + search)
    .then(res => res.json())
    .then(data =>{
        
        
        var randm = document.getElementById("cajita")
        randm.innerHTML=`
        <img id="imagen" src="${data.image}">
        <h3 id="idecito">Id: ${data.id}</h3>
        <h2 id="name">Name: ${data.name}</h2>
        `
        var randm2 = document.getElementById("bloque")
        randm2.innerHTML=`
        <h4>Status: ${data.status}</h4>
        <h4>Specie: ${data.species}</h4>
        <h4>Type: ${data.type}</h4>
        <h4>Gender: ${data.gender}</h4>
        <h4>Origin: {
            <h4>Name: ${data.origin.name}</h4>
            <h4>Url: ${data.origin.url}</h4>
        }</h4>
        <h4>Location: {
            <h4>Name: ${data.location.name}</h4>
            <h4>Url: ${data.location.url}</h4>
        }</h4>
        `   
    });
})