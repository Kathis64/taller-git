const prompt = require("prompt-sync")();

numero = parseInt(prompt("Ingrese un numero que desea ver la tabla de multiplicación del 1 al 10: "))

if(numero > 0){
    if(numero >= 1 || numero <= 10){
        for(i = 1; i < 11; i++){
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
    }
    else{
        console.log("El numero debe ser del 1 al 10")
    }
}
else{
    console.log("El numero debe ser positivo")
}
