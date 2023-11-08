/*Funcion que valide si una palabra o frase
es un palindromo */

function esPalidronmo (string) {
    if(typeof string != "string") console.error("No es una cadena de texto");
    else {
        string = string.toLowerCase();
        if(string.split("").join() == string.split("").reverse().join())
        console.log(true);
        else console.warn("No es palindromo.");
    }
    
} esPalidronmo("");
esPalidronmo(1232);