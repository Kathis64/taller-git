const prompt = require("prompt-sync")();

lista = []

for(i = 1; i < 6; i++){
    nombre = prompt("Ingrese 5 nombres: ")
    lista.push(nombre)
    lista.sort()
}

console.log(lista)
