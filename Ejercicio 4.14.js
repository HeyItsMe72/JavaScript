/*Función para convertir °C a °F y viceversa*/

let grados = (grados, tipo) => {
    if (typeof grados !== "number") 
    return console.error ("No es un número"); 
    if (typeof tipo !== "string") 
    return console.error ("No es una unidad válida");
    if(grados === undefined || tipo === undefined) 
    return console.warn("No introduciste datos válidos."); 
    tipo = tipo.toLowerCase();
        if(tipo === "c") {
            let farenheit = (((9/5)*grados)+32);
            return console.info(`${grados}°C corresponden a ${farenheit}°F`);
        }
        if(tipo ==="f") {
            let celcius = ((grados - 32)/1.8);
            return console.info(`${grados}°F corresponden a ${celcius}°C`)
        }

        else console.error("No introduciste una unidad válida");
    
}; grados(0, "C");
grados(0, "");
grados("C");