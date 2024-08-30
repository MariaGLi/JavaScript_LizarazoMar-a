let url = ""

url = `https://superheroapi.com/api.php/d6e5788fb870ab306012867b126890ba/`;

var hero=document.getElementById("hero")
document.getElementById("boton").addEventListener('click',(e)=>{
    let search = document.getElementById("idecito").value;
    fetch(url+search)
    .then(res => res.json())
    .then(data =>{
        hero.innerHTML=`
        <img src= ${data.image.url}>
        <tr>
            <th scope="row">Id</th>
            <td>${data.id}</td>
        </tr>
        <tr>
            <th scope="row">Name</th>
            <td>${data.name}</td>
        </tr>
        <tr>
            <th id="power" scope="row" colspan="2">PowerStats:</th>
        </tr>
        <tr>
            <th scope="row">Intelligence</th>
            <td>${data.powerstats.intelligence}</td>
        </tr>
        <tr>
            <th scope="row">Strength</th>
            <td>${data.powerstats.strength}</td>
        </tr>
        <tr>
            <th scope="row">Speed</th>
            <td>${data.powerstats.speed}</td>
        </tr>
        <tr>
            <th scope="row">Durability</th>
            <td>${data.powerstats.durability}</td>
        </tr>
        <tr>
            <th scope="row">Power</th>
            <td>${data.powerstats.power}</td>
        </tr>
        <tr>
            <th scope="row">Combat</th>
            <td>${data.powerstats.combat}</td>
        </tr>`
})
    })