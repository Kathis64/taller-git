function lanzarDados() {
    let cantidad = parseInt(prompt("Ingrese cuántos dados lanzar:"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese un número válido.");
        return;
    }
    
    let resultados = [];
    for (let i = 0; i < cantidad; i++) {
        resultados.push(Math.floor(Math.random() * 6) + 1);
    }
    
    alert("Resultado: " + resultados.join(", "));
}

lanzarDados();
