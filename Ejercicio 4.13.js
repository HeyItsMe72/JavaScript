/*Función que determine si un # es par o impar*/

let par = (numero) => {
    if (typeof numero !== "number") 
    return console.error ("No es un número"); 
    if(numero === undefined) 
    return console.warn("No introduciste número"); 
    else {
        if(numero % 2 === 0) 
        return console.info(`El número ${numero} es par.`);
        else return console.info(`El número ${numero} es impar.`);
    }
}; par(8);
      