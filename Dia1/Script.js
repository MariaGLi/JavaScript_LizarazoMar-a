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

console.log(descuento(2))


// Sin parámetros, sin retorno
function mía(){
    console.log("¡Hola! gente")
}
mía()

// Con parámetro, sin retorno
function suma(a,b){
    var sum= a+b
    console.log("El resultado de la suma es: ", sum)
}
suma(5,2)

// Con parámetro, con retorno
function resta(c,d){
    var restar= c-d
    return restar
}
console.log("El resultado de la resta es: ", resta (10,7))

// Sin parámetro, con retorno
function multiplicación(){
    let multiplicación= 9*3
    return multiplicación
}
console.log("El resultado de la multiplicación es: ", multiplicación())

//Hecho por: María Lizarazo