let url = "https://randomuser.me/api/"

const foto = document.getElementById("foto");
const text = document.getElementById("text_up");
const text2 = document.getElementById("text_down");

const icono = document.getElementById("icono")
const icono2 = document.getElementById("icono2")
const icono3 = document.getElementById("icono3")
const icono4 = document.getElementById("icono4")
const icono5 = document.getElementById("icono5")
const icono6 = document.getElementById("icono6")

function Users(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        foto.src = data.results[0].picture.large
        text2.textContent = data.results[0].name.first +" "+ data.results[0].name.last
        function Icons(){
            icono.addEventListener("mouseenter",(e)=>{
                icono.style = "background-position-y: 0em;"
                icono2.style = "background-position-y: 6em;"
                icono3.style = "background-position-y: 6em;"
                icono4.style = "background-position-y: 6em;"
                icono5.style = "background-position-y: 6em;"
                icono6.style = "background-position-y: 6em;"
                text.textContent = "Hi, my name is"
                text2.textContent = data.results[0].name.first+" "+data.results[0].name.last
            })
            icono2.addEventListener("mouseenter",(e)=>{
                icono2.style = "background-position-y: 0em;"
                icono.style = "background-position-y: 6em;"
                icono3.style = "background-position-y: 6em;"
                icono4.style = "background-position-y: 6em;"
                icono5.style = "background-position-y: 6em;"
                icono6.style = "background-position-y: 6em;"
                text.textContent = "My email address is"
                text2.textContent = data.results[0].email
            })
            icono3.addEventListener("mouseenter",(e)=>{
                icono3.style = "background-position-y: 0em;"
                icono.style = "background-position-y: 6em;"
                icono2.style = "background-position-y: 6em;"
                icono4.style = "background-position-y: 6em;"
                icono5.style = "background-position-y: 6em;"
                icono6.style = "background-position-y: 6em;"
                text.textContent = "My birthday is"
                text2.textContent = data.results[0].dob.date
            })
            icono4.addEventListener("mouseenter",(e)=>{
                icono4.style = "background-position-y: 0em;"
                icono.style = "background-position-y: 6em;"
                icono2.style = "background-position-y: 6em;"
                icono3.style = "background-position-y: 6em;"
                icono5.style = "background-position-y: 6em;"
                icono6.style = "background-position-y: 6em;"
                text.textContent = "My address is"
                text2.textContent = data.results[0].location.street.number +" "+ data.results[0].location.street.name
            })
            icono5.addEventListener("mouseenter",(e)=>{
                icono5.style = "background-position-y: 0em;"
                icono.style = "background-position-y: 6em;"
                icono2.style = "background-position-y: 6em;"
                icono3.style = "background-position-y: 6em;"
                icono4.style = "background-position-y: 6em;"
                icono6.style = "background-position-y: 6em;"
                text.textContent = "My phone number is"
                text2.textContent = data.results[0].phone
            })
            icono6.addEventListener("mouseenter",(e)=>{
                icono6.style = "background-position-y: 0em;"
                icono.style = "background-position-y: 6em;"
                icono2.style = "background-position-y: 6em;"
                icono3.style = "background-position-y: 6em;"
                icono4.style = "background-position-y: 6em;"
                icono5.style = "background-position-y: 6em;"
                text.textContent = "My password is"
                text2.textContent = data.results[0].login.password
            })
        }
        Icons()
    })
}
Users()