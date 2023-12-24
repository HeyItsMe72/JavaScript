# JavaScript Ejercicios Básicos
Los ejercicios #básicos incluyen el uso de funciones, métodos, uso de variables, instancias, etc. 
Cada ejercicio básico comienza con un comentario que describe brevemente lo que se busca hacer en cada ejercicio. 
Son, básicamente, ejercicios de lógica de programación. 

# Todos los ejercicios incluyen validaciones básicas de los datos que pueden ser ingresados a las funciones. En caso de que sean incorrectos se mandan alertas o errores a la consola. 
# Es esta, probablemente, la parte más larga del ejercicio.

# Ejercicios 1.x 
# Estos ejercicios están orientados al manejo de los métodos y propiedades de las string (cadenas de texto). 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente: 
1. Programar una función que cuente el número de caracteres de una cadena de texto.
2. Programar una función que devuelva el texto recortado según el número de caracteres indicado. pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3. Programar una función que dada una string te devuelva un array de textos separados por cierto caracter: pe. miFuncion("hola que tal", " ") devolverá ["hola", "que", "tal"].
4. Programar una función que repita un texto X veces. pe. miFuncion("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

# Ejercicios 2.x
# Estos ejercicios están orientados al manejo de los métodos y propiedades de las string (cadenas de texto) y arrays (listas). 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
5. Programar una función que invierta las palabras de una cadena de texto.
6. Programar una función para contar el número de veces que se repite una palabra dentro d eun texto largo.
7. Programar una función que valide si una palabra o frase dada es un palíndromo (se lee igual al derecho que al inverso, pe. Ana).
8. Programar una función que elimine cierto patrón de caracteres de un texto dado.

# Ejercicios 3.x
# Estos ejercicios están orientados al manejo de los métodos y propiedades de los arrays (listas), así como del objeto Math. 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
9. Programar una función que obtenga un número aleatorio entre 501 y 600.
10. Programar una función que reciba un número y evalúe si es capicúa o no (es leído de igual forma en un sentido que en otro pe. 33).
11. Programar una función que calcule el factorial de un número. El factorial de un entero positivo se define como el producto de todos los numeros enteros positivos desde 1 hasta n, donde n es el número en cuestión.

# Ejercicios 4.x 
# Estos ejercicios están orientados al manejo de los métodos y propiedades del objeto Math, así como el uso de condicionales y operadores artiméticos. 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
12. Programar una función que determine si un número es primo (aquel que sólo es divisible entre sí mismo y 1) o no.
13. Programar una función que determine si un número es par o impar.
14. Programar una función para convertir °C a °F y viceversa.

# Ejercicios 5.x
# Estos ejercicios están orientados al manejo de los métodos y propiedades del objeto Math, así como el uso de condicionales y operadores artiméticos, así como el objeto Date. 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
15. Programar una función para convertir números de base binaria a decimal y viceversa. pe. miFuncion(100, 2) 100 en base binaria equivale a 4 en base decimal.
16. Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada: miFuncion(1000, 20) devuelve 800.
17. Programar una función que dada una fecha válida, determine cuántos años han pasado hasta el día de hoy.

# Ejercicios 6.x
# Estos ejercicios están orientados al manejo de las Expresios Regulares (RegExp). 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
18. Programar una función que dada una cadena de texto cuente el número de vocales y constantes.
19. Programar una función que valide que un texto sea un nombre válido.
20. Programar una función que valide que un texto sea un email válido.

# Ejercicios 7.x
# Estos ejercicios están orientados al manejo de los métodos y propiedades del objeto Math y arrays, así como el uso de condicionales y operadores artiméticos. 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
21. Programar una función que dado un array numérico devuelva otro array con los números elevados al cuadrado.
22. Programar una función que dado un array devuelva el número más alto y el más bajo de dicho array.
23. Programar una función que dado un array de números devuelva un objeto con dos arreglos. En el primero almacena los npumeros pares y en el segundo los impares.

# Ejercicios 8.x
# Estos ejercicios están orientados al manejo de los métodos y propiedades del objeto Math, así como el uso de condicionales y operadores artiméticos. 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
24. Programar una función que dado un arreglo de números devuelva un objeto con dos arreglos: el primero tendrá los números ordenados en forma ascendente y el segundo de forma descendente.
25. Programar una función que dado un arreglo de elementos, elimine los duplicados.
26. Programar una función que dado un arreglo de números, obtengan el promedio.

# Ejercicios 9.x
# Estos ejercicios están orientados al manejo de los métodos y propiedades del objeto Math, así como el uso de condicionales y operadores artiméticos. 
# En el nombre de cada ejercicio, la x representa el dígito después del punto y corresponde a un número de la lista siguiente:
27. Programar una clase llamada Película. La clase recibe un objeto al momemtno de instanciarse con los datos:
    * id de la película,
    * título,
    * director,
    * año de estreno,
    * país o países de origen,
    * géneros,
    * calificación en IMBD
    # Validaciones:
    - Valida que el id tenga 9 caracteres. Los primeros 2 sean letras y los 7 restantes números.
    - El título no rebase los 100 caracteres.
    - El director no rebase los 50 caracteres.
    - El año de estreno sea un número de 4 dígitos.
   

    - País o países sean introducidos en forma de arreglo.
    - Géneros sea introducido en forma de arreglo y sean válidos dentro de los géneros aceptados.
    - La calificación sea un número entre 0 y 10 (acepta decimales).
    # Además:
    - Crear un método que devuelva toda la ficha técnica.
    - Generar 3 instancias e imprimir la ficha técnica de cada una.
   
# JavaScript Ejercicios DOM 
Los ejercicios del DOM están orientados ene el aprendiza y uso de las API's que nos ofrece el navegador. Son ejercicios más elaborados en cuestión de manejo y flujo de eventos, temporizadores, callbacks, 
iteradores, el objeto this, conocimiento general del DOM, como crear y modificar elementos HTML, manejo de data attributes. Implican un conocimiento general del documente, window y navigator. 

# Todos los ejercicios son nombrados a lo que contienen. 
Se realizó un documento HTML general llamado DOM.html en el que se muestra el funciona cada ejercicio. Hay que tomar en cuenta que no todos los ejercicios realizados tienen una sección en sí dentro del body
pero sí todos son interactivos con el documento. 
En el archivo DOM.js se encuentran todas las funciones importadas que hacen al documento DOM.html funcionar correctamente. Dentro de él se encuentran tres secciones en las que son invovadas:
* A la carga del documento (DOMContentLoaded)
* Cuando ocurre un evento de teclado (keydown)
* Cuando son simplemente invocadas. En este caso, ocurre de este modo ya que son funciones especiales que dentro de su misma ejecución implica el DOMContentLoaded.

El resto de los archivos JS encontrados dentro de la carpeta DOM son los archivos que exportan las funciones. Ninguno de estos tiene una breviación de lo que se busca hacer en cada uno, más que el nombre. 
Todas las variables usadas están definidas en inglés y existen (en algunos casos) comentarios que puedan llegar a explicar el código que pueda ser confuso. Así mismo, se incluye un único archivo CSS que
se utilizo para dar los estilos necesarios al documento, nada exagerado y sin adentrarse mucho a este. Todos los estilos están separados por etiquetas de comentarios al ejercicio que corresponden.
# Es importante señalar que todos los ejercicios hechos aquí son REUTILIZABLES. 
Basta con utilizar los mismo indicadores HTML (si es que aplican) para su correcto funcionamiento.

En todo caso, se hace aquí una breve reseña de lo que se hizo en cada ejercicio para aquellos que aún estén conociendo al lenguaje: 

# menu_hamburguesa.js
Realizar un botón hamburguesa que al dar click despliega un menú de secciones. 
Este menú sólo es visible para una dimensión menor a 1024px. Está hecho para mejorar la navegación en dispositivos móviles. 

# reloj_digital.js
Realizar un reloj digital y alarma sonora. 
Aquí se involucra el uso de temporizadores y la etiqueta de audio en HTML. Involucra 4 botones: 
- Iniciar reloj: una vez iniciado, el boton se deshabilita, para evitar una sobre carga de la memoria.
- Detener reloj: al pulsar, el reloj desaparece, sustituído por la leyenda "Reloj Desactivado". El botón de inicio se vuelve a habilitar.
- Activar alarma:al pulsar, comienza a sonar una alarma cuya fuente puede ser cambiada en el código HTML. Al iniciarse, el botón queda deshabilitado.
- Desactivar alamra: detiene el sonido de la alarma o impide que esta comience a sonar. A su vez, habilita el botón de activación.

# teclado.js 
Realizar atajos del teclado, crear un moveBall. 
Se consideran 3 atajos únicamente: 
- Alt a: lanza una alerta.
- Alt c: lanza una confirmación.
- Alt p: lanza un aviso.

Además, se crea un moveBall que maneja los eventos del teclado correspondientes a las flechas de movimiento. Cuando la bola en movimiento se encuentra en la orilla del área permitida para moverse, 
las flechas vuelven a tener su comportamiento por default. 

# cuenta_regresiva.js
La cuenta regresiva acepta sólo formatos de fecha válidos para JS. Muestra un countdown de días, horas, minutos y segundos. Cuando el reloj llega a cero puede mostrar un mensaje personalizado. 

# boton_scroll.js
Este botón aparece únicamente cuando la barra de navegación se ha desplazado hacia más de 500 pixeles. Al dar click, lleva al usuario de nuevo al top del documento. 

# dark_mode.js 
Este botón hace un cambio en las clases de CSS permitiendo que el sitio aplique una apariencia diferente cuando se pulsa. En el caso de aparecer la luna, se convierte a un sitio oscuro; al ser oscuro el
botón tiene un sol que al pulsarlo, ilumina el sitio con colores claros. Utiliza el localStorage para almacenar la última decisión del usuario y de esta manera, en la próxima visita, mantenga esta 
apariencia. 

# responsive.js
Se trata de una función en la que, de acuerdo al medio en el que visites el sitio, se muestra el contenido apropiado para evitar la descarga innecesaria de archivos. 
En este caso, se muestran dos iframes, una de youtube y otra de maps. En caso de que el usuario haga la visita por medio de su celular, se muestra un link de visita a estos sitios. 
De otro modo, se muestra el iframe por completo. 

# prueba_responsive.js
Se trata de un responsive tester en el que dada una URL y las medidas indicadas de ancho y alto, se abre una nueva ventana el sitio. Al dar click en cerrar, la venta se cierra.
Este último comportamiento puede ser o no soportado por ciertas páginas URL. De igual forma, cada ventana abierta mantiene su propio botón de cerrar. 

# detección_dispositivos.js
Permite detectar el dispositivo por el cual es visitado el sitio (User Agent), incluyendo la plataforma y el navegador utilizado. De esta forma nos permite generar contenido exclusivo para ciertos navegadores, 
plataformas o sistemas operativos utilizados. 

# deteccion_red.js
Permite detectar la conexión a internet del usuario. En caso de que la conexión falle, mostrará un mensaje de "Conexión Perdida" en un rectángulo rojo al inicio de su pantalla. Cuando la conexión se 
reestablezca, el mensaje cambiará a verde con la leyenda "Conexión Reestablecida". Cada mensaje tiene una duración en pantalla de 3 segundos. 

# deteccion_webcam.js
Permite detectar la cámara y micrófono del usuario. Si los permisos son aceptados, se mostrará la imagen en vivo de la cámara, si no, se mostrará el mensaje de error. 

# geolocalización.js
Permite acceder a la ubicación actual del usuario. La precisión puede varia y también es mostrada en la impresión. También cuenta con un enlace que lo lleva a ver la ubicación detectada a travpes de 
Google Maps. 

# filtro_busqueda.js
Permite buscar coinicidencia entre un conjunto de elementos que contengan una etqieuta. Las coincidencias son buscadas mediante la etiqueta y el contenido de búsqueda. 

# sorteo.js
No importa la cantidad de participantes, todos son obtenidos en base al selector (clase), se les asign aun número random en base a la cantidad de participantes y se cosnigue en base a este número, 
el índice de la lista de participantes. 

# carrusel.js
Este es un slider responsivo. Se le asigna un listener a cada botón y en base a etse, se añade o remueven la clase "active" que determina la imagen o contenido que será visualizado. 
Se utiliza un contador para controlar el inicio y fin de los elementos del carrusel. 

# scroll_espia.js
Se trata de un scrop vigilante o ScrollSpy. Reacciona en conjunto con el menú lateral, cada vez que una sección es visitada, la sección sel menú es iluminada. 

# video_inteligente.js
En este apartado, se pueden tener cuántos vídeos se deseen. Estos se reproducirán en automático cuando se encuentren en la sección correspondiente y se pausarán cuando se cambie de sección o de pestaña.
El audio está desactivado por default. Se utiliza el IntersectionObserver para saber cuándo se está o no intersectando, utilizando la propiedad .isIntersecting. Además, se añade a la pestaña uin listener 
con el evento "visibilityChange". 

# validaciones_formulario.js
Se trata de validaciones sencillas utilizando HTML. En caso de que las validaciones de los campos requeridos no estén correctas, aparecerá un recuadro con las características que campo debe cubrir para ser
resuelta. Además, cualquier campo requerido será mostrado en un recuadro rojo. Cuando sea validados este color cambia a verde. El formulario nunca podrá ser procesado hasta que se validen todos los campos
requeridos. 

# lector_de_voz.js
Es un lector de voz que dado un mensaje y seleccionado una voz proporcionada por el navegador, se lee en audio el texto. Se añade un evento a la carga del DOM en el que el speechSynthesis se le añada un 
listener "voicesChanged" en el que se debe almacenar las voces disponibles. Por cada voz encontrada se debe crear una nueva opción que contenga el nombre e idioma de la voz. Cada opción debe ser añadida
al selector. Se asigna la voz al speech que coincida con la del selector. Se debe asignar un evento click al botón de leer en el que el contenido del mensaje sea el que se encuentra en el textarea y 
finalmente se indica al speech el mensaje que deberá leer. 

# JavaScript AJAX - CRUD
Se realiza un CRUD con cada tipo de petición: 
* crud_ajax.html -> XMLHtttpRequest
* crud_axios.html -> Axios, Async - Await
* crud_fetch.html -> Fetch, Async - Await
  Además, se agrega un documento db.json a fin de simularlo como un API local y el cuál será el modificado por los documentos CRUD.
  Todos los ejercicios se encuentran en el archivo html, es decir, que el código JavaScript será encontrado al final del body bajo las etiquetas <script>. De igual forma ocurre con los estilos CSS usados.
  Todos los estilos se encuentran en el head, bajo la etiqueta <style>.

# crud_ajax.html 
En este programa, todos los pasos para crear una petición ajax se encuentran encapsulados en la función expresada "ajax" cuyo parámetro son la destructuración de options, por tanto, para una correcta ejecución se debe recibir un objeto con: url, method, success, error, data al momento de llamar la función. Esto ocurre cuando se consultan todos los datos con la función expresada "getAll". Debe observarse que al tratarse de una consulta el objeto data es nulo y la información es mostrada al usuario por la técnica de template. La función "getAll" es ejecutada a la carga del documento. 

Nota: es importante recordar que para la ejecución de este conjunto de archivos, se debe tener instalado node.js en conjunto con json-server y levantar el archivo db.json en el servidor local. 

La ejecución del submit del formulario para agregar un nuevo usuario crea una petición ajax de tipo POST, lo que permitirá agregar un nuevo usuario al db.json con los datos que mantenga la propiedad data del objeto de opciones. En caso de éxito, la página debe ser recargada para mostrar el nuevo elemento en la impresión de los usuarios. 

Por otro lado, para editar (update) o eliminar (delete) usuarios, las peticiones ajax son ejecutadas cuando se da click al botón respectivo de cada acción. Es importante resaltar que la ruta a la que se haga la petición dependerá del id del usuario que se desee modificar o eliminar. 

Nota: tome en cuenta que el proceso de petición en cada archivo y la forma de modificar los datos (básicamente el algoritmo de programación) es el mismo para los tres casos presentados, simplemente se respetan las comodidades y necesidades de cada método para su ejecución. 
Por ejemplo, a diferencia de XMLHttpRequest, el método axios nos brinda la respuesta en formato json por autómatico, por lo que no es necesario hacer la conversión. Esta y que a diferencia de la anterior, esta metodología es útil con funciones asíncronas y try-catch. Sin embargo, al revisar el código la metodología es simplemente la misma. 
Lo mismo ocurre con crud_fetch.html, siguen la misma metodología para la aplicación CRUD, pero a diferencia de los métodos anteriores, fetch trae consigo el método .json() capaz de convertir la respuesta en este formato, además de throw que permite guiar el flujo de la función hacia el catch en caso de que puedan existir errores. En esta metodología con fetch, también se vio el uso de funciones asíncronas a fin de cargar toda la información correctamente y evitar el rompimiento del código en su ejecución. Además, fetch permite enviar a la petición como segundo parámetro un objeto de options en donde se específican las cabeceras, el método CRUD y la data (body), en este caso, los datos deben ser convertivos a formato json utilizando el método stringify.

# JavaScript Ejercicios Ajax - APIs
Todos estos ejercicios están hechos principalmente en html. Debe notarse que la programación javascrip se encuentra dentro de las etiquetas <scrip> al termino del body. 

# sitio-ajax.html
A fin de generar un sitio single page dinámico, se utilizan las peticiones XMLHttpRequest para sustituir el contenido en la etiqueta <main>, pues en este html los únicos contenidos constantes son la barra de navegación y el footer. Los archivos que son llamados en las peticiones para susutituir el contenido correspondiente en la etiqueta main están almacenados en la subcarpeta assets: home.html, acerca.html, servicios.html y contacto.html 

# include-html.html
A diferencia del ejercicio anterior, en este el html principal se mantiene casi vacío, pues se buscar hacer una sustitución total de las secciones, no sólo un relleno de etiquetas. Para empezar, ya que se necesita que al cargar el contenido, se obtengan las rutas de todos los archivos que serán agregados, en este caso se hace útil el atributo data-include, el cual genera la ruta para poder cargar el header y el footer. Esto viene realizado en el archivo include-html.js 
Una vez que este contenido ha cargado y se ejecuta nuevamente el evento DOMContentLoaded, la lógica es prácticamente la misma al ejercicio anterior, sustituyendo el contenido de la etiqueta <main>. 
Los archivos necesarios para la carga del header y el footer al inicio del documento, se encuentran en la subcarpeta assets: header.html, footer.html e include-html.js

NOTA: Cada elemento que quiera sustituirse (bajo cualquier etiqueta válida del html) se puede realizar con el data-include cuyo valor debe ser la url del archivo sustituto. 
En include-html.js, por cada data-include encontrado se ejectura la función includeHTML(), la cual incluye todos los pasos para un XMLHttpRequest. 

# uploader.html
Este archivo utiliza php para la manipulación y almacenamiento del archivo en el "servidor" utilizando la función move_upload_file. Por tanto, el archivo debe ser ejecutado en el localhost XAMPP. 
En el código javascript, además de crear el XMLHttpRequest y sus pasos de petición, se crea un form virtual, esto a fin de enviar la información del archivo subido al php, todo esto es ejecutado en la función expresada "uploader".
Por otra parte, la función progressUpload, permite que, por cada archivo subido, se cree una barra de progreso y un span que indique el nombre y el progreso en porcentaje. De igual modo, para lograr el objetivo, se crea un fileReader que permita leer el total del peso y el avance de cada archivo. Se le añade un listener al fileReader capaz de definir el progreso. 
Cuando el archivo termine de ser cargado, el evento "loadend" es lanzado, permitiendo limpiar la pantalla (haciendo uso del setTimeout) y ejecuta la función uploader, permitiendo dirigir los archivos subidos al "servidor". 

# uploader-drag-drop.html 
Existen algunas diferencias entre este ejercico y el anterior, sin embargo, las modificaciones no son implicadas directamente en las funciones que nos permitían subir el archivo al "servidor" ni la impresión de las barras de progreso. Las modificaciones comienzan con la eliminación del input y sustitución por un área de arrastre (clase drop-zone). Para realizar el ejercicio, se utiliza el API drag and drop de los navegadores. 

Se utilizan los siguientes eventos a fin de dar estilos a la drop-zone cual se detectan los archivos: 
 - dragover: detecta cuando se arrastra un archivo sobre el área.
 - dragleave: detecta cuando el archivo ha salido del área de arrastre.
 - drop: detecta cuando el archivo se ha soltado.
El evento drop arroja un objeto entre cuyas propiedades se incluye dataTransfer.files, con esta propiedad se hacen las barras de progreso y se carga el archivo. 

NOTA: No se utiliza la delegación de eventos porque se busca que sólo un área específica sea la apropiada. 

# contact-form.html 
Para realizar este ejercicio, se reutilizó el form hecho en los ejercicios del DOM (validaciones_formulario.js). En este ejercicio del DOM, se utilizó el "tras bambalinas" de todo el proceso de formSubmit, pero ahora se utilizó su API, a fin de evitar el captcha que generaba el formsubmit. 
Para realizar la petición se utilizó fetch, que básicamente se divide en lo siguiente: 
 - fecth(urlPeticion, options)
 - then(validación de la respuesta)
 - then(manejo de la respuesta)
 - catch(manejo de los errores) 
En este ejercicio, nuevamente se hace uso del loader.png, cuando el email es enviado, el loader desaparece y en su lugar el usuario visualiza un mensaje de éxito o error.

# contact-form-php.html, send-mail.php 
Este ejercicio se ejecuta utilizando el mismo formulario del ejercicio del DOM. A diferencia del anterior, este busca tener mayor interacción backend utilizando PHP, evitando utilizar el API de formSubmit. 
PHP: 
   La ejecución de todo el programa está condicionada a que exista la petición $_POST (es decir, se ejecute el submit del formulario). 
   1. Todas las variables del formulario son llevadas a variables PHP para facilitar la concatenación. PHP maneja un objeto S_SERVER en donde se almacenan varias propiedades del servidor, en este caso se accede a HTTP_HOST que sirve para acceder al dominio de donde se hace el envío del formulario.
   2. La función mail() es la que ejecuta PHP para hacer envío email. Las cabeceras sirven para modificar la respuesta del servidor y que no lleguen en texto plano. La ejecución (o no) de mail() lanzará un true or false, según sea el caso:
      * Si la respuesta es true, se mando un objeto a la consola y un mensaje de éxito a la pantalla del usuario.
      * Si la repsuesta es false, ocurre el mismo efecto con un mensaje distinto.
# CORS 
Para que el intercambio de emails entre servidores distintos funcione, se deben seguir reglas del CORS. Para esto, se utiliza en JavaScript, en el objeto de options, la propiedad "mode: cors". Esto permite que se de el intercambio de información entre distintos servidores. Además, esto debe expresarse en el php, añadiendo la cabecera: header("Access-Control-Allow-Origin": *); esto permite que cualquier tipo de dominio pueda realizar pedidos al servidor. Puede modificarse específicando el servidor o servidores de los cuales se permiten las peticiones.

# stripe-checkout.html, stripe-checkout.js, stripe-keys.js 
Este es el primer ejercicio en el que se interactúa tanto con un api externa (no propia de los navegadores). Por lo que se sugiere: -Revisar la documentación de la API Stripe- 
Para comenzar, todas las transacciones serían hechas fuera del sitio principal (el que creamos) y serán hechas y validadas por stripe. Stripe en escencia necesita de dos url: dirección en caso de éxito y en caso de error. 
Para comenzar a utilizar esta API es necesario conocer que primero se necesita tener una cuenta en stripe y a su vez, tener productos o servicios en la cuenta. Stripe te genera dos llaves: la pública y privada. Estas llaves son necesarias para poder acceder a los productos que ofreces y que las transacciones puedan ser realizadas. 
Por cada producto y precio dado al producto, se genera un id que nos permitirá identificarlo y acceder a él. 

Para mostrar los productos que nuestra cuenta ofrece, se utiliza la técnica de templates, a fin de hacer una única inserción al DOM y ahorrar memoria. 
Se debe tomar en cuenta que el api que accede a los productos, no arroja el precio en su objeto de respuesta, por lo que se debe consultar el api de precios y enlazar ambos a través del id del prodcuto. 
Para evitar realizar una petición fetch tras otra, se utiliza el método .promiseAll(), el cual contiene todas las promesas; cuando estas sean devueltas arrojará un sólo objeto único. 

Es importante que en este, como en cualquier otro uso de APIs, es importante revisar su forma de uso, sus endpoints y, por supuesto, explorar su objeto de respuesta json. Esto nos facilitará la forma de acceder a la información que cada API nos proporciona y manipular los datos como mejor nos convenga, por esto es que se señala: 
 - Para que el precio se muestre correctamente, debe modificarse el string que proviene de unit_amount_decimal, utilizando el método slice.
   
Finalmente, el evento de redireccionamiento, debe ser realizado fuera de las promesas. De este modo, al dar click en la compra de cualquiera de nuestros productos, se invoca a srtipe. En esta sección del programa, debe entenderse que no se hace más que seguir la documentación de stripe. 

# blog-markdown.html 
NOTA: la programación de este documento da por hecho que ya se tiene un archivo de extensión .md (markdown) a fin de que pueda ser utilizado y renderizado a html. 
Markdown es un lenguaje de marcado de texto que sirve para facilitar la escritura del contenido html de los sitios, sobre todo los de tipo blog. 
Showdown es una librería que permite compilar los archivos markdown a etiquetas de html para que sea renderizado en el navegador. 
1. Descargar la librería o llamar el cdn de showdown (esto último fue lo que se hizo en el archivo).
2. realizar el request fetch al archivo markdown.

# api-pokemon.html 
NOTA: REVISAR DOCUMENTACION DEL API PARA MAS INFORMACION. 
El API de pokemon devuelve en cada consulta 20 resultados con el link de los siguientes 20 resultados (next) y los 20 anteriores (previous, de aplicar). Además, por cada uno se puede obtener el nombre, poderes, apariciones, etc., utilizando el ide del pokemon en el url. 
Ya que cada pokemon es mostrado, se utilizan funciones asíncronas capaces de esperar la respuesta de cada pokemon. Además, se utiliza un ciclo for que es hasta cierto grado, bloqueante; no ejecutará el siguiente ciclo hasta que el anterior se haya completado. Este es un comportamiento que no está en forEach().

Después d eincluir a main el contenido del template (los pokemons), damos el valor a $prevLink y $nextLink; al dar click en siguiente o antes, se debe ejecutar la función asíncrona con la url correspondiente, según el contenido. 

# api-tv-shows.html 
Este es un archivo que genera un buscador de programas de televisión de estados unidos utilizando el api de TV Maze. 
Es importante revisar la documentación de las APIs. este código se extiende porque hay posibilidades de que en su respuesta, no existan propiedades que son utilizadas (image, description), y de ser así, el código se rompe. Además, si no existen coincidencias de búsqueda, el api arroja un objeto vacío, pero no errores. En este programa se utilizan operadores ternarios para validar y asegurar el contenido del template. 
1. Obtener del DOM el espacio para $shows, $template y el $fragmento.
2. Añadir el listener. Todas las consultas serán hechas cuando la tecla "enter" haya sido presionada.

# api-canciones.html 
Aunque las APIs utilizadas en este ejercicio ya no se encuentran disponibles (consultar documentación) es un buen ejercicio para practicar. 
Toda la programación es ejecutada cuando se realiza el submit del form. Al utilizar dos apis distintas, se utiliza la destructuración, ya que no se sabe cuál responderá primero; tambiém se utilizan funciones asíncronas.

# selects-anidados.html
En este ejercicio, se utiliza un API de COPOMEX. Ya que está limitada a 50 consultas, se ha realizado con los endpoints de prueba proporcionados por la documentación. Una vez realizado el ejercicio, se puede cambiar el token de prueba por el token de usuario. 
En el html se hacen los selectores de Estado, Municipio y C.P. 
La función de cargar estado será ejecutada al cargar el documento. Cargar los municipios dependerá de lo que se seleccione en estado. Finalmente, el c.P. cargará cuando el municipio sea elegido. 

# wp-api-rest.html 
WordPress tiene un api para desarrolladores que permite acceder (de ser posible) al frontend de los sitios creados en él. En la documentación se explican los endpoints. 
La petición fetch lanza el json utilizando /wp-json/endpoint. El json lanza información del sitio, como los namespaces, referidos a los plugins instalados en el sitio, título, y el root, que son todos los accesos que ofrece el sitio para obtener información. 

A fin de simplificar las peticiones fetch, se crean variables que dependiendo del endpoint se genera la URL. Se crean 2 funciones: getSiteData y getPosts. La primera funciona para traer los datos del sitio web, como el nombre, descripción, url, etc., e imprimirlos en la pantalla. La respuesta deber ser convertida a json a fin de poder acceder a sus datos.

Utilizar ?_embed en la petición de la consulta POSTS, permite que la api regrese información más extensa.
Se comienza a hacer el llenado del template en la función getPosts(). Por cada elemento traído del json, se imprime la imagen y título. 
Se debe recordar que para acceder a los elementos, además de la notación punto, existe el método de corchetes, accediendo a ellos como si se tratara de un array. 

Hay que recordar que al utilizar la técnica de templates, se debe clonar el nodo y este clon añadirlo como hijo al fragmento del DOM. Finalmente, hacer una única inserción del fragmento. 

Se continua con la carga de información, todo se basa en seguir la ruta de la API en json y llevarl al DOM por medio del template. Para el caso de las categorías y los tags, se utilizó un .forEach en el que cada elemento se agrega a lo que ya se tenía en la varibale, esto a modo de list item (li). Finalmente, al tener el forEach completo, se agrega al selector del template correcto. 
Para saber qué ruta del elemento (endpoint del api) seguir, es importante revisar la estructura del json. 

Para realizar el efecto del scroll infinito, hay que tomar en cuenta 2 consideraciones: el evento "scroll" y el API. En el caso del API de WordPress, navegar entre los resultados puede resolverse con los atributos page y per_page. Estos atributos señalan la ágina y la cantidad de resultados mostrados por página, por lo que deben ser agregados a la url de la petición fetch. La forma de editar cada variable (page & perPage) radica en la primera consideración: el scroll. 

Este evento es asignado al window y se destructuran 3 propiedades: 
   - scrollTop: distancia desde el top hasta el scroll navegado.
   - scrollHeight: distancia desde el top al final del HTML.
   - clientHeight: distancia total de la pantalla visible del cliente.
Cuando la suma del scrollTop con el clientHeight sea superior o igual al scrollHeight, debe pasar lo siguiente:
   * Aumentar el número de page para poder hacer el cambio de página.
   * Invocar la función que permite la petición fetch y la carga del contenido dinámico.
Al cambiar el valor de page, la ruta url de fetch se actualiza y el nuevo contenido es cargado.

# JavaScript SPA - Single Page Application
En un SPA se tienen vistas, pero no páginas. Por usabilidad, es una buena práctica hacer el "cambio" de rutas en el URL entre cada navegación de las vistas. Los cambios pueden ser usados gracias al "hash" ("#") de las URL. En los URL el "?" significa un paso de variables. 

Las SPA se programan en JS y las tecnologías backend son irrelevantes (no importa cuál sea usada). En este caso, para el desarrollo de estos ejercicios, el "backend" utilizado es el API de Wordpress, del sitio de Malvestida. Pero se puede replicar para cualquier otro sitio al que se tenga acceso, elaborado con Wordpress. 

Los componentes principales son los más sencillos de entender: 
# index.html 
Aquí se genera la maquetación en donde nuestro contenido de vistas cargará dinámicamente. Como se observa, sólo se trata de un único archivo HTML, es el sentido de un SPA. Es bastante sencillo y la mayoría del contenido se encuentra en el header, para importaciones de hoja de estilos CSS (style.css) y los archivos script que a continuación se explican: 

# index.js 
Es el archivo script único que aparece importado en el index.html, da estructuración a todos nuestros archivos de código JS, importando únicamente dos archivos: app.js y wp_api.js
En el archivo se notan dos escuchadores de eventos, el primero sirve para hacer la carga del documento mediante el archivo app.js (que adelante se explica) y el segundo es un evento que ayudará a la función de scroll infinito y al cambio del "#" permitiendo que el contenido correspondiente a la vista sea cargado. 

# app.js 
Este archivo contiene la función App la cual nos permite hacer las cargas de las vistas correspondientes al index.html, utilizando los componentes que se exponen a continuación. Es básicamente, donde se agregan los hijos al html: header, main y loader, el cual es utilizado hasta que la información de la API esté lista para ser mostrada. 
La línea $root.innerHTML = null; permite limpiar la vista antes de hacer la carga de la siguiente navegación, de forma que no se sobreescriba el contenido de Header, pues se debe recordar que la función app es ejecutada cada vez que el "#" cambia, a fin de mostrar el contenido perteneciente a esa ruta. 

En la carpeta de helpers se encuentran archivos que facilitan la ejecución de una función que es repetitiva pero que no tiene relevancia en lo que el usuario debería ver. Aquí se encuentran: 

# wp_api.js - Helper de conexión a API_REST
A fin de simplificar la conexión al backend (WP API), se definen las contantes con la ruta de cada endpoint utilizado en la aplicación. Se exportan por defecto en forma de objeto. 

# ajax.js - Helper de peticiones AJAX 
Esta función nos permite simplificar las peticiones y evitar crear una estructura fetch por cada consulta. Se crea la función ajax permitiendo generar las consultas con s+ólo brindar el URL y el callback para manejar la respuesta en caso de éxito (dependiendo del endpoint al que se acceda). Se utiliza la destructuración para asignar las propiedades que será utilizadas como parámetro a la función. A la callback de éxito se le pasa como parámetro la respuesta de la API ya en formato JSON. 

# infinite_scroll.js - High Order Component 
La aplicación de este infinite scroll tiene la misma lógica que el de la sección de wp API de los ejercciios AJAX. 

Se comienza con el wp_api.js, indicando en el endpoint de POST y SEARCH, la cantidad de resultados por página. Además, se localiza la variable page = 1 a fin de que pueda aumentarse la carga de más resultados, incrementando la variable en uno por fin de scroll. 
En el index.js se aprecia la variable page = 1, para asegurar que al cambiar el "#", se reinicia el valor de la página y muestre los resultados dependiendo de la locación. 

En app.js la función infiniteScrool debe ser ejecutada cuando el DOM sea cargado, pero ya que App() es la función ejecutada en este evento, es que infiniteScroll debe ser llamda en App(). 

En infinite_scroll.js es donde se encuentra toda la lógica para que funciones. Se utiliza la variable "Component" como un componente de orden superior (High Order Component), a fin de cambiar su estructura dependiendo de la ruta del "#", esto se logra igualándolo a cada función ya sea para un post o para una búsqueda. De esta forma, cuando la petición ajax sea ejecutada, tomará y manejará el objeto JSON recibido según el condicional en el que Component haya sido definido. 

Finalmente, el contenido es insertado al main del index.html 
NOTA: insertAdjacentHTML se utiliza a fin de no reescribir lo que ya contenía la variable html (es decir, los resultados anteriores ya mostrados) y sólo añadir los nuevos (correspondiente a una nueva petición ajax en una página más: page++). 

# Title.js, Loader.js - Primeros componentes de UI 
La función Title() modifica el h1 y lo retorna; se utilizan las variables de los endpoints utilizados en wp_api.js para que se pueda consultar a cualquier página elaborada en WP. 
Mientras que la funcipon Loader simplemente crea una imagen añadiendo la ruta y el alternativo. Ya que ambas funciones utilizan el método createElement, para que sean utilizadas se deben importar en App.js y agregar el nodo al root. 

# SearchForm.js, Menu.js, Header.js - Componente Header 
Los primeros dos archivos sirven únicamente para crear el contenido dinámico del header. Hay que tomar en cuenta que el método "appendChild" crea todo un nodo al final del último hijo. Por tanto, al crear el searchForm y el menu, se utiliza el método createElement y se retorna la variable donde el elemento ha sido creado. Este contenido deberá ser cargado en el documento Header.js, función que a su vez, retorna el header completo que se agregado en la ejecución de App.js 

Sirve para crear el form dinámico, además inicia los eventos permitiendo añadir o remover la variable wpSearch del localStorage. Además, permite modificar el URL añadiendo al # la búsqueda del usuario (el valor del input). 

# Main.js, PostCard.js - Renderizado dinámico 
La función de Main permite crear una sección main vacía en el index.html en donde cada post será almacenado. La funcipón PostCard será la encargada de crear cada artículo y destructurar sus propiedades de modo que se pueda utilizar para crear el post. Accede a la URL de las imágenes, el título del Post y la fecha de publicación, así como el contenido de la nota. 

# Router.js - Enrutamiento 
En este archivo se hacen las peticiones ajax que permiten acceder a los posts. Se hace uso de if- else if - else para identificar: 
   * Si la locación actual es home (# o no #).
   * Si el # de la locación actual es el buscador ("#/search"), ya que se debe pasar el query del cliente. Esto hace que no sea estática y se utiliza el método .includes().
   * Si el # no corresponde a ningún caso anterior (ningún url controlable). En este caso recaen los posts a los que se accede bajo "Ver publicación".
Sirve para generar las peticiones ajax, de forma que se puedan obtener los arreglos de las coincidencias y manipular la información obtenidda (cbSuccess).

# Post.js - Vista del post actual 
En la función Posts se destructuran las propiedades que el contenido innerHTML utilizará para plasmar la información en pantalla. Esta función es ejecutada en el Router; para hacer la petición se utiliza el slug, a fin de obtener un único arreglo que pertenece al post seleccionado. De esta forma, cuando la petición es exitosa, el json obtenido es parametrizado con la función Post, que será la encargada de plasmar la información.

NOTA: A fin de optimizar el código, se utilizan funciones asíncronas en Router.js y ajax.js, de esta forma el código esperará a que la petición sea realizada y se plasmará el contenido adecuado según el enrutamiento. 

# SearchCard.js - Vista de la búsqueda actual 
Ya que se han realizado las peticiones, se deben imprimir en pantalla los resultados. La función SearchCard permite destructurar las propiedades del objeto arrojado por la petición ajax, retorna el escrito html que permite darle estructura a cada resultado de búsqueda. 

En su parte, main agrega un condicional en que todas aquellas rutas han sido diferentes del #/search se mostrarán en formato grid. 
Es en Router.js donde se aplica la vista. Si el objeto arrojado al realizar la búsqueda está vacío, se lanza un error. Pero en caso de existir, por cada post obtenido se agrega al html pasándose por la función SearchCard para finalmente añadirse al main del index.html

# ContactForm.js - Styled Components, & Sinfle File Components 
Single File Components es una técnica de Vue.js en la que se pretende que todo el contenido (estilos, scripts, html) se encuentre en un sólo archivo. Esto ocurre con ContactForm.js, sólo que el contenido es cargado al index.html de forma dinámica. 
Todo el contenido (form, estilos y scripts) son reutilizados de contact-form.html de los ejercicios AJAX. 
Para evitar errores, se utiliza un setTimeOut a la ejecución de la función ContactFormValidations, esto a fin de mandar al final de todas las cargas, su ejecución. Así, al llenar el formulario, no mostrará errores, como si se tratara de elementos inexistentes. 












