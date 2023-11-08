/*Función que valida que un texto sea un email válido.*/
const validarEmail = (email="") => {
    if(!email) return console.warn("No ingresaste ningún email.");
    if(typeof email != 'string') return console.warn("El dato ingresado no corresponde a una cadena de texto");
    let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg) ? 
    console.info(`"${email}" sí es válido`)
    :console.info(`"${email}" no es válido`);
}; validarEmail("Lucía Esteves");
validarEmail("Lucía dsw3243");
validarEmail("Lucía@gmail.mx")
