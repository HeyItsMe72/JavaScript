/*Función que dada una string te devuelva 
un array de textos separados por cierto caracter */

function stringArray (string, separador) {
    let array = [];
    typeof string != "string" ?
    console.error("No es una cadena de texto") 
    : array = string.split(separador);
    return array;
} console.log(stringArray("Hola, qué tal?", " "))