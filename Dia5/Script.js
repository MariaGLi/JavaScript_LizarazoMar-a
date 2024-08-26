let data = [
    {
        "products": [
        {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
        }
        ],
    
        "suppliers": [
        {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
            "phone": "123-456-7890",
            "email": "sales@techsupplies.com",
            "address": "123 Tech Lane, Silicon Valley, CA"
        }
        }
        ],
        
        "orders": [
        {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-08-23",
        "status": "Delivered"
        }
        ]
    }
];

let estres = prompt (
    "///////////////////// Bienvenido al menú /////////////////////\n"+
    "Ingresa una de las opciones: \n"+
    "1. Gestión de Productos.\n"+
    "2. Gestión de Proveedores.\n"+
    "3. Gestión de Pedidos.\n"+
    "4. Gestión de Existencias.\n"+
    "5. Información.\n"+
    "6. Buscar y Filtrar.\n"+
    "7. Salir."
)

if (estres == 1){
    let gestprod = prompt(
        "-------------- Gestión de Productos --------------\n"+
        "1. Create.\n"+
        "2. Read.\n"+
        "3. Update.\n"+
        "4. Delete.\n"
    )

    if (gestprod == 1) {
        function addProduct(product){

        }
    }

    else if (gestprod == 2) {
        function viewProducts() {
            
        }
    }

    else if (gestprod == 3) {
        function updateProduct(id, newDetails) {

        }
    }

    else if (gestprod == 4) {
        function deleteProduct(id) {

        }
    }
}

else if (estres == 2){
    let gestprov = prompt(
        "-------------- Gestión de Proveedores --------------\n"+
        "1. Create.\n"+
        "2. Read.\n"+
        "3. Update.\n"+
        "4. Delete.\n"
    )

    if (gestprov == 1) {
        function addSupplier(supplier){

        }
    }

    else if (gestprov == 2) {
        function viewSuppliers() {
            
        }
    }

    else if (gestprov == 3) {
        function updateSupplier(id, newDetails) {

        }
    }

    else if (gestprov == 4) {
        function deleteSupplier(id) {

        }
    }
}

else if (estres == 3){
    let gestped = prompt(
        "-------------- Gestión de Pedidos --------------\n"+
        "1. Create.\n"+
        "2. Read.\n"+
        "3. Update.\n"+
        "4. Delete.\n"
    )

    if (gestped == 1) {
        function addOrder(order) {

        }
    }

    else if (gestped == 2) {
        function viewOrders() {
            
        }
    }

    else if (gestped == 3) {
        function updateOrder(orderId, newDetails) {

        }
    }

    else if (gestped == 4) {
        function deleteOrder(orderId) {

        }
    }
}

else if (estres == 4){
    function checkStockLevels() {

    }

    function restockProduct(id, quantity) {

    }
}

else if (estres == 5){
    function generateSalesReport(startDate, endDate) {

    }

    function generateInventoryReport() {

    }
}

else if (estres == 6){
    function searchProducts(query) {

    }

    function filterOrders(criteria) {

    }
}

else if (estres == 7){

}