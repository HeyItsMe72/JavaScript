/*Función que dada una fecha determine cuántos días han pasado a la fecha actual.*/

/*Convertir fechas a ms, hacer la aritmética correspondiente y el resultado
convertirlo a la unidad de tiempo que se necesite*/
const calcularDias = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No se ingresó la fecha");
    if(!(fecha instanceof Date)) return console.error("No es una fecha válida");
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(), 
    diasEnMs = 1000 * 60 * 60 * 24;
    let diasHumanos = Math.floor(hoyMenosFecha / diasEnMs);
    return (Math.sign(diasHumanos) === -1) ?
    console.info(`Faltan ${Math.abs(diasHumanos)} días para el ${fecha.getFullYear()}.`)
    : (Math.sign(diasHumanos) === 1) ?
    console.info(`Han pasado ${Math.abs(diasHumanos)} días desde el ${fecha}.`)
    : console.info(`Estamos en el año actual ${fecha}.`);
}; calcularDias(new Date(2023, 8, 10));