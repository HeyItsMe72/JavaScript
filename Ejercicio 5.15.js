/*Función que convierte números de base binaria a decimal y viceversa.*/
/*El método parseINt puede tener como segundo parámetro un indicador
de la base qué se quiere hacer la conversión*/
/*El método toString es un método que puede recibir un parámetro que indique 
la base a lo que será convertido*/

const convertirBD = (numero = undefined, base = undefined) => {
    if (typeof numero !== "number") 
    return console.error ("No es un número."); 
    if (typeof base !== "number") 
    return console.error ("No es un número.");
    if(numero === undefined || base === undefined) 
    return console.warn("No introduciste datos completos.");
    if (base === 2) return console.info(`${numero} en base ${base} es igual a ${parseInt(numero, base)} en base 10`);
    else if (base === 10) return console.info(`${numero} en base ${base} es igual a ${numero.toString(2)} en base 2`)
    else return console.error("El número de base no es válido.")
}; convertirBD(4, 10);
convertirBD(100, 2);
