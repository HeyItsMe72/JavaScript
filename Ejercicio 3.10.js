/*Función que recibe un # y evalúe si es capicúa o no */

let capicuaNum = (number) => {
    let capicua;
    if (typeof number != "number")
    console.error("No es un número.");
    else if (number === undefined) 
    console.warn("No se ingresó el número"); 
    else {
        capicua = number.toString().split("").reverse().join(''); 
        (capicua == number) ?
        console.info("El número", number, "sí es capicúa de", capicua)
        : console.info("El número", number, "no es capicúa de", capicua)
    }
}; capicuaNum("523");

/*Si se utiliza if, if, else JS entiende que el else pertenece al último if, 
por lo que, no importa que el primero sea falsado, ya que el segundo se ha evaluado 
y no cumplido, aún accede al else. else if indica al programa que pertenecen al primer if
y deben ser revisados en cadena.*/