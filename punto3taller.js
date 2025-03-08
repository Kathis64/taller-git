const prompt = require("prompt-sync")();

let saldo = 1000
let flag = true
while (flag){
    operacion = prompt("Cual operacion desea hacer: ")
    console.log("1. Consultar saldo")
    console.log("2. Depositar dinero")
    console.log("3. Retirar dinero")
    console.log("4. Salir")
    switch(operacion){
        case "1":
            console.log(`Su saldo es: ${saldo}`)
            break
        case "2":
            depositar = parseFloat(prompt("Ingrese cuanto desea depositar: "))
            deposito = saldo + depositar
            console.log(`Su nuevo saldo es: ${deposito}`)
            break
        case "3":
            retirar = parseFloat(prompt("Ingrese el dinero que desea retirar: "))
            resultado = saldo - retirar
            if(saldo >= retirar && retirar > 0){
                    console.log(`Su nuevo saldo es: ${resultado}`)
            }
            else if(retirar < 0){
                console.log("El dinero a retirar debe ser positivo")
            }
            break
        case "4":
            console.log("Saliendo.... ")
            flag = false
            break
        default:
            console.log("Debe elegir entre las opciones ya mencionadas")
    }
}
