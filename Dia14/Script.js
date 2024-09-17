let url = ('https://www.datos.gov.co/resource/9vha-vh9n.json')


//-------------------------------HTML-------------------------------

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

//------------------------------JS------------------------------------

function hurtosAutomotores(){
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data[0]);
        
    })
}
hurtosAutomotores()