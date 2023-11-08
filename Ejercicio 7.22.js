/*Función que dado un array numérico devuelve el # más alto y el más bajo de dicho array*/

const maxMin = (array=[]) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    for(let num of array) {
        if (typeof num !== "number") return console.error(`"El valor "${num}" no es un número."`)
        }
    let max = Math.max(...array),
    min = Math.min(...array);
    return console.info(`El número máximo es ${max} y el número mínimo es ${min}.`)
}; maxMin([5, 15, -60])
