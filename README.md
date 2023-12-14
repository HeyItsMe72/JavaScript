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

