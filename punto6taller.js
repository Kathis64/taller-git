const prompt = require("prompt-sync")();

let pares = []
let impares = []

for(i = 1; i < 11; i++){
    numero = parseInt(prompt("Ingrese 10 numeros: "))
    if(numero % 2 == 0){
        pares.push(numero)
    }
    else{
        impares.push(numero)
    }
}

console.log(`Lista de pares: ${pares}`)
console.log(`Lista de impares: ${impares}`)
