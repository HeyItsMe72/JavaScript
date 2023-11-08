/*Función que invierta las 
palabras de una cadena de texto */

function separarString (string) {
    if(typeof string != "string" || string === "") 
    console.error("No es una cadena de texto");
    else {
        let arraySplit = string.split("");
        arraySplit = arraySplit.reverse(); 
        console.log(arraySplit.join(""));
    }
} separarString("Hola Mundo");
separarString();