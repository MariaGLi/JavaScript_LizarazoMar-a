let url = 'https://66e45b6ed2405277ed14088d.mockapi.io/P-Mobile'


function Mobile(){
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        console.log(data);

        let caja= document.querySelector('#caja2')
        data.forEach(element => {
            caja.innerHTML+=`
            <div class="cajita">
                <div class="img">
                    <img id="image" src="${element.avatar}">
                </div>
                <div class="name">
                    <h2>${element.name_full}</h2>
                    <p>${element.description}</p>
                </div>
            </div>`
        });
        
        document.addEventListener('keyup', e=>{
            if (e.target.matches("#search")){
                document.querySelectorAll(".cajita").forEach(names=>{
                    names.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ?names.classList.remove("filtro")
                    :names.classList.add("filtro")
                })
            }
        })
    })
}
Mobile()

class Caja extends HTMLElement{
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
customElements.define('boton-shadow', Caja)