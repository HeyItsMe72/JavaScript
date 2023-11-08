/*Función que obtenga un # aleatorio 
entre 501 y 600 */

const numAleatorio = (min, max) => {
    console.info(Math.random()*(max-min) + min)
};numAleatorio(501, 601);