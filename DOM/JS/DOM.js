import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj_digital.js";
import { shortCuts, moveBall } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopBtn from "./boton_scroll.js";
import darkTheme from "./dark_mode.js";
import responsiveMedia from "./responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGiolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./lector_de_voz.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("../assets/spider_man.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("count-down", "Mar 25, 2024 3:34:25", "Feliz Cumpleaños, guapa!");
    scrollTopBtn(".scroll-top-btn");    
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/6NXnxTNIWkc?si=Gg6iwBvgek0DehS-">Ver vídeo</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/ol0E-vZsd2w?si=uc9dq4qJmqI4ajkF&amp;controls=0" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", 
    `<a href="https://maps.app.goo.gl/qGqKHnfPTdp3JutT9">Ver mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8957877564903!2d-100.99541062475669!3d25.441747377554417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86886d59eb5bc4d3%3A0x60771ba46d37358c!2sInstituto%20Tecnol%C3%B3gico%20de%20Saltillo!5e0!3m2!1ses-419!2smx!4v1699666532486!5m2!1ses-419!2smx" 
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGiolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e)=>{
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
})
 //Utilizan el evento DOMContentLoaded dentro de la función
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();

