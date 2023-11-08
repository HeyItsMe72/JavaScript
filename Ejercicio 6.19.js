/*Función que valida que un texto sea un nombre válido.*/
/*Se utiliza RegExp*/

const validar = (nombre="") => {
    if(!nombre) return console.warn("No ingresaste ninguna cadena de texto.");
    if(typeof nombre != 'string') return console.warn("El dato ingresado no corresponde a una cadena de texto");
    let regExp = /^[a-zA-ZÑñÁÉÍÓÚÜáéíóúü\s]+$/g.test(nombre);
    return (regExp) ? 
    console.info(`"${nombre}" sí es válido`)
    :console.info(`"${nombre}" no es válido`);
}; validar("Lucía Esteves");
validar("Lucía dsw3243")