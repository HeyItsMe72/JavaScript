/*Función que dada una cadena de texto cuente el # de vocales y consonantes.*/ 
/*Se utiliza RegExp*/

const contarLetras = (cadena="") => {
    if(!cadena) return console.warn("No ingresaste ninguna cadena de texto.");
    if(typeof cadena != 'string') return console.warn("El dato ingresado no corresponde a una cadena de texto");
    let vocales = 0, consonantes = 0;
    cadena = cadena.toLowerCase();
    for (let letra of cadena) {
        if(/[aeiouáéíóúü]/.test(letra)) vocales++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    } return console.info({
        cadena,
        vocales,
        consonantes
    });
}; contarLetras("Hola Mundo")