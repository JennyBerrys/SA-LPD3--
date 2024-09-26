function calcularFactorial() {
    let numero = prompt("Introduce un número para calcular su factorial!:");

    while (isNaN(numero) || numero <= 0 || !Number.isInteger(Number(numero))) {
        numero = prompt("Error!!!: introduce un número entero positivo:");
    }

    numero = Number(numero); 

 
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${factorial}`;
}

document.addEventListener("DOMContentLoaded", calcularFactorial);
