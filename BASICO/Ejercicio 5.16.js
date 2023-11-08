/*Función que devuelve el monto final después de aplicar un descuento a una cantidad*/

let descuento = (precio, descuento) => {
    if (typeof precio !== "number") 
    return console.error ("No es un número"); 
    if (typeof descuento !== "number") 
    return console.error ("No es un número");
    if(precio === undefined || descuento === undefined) 
    return console.warn("No introduciste datos válidos.");
    descuento = (descuento*precio)/100;
    precio = precio - descuento; 
    return console.info("El precio final es", precio);
}; descuento(1000, 20);