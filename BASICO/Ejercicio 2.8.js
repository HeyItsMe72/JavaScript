/*Funcion que elimine un cierto patron 
de caracteres de una cadena de texto */

//Función declarada
const removerString = (string="", patron="") => {
    (!string) ? 
    console.warn("No hay texto")
    : (!patron) ? 
    console.warn("No hay patrón")
    : console.info(string.replace(new RegExp(patron, "ig"), ""),)
}; removerString("", "o");