/*Función para contar el número de veces 
que se repite una palabra en un texto largo*/
//Funcion expresada
let contarString = (string, word) => {
    if (typeof string != "string" || typeof word != "string") 
    console.error("No es un texto o una palabra");
    else {
        string = string.toLowerCase();
        word = word.toLowerCase();
        let contar = [];
        for (const item of string.split(" ")) {
            if (item === word) {
                contar.push(word);
            }
        } (contar.length == 0) ? console.warn("No hay coincidencias.")
            : console.log(contar.length);
}

}; contarString("Hola Mundo Hola", "hola");