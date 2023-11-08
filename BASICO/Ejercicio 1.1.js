/*Función que cuente el # de caracteres de una
cadena de texto */

function caracteres(string){
    let resultado = "";
    typeof string != "string" ? 
    console.error("El valor ingresado no es una cadena de texto.")
    : resultado = string.length; 
    return resultado;
} console.log(caracteres("Feo"));
console.log(caracteres(1));