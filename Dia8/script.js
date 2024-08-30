let url = ""

url = `https://swapi.py4e.com/api/people/1`;

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data.name);
})