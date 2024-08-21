var n=prompt("Ingrese n: ")
var k=prompt("Ingrese k: ")
num=""
number=0

for(let i = 0; i < k; i++){
    num+=n
}
console.log(num)

for(let a of num){
    number+=Number(a)
}
console.log(number)

number=String(number)
numero=0
for(let j of number){
    console.log(j); 
    numero+=Number(j)   
}
console.log(numero);

numero=String(numero)
numerito=0
for(let g of numero){
    console.log(g);
    numerito+=Number(g)    
}
console.log(numerito);