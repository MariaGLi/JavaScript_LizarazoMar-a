let url = ""

document.addEventListener('DOMContentLoaded', ()=>{
    const datosContenedor = document.querySelector(".opciones");
    const taskInput = document.getElementById("insert_add");
    const addTaskButton = document.getElementById("button_search");

    async function fetchData() {
        const res = await fetch('https://6674179975872d0e0a950e53.mockapi.io/todoList');
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
                <div class="capsulanegativa">
                <div class="info_text_negativo">
                <p>${cap.task}</p>
                </div>
                <div class="botones_negativo">
                    <div class="terminado_negativo">
                        <img src="./storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                    </div>
                    <div class="eliminado_negativo">
                        <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                    </div>
                </div>
                </div>`
            }
            if(cap.status === "On hold"){
                captDiv.classList.add('capsula');
                captDiv.innerHTML = `
                <div class="capsula">
                <div class="info_text">
                <p>${cap.task}</p>
                </div>
                <div class="botones">
                    <div class="terminado">
                        <img src="./storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                    </div>
                    <div class="eliminado">
                        <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                    </div>
                </div>
                </div>`
            }
            datosContenedor.appendChild(captDiv)
        });
        document.querySelectorAll('.completado').forEach(button=>{
            button.addEventListener('click', botoncompletado);
        });
    }
    async function addNewTask() {
        const task = taskInput.value;
        if (task.trim() ===''){
            return;
        }       
    
        await fetch('https://6674179975872d0e0a950e53.mockapi.io/todoList',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({task,status:'On hold'})
        });
        taskInput.value='';
        const data = await fetchData();
        displayCapsula(data);
    }
    addTaskButton.addEventListener('click',addNewTask);

    async function botoncompletado(event) {
        const id = event.target.getAttribute('data-id');
        console.log("hola")
        await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status:'ready'})
            
        });
        const data = await fetchData();
        displayCapsula(data)
    }

    fetchData().then(data =>{
        displayCapsula(data);
    })
})
