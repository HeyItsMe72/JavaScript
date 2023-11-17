const d = document;

export default function countDown(id, limitDate, finalMessage) {
    const $countDown = d.getElementById(id),
    countDownDate = new Date(limitDate).getTime();

    let countDownTemp = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countDownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        /*Cuando en JS añades una cadena de texto a un número por medio de 
        la concatenación, por defecto JS convierte toda la expresión a un string.*/ 
        /*Días deja un residuo que son las horas en ms, para obtenerlas se divide el
        residuo entre la conversión de ms a horas*/
        hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2), 
        /*horas deja un residuo que son los minutos en ms, para obtenerlos se divide el
        residuo entre la conversión de ms a minutos*/
        minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2), 
        /*minutos deja un residuo que son los segundos en ms, para obtenerlos se divide el
        residuo entre la conversión de ms a segundos*/
        seconds= ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

        $countDown.innerHTML = `<h3>Faltan: ${days} días; ${hours} horas; 
        ${minutes} minutos; ${seconds} segundos.</h3>`;

        if (limitTime <= 0){
            clearInterval(countDownTemp);
            $countDown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    }, 1000);
}