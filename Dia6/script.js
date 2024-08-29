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
    var suppliers=data.suppliers    
    var inf=document.getElementById("info2")

    function viewSuppliers(){
        inf.innerHTML=""
        suppliers.forEach(sup => {
            inf.innerHTML+=`
            <p>id: ${sup.id}</p>
            <p>name: ${sup.name}</p>
            <p>contactInfo: {
            <p>phone: ${sup.contactInfo.phone}</p>
            <p>email: ${sup.contactInfo.email}</p>
            <p>address: ${sup.contactInfo.address}</p> }</p>
            <button id=date${sup.id}>Eliminar</button> 
            `;
            document.getElementById(`date${sup.id}`).addEventListener("click", (e)=>{
                deleteSuppliers(sup.id)
            })
        });
    }
    
    function deleteSuppliers(id){
        suppliers=suppliers.filter(supplierNew => supplierNew.id !== id)
        viewSuppliers()
    }

    document.getElementById("cont2").addEventListener("submit", function(event){
        event.preventDefault();
        
        let supp=document.getElementById("caja").value;
        let supp2=document.getElementById("caja2").value;
        let supp3=document.getElementById("caja3").value;
        let supp4=document.getElementById("caja4").value;
        let supp5=document.getElementById("caja5").value;

        products.push({
            "id": supp,
            "name": supp2,
            "phone": supp3,
            "email": supp4,
            "address": supp5,
        })
        console.log(suppliers);
        viewSuppliers()
    });
    viewSuppliers()

})