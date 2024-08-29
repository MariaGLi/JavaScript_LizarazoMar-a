fetch("https://superheroapi.com/api.php/d6e5788fb870ab306012867b126890ba/intelligence")
.then(res => res.json())
.then(data =>{
    console.log(data);
})