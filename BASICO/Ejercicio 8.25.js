/*Función que dado un arreglo de elementos, elimine los duplicados*/
/*Existen 3 formas diferentes de realizarse.*/

/*Utilizando la instancia de Set que en automático genera un nuevo array
pero eliminando los elementos duplicados: */

const eliminarSet = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    const nuevoArray = [...new Set(array)];
    return console.info(nuevoArray);
}; eliminarSet(["A", 1, 3, "a", "A", 3]);

/*Utilizando .indexOf() que devuelve el índice de la primera coincidencia del elementos
y .filter() que genera un nuevo array dependiendo de las operaciones del callback*/
/*En caso de que se requiera que se arrojen los elementos duplicados, basta con pedir que 
se arrojen aquellos que son !== indexOf() */

const eliminarIndexFilter = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    const nuevoArray = array.filter((e, i) => array.indexOf(e) === i)
    return console.info(nuevoArray);
}; eliminarIndexFilter(["A", 1, 3, "a", "A", 3])

/*Utilizando el método .include() el cual devuelve un booleano 
si el elemento está o no dentro del array y .forEach() que itera sobre cada elemento
comparando su contenido y en caso de ser distinto al que se añadio al array,
este se agrega al nuevo sin duplicados:*/

const eliminarIncludes = (array) => {
    if(!array) return console.warn("No introduciste el arreglo.");
    if(!(array instanceof Array)) return console.error("No es un arreglo.");
    const nuevoArray = [];
    array.forEach((e)=> {
        if(!nuevoArray.includes(e)) nuevoArray.push(e)
    }); return console.info(nuevoArray);
}; eliminarIncludes(["A", 1, 3, "a", "A", 3])