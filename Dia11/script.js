url = "https://randomuser.me/api/"

fetch(url)
.then(res => res.json())
.then(data => {
    document.getElementById('circulo_foto').innerHTML+=`
    <img id="foto_Script" src="${data.results[0].picture.large}">`
    

})