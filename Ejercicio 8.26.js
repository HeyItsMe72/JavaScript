/*Función que dado un arreglo de #'s obtenga el promedio*/
/*En la función reduce cero es el valor inicial*/
const promedio = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    for(let num of array) {
        if (typeof num !== "number") return console.error(`"El valor "${num}" no es un número."`)
    }
    let suma = array.reduce((acumulado, actual)=> acumulado + actual, 0); 
    let promedio = suma / array.length;
    return console.info(`La suma es: ${suma}.\nEl promedio es: ${promedio}.`);
}; promedio([1, 2, 3, 4]);