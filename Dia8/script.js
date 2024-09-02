let url = ""

url = `https://swapi.py4e.com/api/people/`;

var hero=document.getElementById("starwar")
document.getElementById("boton").addEventListener('click',(e)=>{
    let search = document.getElementById("idecito").value;
    fetch(url+search)
    .then(res => res.json())
    .then(data =>{
        var est=
        `<table class="table">
            <thead>
                <tr> 
                <th scope="col">Name:</th>
                <th scope="col">${data.name}</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">Height:</th>
                    <td>${data.height}</td>
                    </tr>
                <tr>
                <th scope="row">Mass:</th>
                <td>${data.mass}</td>
                </tr>
                    <tr>
                    <th scope="row">Hair_color:</th>
                    <td>${data.hair_color}</td>
                </tr>
                <tr>
                    <th scope="row">skin_color:</th>
                    <td colspan="2">${data.skin_color}</td>
                </tr>
                <tr>
                    <th scope="row">eye_color:</th>
                    <td colspan="2">${data.eye_color}</td>
                </tr>
                <tr>
                    <th scope="row">birth_year:</th>
                    <td colspan="2">${data.birth_year}</td>
                </tr>
                <tr>
                    <th scope="row">gender:</th>
                    <td colspan="2">${data.gender}</td>
                    </tr>
                <tr>
                    <th scope="row">homeworld:</th>
                    <td colspan="2">      
                    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-body" id="superMundo">
                        </div>
                    </div></td>
                    </tr>
                <tr>
                    <th scope="row">films:</th>
                    <td colspan="2">
                    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                        </div>
                    </div>
                    </td>
                    </tr>
            </tbody>
        </table>`

    var otro =(data.homeworld)
    fetch(otro)
    .then(rest2=> rest2.json())
    .then (data2 =>{
    let saveOtro=document.getElementById("superMundo")
    saveOtro.innerHTML=`
        <table class="table">
        <thead>
            <tr> 
            <th scope="col">Name:</th>
            <th scope="col">${data2.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">rotation_period:</th>
            <td>${data2.rotation_period}</td>
            </tr>
            <tr>
            <th scope="row">orbital_period:</th>
            <td>${data2.orbital_period}</td>
            </tr>
            <tr>
            <th scope="row">diameter:</th>
            <td>${data2.diameter}</td>
            </tr>
            <tr>
            <th scope="row">climate:</th>
            <td colspan="2">${data2.climate}</td>
            </tr>
            <tr>
            <th scope="row">gravity:</th>
            <td colspan="2">${data2.gravity}</td>
            </tr>
            <tr>
            <th scope="row">terrain:</th>
            <td colspan="2">${data2.terrain}</td>
            </tr>
            <tr>
            <th scope="row">surface_water:</th>
            <td colspan="2">${data2.surface_water}</td>
            </tr>
            <tr>
            <th scope="row">population:</th>
            <td colspan="2">${data2.population}</td>
            </tr>
            <tr>
            <th scope="row">residents:</th>
            <td colspan="2">${data2.residents}</td>
            </tr>
        </tbody>
        </table>`
    })


document.getElementById(`guardaStrucGen`).innerHTML=est  


})

var pelis =(data.films)
fetch(movies)
.then(rest3=> rest3.json())
.then(Movie =>{
  let saveMovies=document.getElementById("mundos");
  saveMovies.innerHTML+=`
    <table class="table">
      <thead>
        <tr> 
          <th scope="col">Name:</th>
          <th scope="col">${Movie.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Height:</th>
          <td>${Movie.height}</td>
        </tr>
        <tr>
          <th scope="row">Mass:</th>
          <td>${Movie.mass}</td>
        </tr>
        <tr>
          <th scope="row">Hair_color:</th>
          <td>${Movie.hair_color}</td>
        </tr>
        <tr>
          <th scope="row">skin_color:</th>
          <td colspan="2">${Movie.skin_color}</td>
        </tr>
        <tr>
          <th scope="row">eye_color:</th>
          <td colspan="2">${Movie.eye_color}</td>
        </tr>
        <tr>
          <th scope="row">birth_year:</th>
          <td colspan="2">${Movie.birth_year}</td>
        </tr>
        <tr>
          <th scope="row">gender:</th>
          <td colspan="2">${Movie.gender}</td>
        </tr>
        <tr>
          <th scope="row">homeworld:</th>
          <td colspan="2">${Movie.homeworld.name}</td>
        </tr>
        <tr>
          <th scope="row">films:</th>
          <td colspan="2">${Movie.films}</td>
        </tr>
      </tbody>
    </table>`
document.getElementById(`guardaStrucMun`).innerHTML=estructura1  
})
});