/*Función que dado un array numérico devuelve otro 
array con los números elevados al cuadrado*/

const cuadrado = (array=[]) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    for(let num of array) {
        if (typeof num !== "number") return console.error(`"El valor "${num}" no es un número."`)
        }
    let alCuadrado = array.map((i) => i * i);
    return console.info(`El arreglo ${array} al cuadrado es: ${alCuadrado}`);
}; cuadrado([1, 2, 3]);
cuadrado([]);
cuadrado();
