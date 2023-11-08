/*Funcióm que devuelve el texto recortado 
según el # de caracteres indicados */

function stringSlice(string, numero) {
    let resultado = "";
    if( typeof string != "string" || typeof numero != "number") {
    console.error("No es una cadena de texto o no es un número.");
    } else {
        resultado = string.slice(0, numero);
    } return resultado;
} console.log(stringSlice("Hola Mundo", 4));
console.log(stringSlice(454, 4));

