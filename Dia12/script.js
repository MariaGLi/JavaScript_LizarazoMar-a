let url = ""

document.addEventListener('DOMContentLoaded', ()=>{
    const datosContenedor = document.querySelector(".opciones");
    const taskInput = document.getElementById("insert_add");
    const addTaskButton = document.getElementById("button_search");

    async function fetchData() {
        const res = await fetch('https://6674179975872d0e0a950e53.mockapi.io/todoList')
        data = await res.json();
        return data;
    }
    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap => {
            const captDiv = document.createElement('div');
            if(cap.status === "ready"){
                captDiv.classList.add('capsula_negativa');
                captDiv.innerHTML = `
                <div class="capsula_negativa2">
                    <div class="info_text_negativo">
                        <p>Example</p>
                    </div>
                    <div class="botones_negativo">
                        <div class="terminado_negativo">
                            <img src="./storage/img/pngwing.com (2).png" data-id="1">
                        </div>
                        <div class="eliminado_negativo">
                            <img src="./storage/img/pngwing.com (4).png" data-id="2">
                        </div>
                    </div>
                </div>`
            }
            if(cap.status === "On hold"){
                captDiv.classList.add('capsula');
                captDiv.innerHTML = `
                <div class="capsula2">
                    <div class="info_text">
                        <p>Example</p>
                    </div>
                    <div class="botones">
                        <div class="terminado">
                            <img src="./storage/img/pngwing.com (2).png" data-id="1">
                        </div>
                        <div class="eliminado">
                            <img src="./storage/img/pngwing.com (4).png" data-id="2">
                        </div>
                    </div>
                </div>`
            }
            datosContenedor.appendChild(captDiv)
        });
    }
    fetchData().then(data =>{        
        displayCapsula(data);
    })
})