/*Clase que recibe un objeto al momento de instanciarse con los siguientes datos:
    -Id de la película en IMDB
    -Título
    -Director
    -Año de estreno´
    -País o países de origen
    -Géneros
    -Calificación en IMBD*/
/*Validaciones:
    -Valida que el IMBD tenga 9 caracteres. Los 1's dos sean letras y los 7 restantes #'s
    -Que el título no rebase 100 caracteres.
    -Que el director no rebase 50 caracteres. 
    -El año de estreno sea un # de 4 dígitos. 
    -País o países sean introducidos en forma de arreglo.
    -Géneros sea introducido en forma de arreglo 
    y sean válidos dentro de los géneros aceptados. 
    -Que la calificación sea un número entre 0-9.
    */
/*Extras:
    -Crea un método estático que devuelva los géneros aceptados.
    -Crea un método que devuelva toda la ficha técnica.
    -Genera 3 instancias e imprime la ficha técnica de cada película.
*/

class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
        //Atributos
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        //Métodos
        this.validarIdIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }
    /*Atriubuto estático Géneros.
    Al ser estático, no cambia en absoluto*/
    static get listaGeneros(){
        return ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
        "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "History", "Horro",
        "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short", "Sport", "Thriller", 
        "War", "Western"];
    }

    /*Método estático 
    para la impresión del atributo estático*/
    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(",")}`);
    }

    /*Métodos de validación global. 
    Todos los métodos de validación global deberán
    retornar un true en caso de que las validaciones sean cumplidas, ya que serán métodos 
    utilizados en el constructor por aquellos específicos para cada atributo.*/ 

    //Para id, titulo, director
    validarString(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor} NO es una
        cadena de texto"`);
        return true; 
    }

    //Para titulo y director
    validarLongitud(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" 
        excede el número de caracteres permitidos (${longitud}).`);
        return true;
    }

    //Para estreno y calificación
    validarNumeros(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor} NO es
        un número"`);
        return true; 
    }

    //Para países y géneros
    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor} NO es
        un arreglo"`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" NO tiene datos.`);
        for(let cadena of valor){
            if(typeof cadena !== "string")
            console.error(`El valor "${cadena}" NO es una cadena de texto.`);
        }
        return true;
    }

    /*Métodos específicos de validación de atributos de la clase*/
    validarIdIMDB(id){
        if(this.validarString("ID IMDB", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
            return console.error(`IMDB id "${id}" NO válido. Debe contener 9 caracteres:
            Primeras 2 letras minúsculas seguido de 7 dígitos.`);
        }
    }

    validarTitulo(titulo){
        if(this.validarString("Título", titulo))
        this.validarLongitud("Título", titulo, 100)
    }

    validarDirector(director){
        if(this.validarString("Director", director))
        this.validarLongitud("Director", director, 50)
    }

    validarEstreno(estreno){
        if(this.validarNumeros("Estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno)))
            return console.error(`Año de estreno NO válido.`);
        }
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Géneros", generos)){
            for(let genero of generos) {
                if(!Pelicula.listaGeneros.includes(genero)){
                console.error(`Género(s) incorrectos: ${generos.join(",")}.`)
                Pelicula.generosAceptados()
                };
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumeros("Calificación", calificacion)) {
            return calificacion < 0 || calificacion > 10 ?
            console.error(`La calificación debe ser entre 0-10`)
            : this.calificacion = calificacion.toFixed(1);
        }
    }

    //Imprimir Ficha técnica
    fichaTecnica(){
        console.info(`Ficha Técnica.\nTítulo: ${this.titulo}\nDirector: ${this.director}\nEstreno: ${this.estreno}\nPaís(es): ${this.pais.join("-")}\nGéneros: ${this.generos.join(",")}\nCalificación: ${this.calificacion}\n`);
    }
}

//Generar instancias
const misPelis = [{
    id: "tt1234567",
    titulo: "Harry Potter", 
    estreno: 2000,
    director: "Yo mera",
    pais: ["Inglaterra"],
    generos: ["Adventure"],
    calificacion: 8.569
}, {
    id: "tt1234567",
    titulo: "Harry Potter", 
    estreno: 2000,
    director: "Yo mera",
    pais: ["Inglaterra"],
    generos: ["Adventure"],
    calificacion: 8.569
}]

//Creación de la clase e impresión

misPelis.forEach(element => {
    new Pelicula(element).fichaTecnica()
});