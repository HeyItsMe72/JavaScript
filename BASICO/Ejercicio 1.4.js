/*Función que repita un texto X veces.*/
function repeatString (string, repeticiones) {
    let resultado, espacio;
    if(typeof string != "string")
    console.error("No es una string o un número");
    else {
        this.string = string;
        espacio = string.padEnd(string.length+1);
        resultado = espacio.repeat(repeticiones);
    } return resultado;
} console.log(repeatString("Hola, Mundo", 5));