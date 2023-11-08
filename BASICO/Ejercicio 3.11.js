/*Función que calcule el factorial de un # entero positivo.*/

let factorial = (number) => {
    if (typeof number != "number" || number === undefined)
    console.error("No es un número.");
    else {
        let contador = 1;
        for(let i = 1; i <=number; i++) {
            contador *= i;
        }
        console.info("El factorial de", number, "es", contador);
    } 
}; factorial(5);