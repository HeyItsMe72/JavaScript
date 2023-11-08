/*Función que dado un arreglo de #'s devuelva un objeto con 2 arreglos:
1° números ordenados de forma ascendente. 2° de forma descendente*/
/*El método .toSorted no es soportado por VSCode sólo por los navegadores.
Se puede utilizar el método sort haciendo primero una copia del array originial
para evitar perderlo.*/

/*const ordenar = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    for(let num of array) {
        if (typeof num !== "number") return console.error(`"El valor "${num}" no es un número."`)
    }
    let ascendente = [], descendente = []; 
    ascendente = array.toSorted((a, b) => a - b);
    // descendente = array.sort((a, b) => b - a);
    return console.info(`El array ${array} en orden: ${
        ascendente  
    }`);
}; ordenar([21, 2, 45, 8]);*/
const arraySort = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    for(let num of array) {
        if (typeof num !== "number") return console.error(`"El valor "${num}" no es un número."`)
    }
    const nuevoArray = [...array];
    // return console.info(`El array ${nuevoArray} 
    // en orden ascendente es: ${array.sort((a,b)=>a-b)}
    // en orden descendente es: ${array.sort((a,b)=>b-a)}.
    // Finalmente array queda reescrita como: ${array}`); 
    return console.info({
    original: nuevoArray,
    ascendente: [...array.sort((a,b)=>a-b)],
    descendente: [...array.sort((a,b)=>b-a)]
    })
}; arraySort([2, 25, 5, 80])