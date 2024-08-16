//1mer Ejercicio
function edad(m){
    respuesta=2024-m;
    return respuesta
}
console.log(edad(25))

//2do Ejercicio
function grados(c){
    F=32+(9*c/5);
    return F
}
console.log(grados(35))

//3cer Ejercicio
function descuento(p){
    if (p <=20){
        console.log("El cliente tiene un descuento del: 30%");
    }
    else if (p <=50){
        console.log("El cliente tiene un descuento del: 10%");
    }
    else{
        console.log("El cliente no tiene descuento");
    }

}   

console.log(descuento(10))