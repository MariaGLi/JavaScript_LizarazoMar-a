fetch("miJson.json")
.then(hola => hola.json())
.then(data =>{

// Products

    var products=data.products
    var info=document.getElementById("info")

    function viewProducts(){
        info.innerHTML=""
        products.forEach(prod => {
            info.innerHTML+=`
            <p>id: ${prod.id}</p>
            <p>name: ${prod.name}</p>
            <p>category: ${prod.category}</p>
            <p>price: ${prod.price}</p>
            <p>quantityInStock: ${prod.quantityInStock}</p>
            <p>supplierId: ${prod.supplierId}</p>
            <button id=date${prod.id}>Eliminar</button> 
            `;
            document.getElementById(`date${prod.id}`).addEventListener("click", (e)=>{
                deleteProducts(prod.id)
            })
        });
    }
    
    function deleteProducts(id){
        products=products.filter(productNew => productNew.id !== id)
        viewProducts()
    }

    document.getElementById("cont").addEventListener("submit", function(event){
        event.preventDefault();
        
        let inp=document.getElementById("cajita").value;
        let inp2=document.getElementById("cajita2").value;
        let inp3=document.getElementById("cajita3").value;
        let inp4=document.getElementById("cajita4").value;
        let inp5=document.getElementById("cajita5").value;
        let inp6=document.getElementById("cajita6").value;

        products.push({
            "id": inp,
            "name": inp2,
            "category": inp3,
            "price": inp4,
            "quantityInStock": inp5,
            "supplierId": inp6
        })
        console.log(products);
        viewProducts()
    });
    viewProducts()

// Suppliers


})