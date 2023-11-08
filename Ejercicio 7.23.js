/*Función que dado un array de #'s devuelva un objeto con dos arreglos. 
En el 1° almacena los #'s pares y en el 2° los impares.*/
/*También se puede sustituir el ciclo for para el conteo por el método filter bajo una condición
de filtrado nume => num % 2 === 0 y num => num % === 1 respectivamente */

const paroImpar = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.")
    for(let num of array) {
    if (typeof num !== "number") return console.error(`"El valor "${num}" no es un número."`)
    }
    let par = [], impar = [];
    for (let i of array) {
        if([i] % 2 === 0) par.push([i]);
        else impar.push([i]);
    } return console.info(`Los números pares son ${par} y los números impares ${impar}`);
}; paroImpar([1, 2, 3, 4, 5, 6]);