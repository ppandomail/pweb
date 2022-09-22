# HTML5

* HTML: Hyper Text Markup Language (Lenguaje de Marcado de HiperTextos).
* Es el lenguaje básico utilizado para el desarrollo base o maquetación (dar la estructura y todo el sentido a los elementos) de una WEB.
* Creado en 1989 por Tim Berners. La 1ra página se publicó en 1991.
* Estandarizado por W3C (World Wide Web Consortium)
* Permite distinguir cada componente (títulos, imágenes, videos, audios, etc.) de una página web a través de la organización segmentada en tags.

## Etiquetas

* HTML es un lenguaje basado en marcados, mejor conocidos como etiquetas (tags), las cuales marcan la estructura y el sentido de la página.
* < />
* La mayoría de etiquetas deben ser abiertas y cerradas posteriormente (exceptuando algunas que solo abren)
* Sintaxis: \<etiqueta atributo = valor> contenido \</etiqueta>

## Atributos

* Cada una de las etiquetas contienen propiedades, la cuales toman la función de identificar o completar la información de esa etiqueta, a estas propiedades se le conoce como atributos.
* Tipos de atributos:
  * Atributos básicos: Ejemplos: id, class, style, title, name, etc.
  * Atributos de eventos: Ejemplos: onclick, ondblclick, onmousedown, onfocus, etc.

## Funcionamiento

1. HTML+CSS+JS: Se ocupan de formatear todo el contenido web.
1. Luego es procesado por el motor de render de un navegador web.
1. Para ser visualizado de forma comprensible por los usuarios finales.

## DOM

* Document Object Model
* Es la estructura jerárquica de la estructura de nuestra web, representada en un diagrama.

![DOM](img/dom.png)

## Tags

| Tag | Uso | Ejemplo |
| -- | -- | -- |
| \<html> | | |
| \<doctype> | Para definir el tipo de documento que está cargando el navegador | \<!doctype html> |
| \<head> | Información para el navegador | \<head> ... \</head> |
| \<title> | Para el título de la Web, visible en la pestaña de la página | \<title> Este es el título de mi página \</title> |
| \<link> | Para enlazar CSS y elementos externos | \<link> ... \</link> |
| \<style> | Para hojas de estilos | \<style\> h1 {color:red;}  p {color:blue;} \</style\> |
| \<script\> | Para enlazar interna o externamente un script de JavaScript | \<script type=“text/javascript”\> var mensaje = “Hola Mundo” \</script\> |
| \<body\> | Para contenido visible de la pág web | \<body\> ... \\</body\> |
| \<h1>...\<h6> | Para encabezados por jerarquía | \<h1> Este es el título principal \</h1> |
| \<p> | Representa el texto o párrafo que compone la página web | \<p> Esto es un párrafo. \</p> |
| \<div> | Especifica una sección dentro de un documento para agrupar elementos | \<div> ... \</div> |
| \<span> | Para crear subdivisiones dentro de una capa (por ejemplo, div) | \<span style="color: green;">de\</span> |
| \<br> | Para insertar un salto de línea. No requiere un tag de cierre |  \<p>Hola \<br> Mundo \</p> |
| \<hr> | Para trazar una línea horizontal. No requiere un tag de cierre | \<p>Hola\</p> \<hr> \<p>Mundo\</p> |
| \<blockquote> | Para insertar una acotación o una cita dentro del párrafo | \<blockquote cite="http://..."> \<p>Hola Mundo\</p>\</blockquote> |
| \<header> | Para definir la cabecera de la Web, elemento o sección | \<header> \<p>Bienvenido a...\</p> \<h1>ARGENTINA!\</h1> \</header> |
| \<footer> | Para definir el pie de página de la Web. elemento o sección | \<footer> \<address> tel: 3456456566767 \</address> \</footer> |
| \<nav> | Para definir el menú de navegación | |
| \<article> | Para representar un contenido independiente y reutilizable | |
| \<section> | Para definir las secciones de la Web. Es una agrupación temática de los contenidos | |
| \<aside> | Para definir una barra lateral de la Web, usada para visualizar enlaces. Suele contener publicidades | |
| \<main> | Para representar el contenido principal del Body, elemento o sección | |
| \<figure> | Para marcar diagramas, ilustraciones, fotografías y ejemplos de código que ayuden a la comprensión | |
| \<figcaption> | Para una leyenda o subtítulo dentro de la figura que se representa con \<figure> | \<figure>\<img> \<figcaption>Esto es una leyenda \</figcaption> \</figure> |

## Tags para formatear texto

| Tag | Uso | Ejemplo |
| -- | -- | -- |
| \<strong> | Para estilo negrita | \<p>Hola \<strong> Mundo </strong> </p> |
| \<em> | Para estilo cursiva (italic) | \<p>Hola \<em> Mundo </em> </p> |
| \<code> | Para formato de fuente tipo consola | \<p>El formato del if es:</p> \<code>if a = 1 then {...} </code> |
| \<samp> | Para representar el resultado del código | \<p>Resultado: </p> \<samp>true</samp> |
| \<cite> | Para definir el título de una obra | \<p>\<cite>The Scream</cite> by Edward </p> |
| \<wbr> | Para indicar al navegador que no debe cortar esa palabra | \<p>otorrino\<wbr>laringologo,\<wbr>de vez en cuando</p> |
| \<sub> | Para formato subíndice | \<p>Este texto contiene una palabra con el tag \<sub>subíndice</sub>.</p> |
| \<sup> | Para formato superíndice | \<p>Mientras que este texto contiene una palabra con el tag \<sup>superíndice</sup>.</p> |
| \<del> | Para texto tachado | \<p>Este texto \<del>no</del> funciona</p> |
| \<ins> | Para texto insertado | \<p>Este texto \<ins>si</ins> funciona</p> ||
| \<mark> | Para resaltar parte de un texto | \<p>Este \<mark>texto</mark> esta resaltado</p> |

## Tags para listas

* Listas no ordenadas:

  ```html
  <ul>
    <li>Java</li>
    <li>C++</li>
    <li>Prolog</li>
  </ul>
  ```

* Listas ordenadas:

  ```html
  <ol>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Javascript</li>
  </ol> 
  ```

* Listas de definición:

  ```html
  <dl>
    <dt>Front-end</dt>
    <dd>capa de presentación.</dd>
    <dt>Back-end</dt>
    <dd>capa de acceso a datos.</dd>
  </dl> 
  ```

## Tags para tablas

```html
<table style="border:1px solid black; width:100%">
<caption>Alumnos</caption>
  <tr>
    <th style="text-align:left;">Nombre</th>
    <th style="text-align:left;">Edad</th>
  </tr>
  <tr>
    <td>Fernando</td>
    <td>41</td>
  </tr>
  <tr>
    <td>Nicolas</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Julian</td>
    <td>11</td>
  </tr>
</table>
```

## Hipervinculos

* Su uso permite navegar el contenido de una web, saltando entre las diferentes páginas que la conforman.
* Tipos de hipervínculos:

| Tipo | Descripción |
| -- | -- |
| \<a href="http://www.unaweb.com">...</a> | Hipervínculo absoluto |
| \<a href="pagina2.html">...</a> | Hipervínculo relativo dentro del mismo sitio web y mismo nivel de carpeta |
| \<a href="#tabla2">...</a> | Hipervínculo hacia un elemento específico (atributo ID) dentro de la página actual |

* Atributo target: específica donde se va a abrir el documento referenciado.

| Valores de target | Descripción |
| -- | -- |
| _blank | En una ventana o pestaña nueva |
| _self | En el mismo marco que fue clickeado (valor por default) |
| _parent | En el marco padre |
| _top | En todo el cuerpo de la ventana |
| framename | En un marco con nombre |

## Otros tags

| Tag | Uso | Ejemplo |
| -- | -- | -- |
| \<progress> | Para representar el progreso de una tarea | \<progress value="22" max="100"></progress> |
| \<meter> | Para medir datos dentro de un rango dado (un indicador) | \<meter value="2" min="0" max="10">2 de 10</meter>|

* svg: para dibujar formas (rectángulos, círculos, elipses, etc.)

```html
<svg width="600" height="500">
  <rect width="100" height="100" x="10" y="10" rx="10" ry="20" style="fill: red;" />
  <circle r="100" cx="220" cy="120" style="fill: blue;"/>
  <ellipse cx="420" cy="80" rx="100" ry="50" style="fill: green;"/>
</svg>
```

## Formularios

* Son el mecanismo más popular de ingreso de datos.
* Atributos de Form:

| Atributo | Descripción |
| -- | -- |
| action | la URI del programa o de la web que lo contiene procesa la información ingresada en el formulario |
| autocomplete | por defecto viene activado ("on"). Seteando en "off", se desactivará la función de autocompletado que el navegador web maneja|
| enctype | {"application/x-www-form-urlencoded" (defecto), "multipart/form-data" (si el form contiene \<input type="file">), "text/plain" (HTML5) } |
| method | es el método HTTP que utiliza el navegador web para enviar los datos cargados en el formulario. Soporta los métodos POST y GET. Default: GET |
| name | el formulario debe tener un nombre único. Este nombre debe especificarse en el atributo id = "nombreDelForm" |
| novalidate | especifica si el formulario debe validar o no los datos que van a ser enviados |
| target | especifica un nombre o página de destino, que mostrará al usuario un mensaje luego de enviar el formulario. Valores {\_self, \_blank, \_parent, \_top} |

* Ejemplo:

```html
<form action="server.php" method="post" target="_blank">
...
</form>
```

## Input types

* Son los componentes que corresponden al ingreso o validación de datos que conforman el contenido de un formulario web.

```html

<input type="text" name="nombre" maxlength="20" ...>
<input type="password" .../>
<input type="hidden" ... />
<input type="number" name="edad" step="0.1" ...>
<input type="range" ... />
<input type="checkbox" name="vainilla" checked ...>
<input type="radio" ... /> <!-- se agrupan mediante el atributo name -->
<input type="color" name="color" ... >
<input type="date" name="fecha_nac" ...>
<input type="time" ... />
<input type="datetime-local" ... />
<input type="week" ... />
<input type="month" ... />
<input type="tel" ... />
<input type="email" ... />
<input type="url" ... />
<input type="search" ... />

<input type="file" ... />
<input type="image" ... />

<input type="reset" ... />
<input type="submit" ... />
<input type="button" ... />

<form id="f1" ...>
  ...
  <textarea form="f1" ...>
    ...
  </textarea>
  ...
</form>

<select>
  <option value="v1">Opc 1</option>
  <option value="v2">Opc 2</option>
</select>
```

## Atributos de input types

* readonly: solo lectura, por default es false
* disabled: componente es grisado por completo.
* size="6" : se especifica en caracteres un ancho visible.
* maxlength="7" : delimita la cantidad de texto que se puede ingresar.
* min="18" max="99" : valor mínimo y máximo para los input de tipo número (number y range).
* step="2" : determina un número legal de intervalos entre los posibles valores por ingresar.
* pattern="[A-Z]{3}" : letras mayúsculas y no acepte más de 3 caracteres.
* autofocus: establece el foco a un control cuando termina de cargarse la página.
* required: se hace obligatorio el llenado del input.
* placeholder="xxx" : permite colocar una guía para que el usuario complete el campo.

## Ejemplo de formulario

```html
<form>
  <h1>Trabajo con Formularios HTML</h1>
  <label for="nombre">Nombre:</label><br>
  <input type="text" name="nombre" id="nombre" placeholder="Ingrese su(s) nombre(s)" /><br>
  <label for="apellido">Apellido:</label><br>
  <input type="text" name="apellido" id="apellido" placeholder="Ingrese su(s) apellido(s)" /><br>
  <label for="edad">Edad:</label><br>
  <input type="number" name="edad" id="edad" placeholder="Ingrese su edad" /><br>
  <input type="submit" name="submit" id="submit" value="Aceptar" />
  <input type="reset" name="cancel" id="cancel" value="Cancelar" />
</form>
```

## Audio

* Define la manera simplificada para reproducir un sonido, como música o cualquier otro tipo de audio.
* Formatos: mp3, wav, ogg

```html
<audio controls>
  <source src="audio.wav" type="audio/wav">
  Su navegador web no soporta este elemento.
</audio>
```

| Atributo | Valor | Descripción |
| -- | -- | -- |
| autoplay | n/a | permite indicar si el contenido de audio debe reproducirse automáticamente o no |
| controls | n/a | especifica si se deben visualizar los controles de audio básicos (play/pausa, volumen, descargar) |
| loop | n/a | especifica si, al finalizar el audio, este se reproduce nuevamente o no |
| muted | n/a | permite especificar si la salida de audio debe iniciarse o establecerse en silencio |
| preload | {auto, metadata, none} | especifica si el contenido del audio debe precargarse cuando se carga el documento HTML |
| src | url | especifica el archivo de audio por reproducir |

```html
...
<body>
  <h1>Implementando el elemento audio en HTML5</h1>
  <audio controls autoplay loop>
    <source src=“audio.ogg" type="audio/ogg">
    <source src=“audio.mp3" type="audio/mp3">
    <source src=“audio.wav" type="audio/wav">
    Su navegador no soporta este elemento.
  </audio>
</body>
...
```

## Video

* Formatos: ogg, webm, mp4

```html
<video width="720" controls poster="portada.jpg">
  <source src="nombre.mp4" type="video/mp4">
  <source src="nombre.webm" type="video/webm">
</video>
```

| Atributo | Descripción |
| -- | -- |
| controls | habilita play, tiempo, volumen, mute, pantalla completa y descargar |
| poster | si no se carga una imagen, aparecerá el hueco del video |
| autoplay | se utiliza dentro del tag \<video> y permite ejecutar automáticamente el video una vez que la página web se cargó |
| mensaje | todo aquel texto que se agregue dentro de los tags \<video> y \</video> se visualizará sólo en el caso que ningún formato de video pueda cargarse en el navegador |
| track | permite definir uno o más archivos de texto en formato .VTT, que contengan toda la información de los tracks, tiempo y subtitulado de la película |
| loop | establece por defecto la reproducción continua del video |
| muted | inicia el video con el audio silenciado por defecto |
| preload | habilita a los browsers aptos, a realizar una precarga del contenido del video, previo a su reproducción |

```html
...
<body>
  <h1>Implementando el elemento video en HTML5</h1>
  <video width="720" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <source src="video.ogg" type="video/ogg">
    Su navegador no soporta este elemento.
  </video>
</body>
...
```

## Objetos embebidos

* En los documentos HTML se tiene la posibilidad de embeber objetos, de manera tal que se visualicen cuando la página se carga.
* Se puede embeber objetos PDF, video de YouTube, etc.
* Estos objetos incrustados se realizan habitualmente a través de los elementos:
  * \<iframe>

  ```html
  ...
  <body>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7759839876726!2d-58.37280438504373!3d-34.60982576532771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352b5ca79ee3%3A0xa1d1bb518124e4bd!2sBalcarce+186%2C+C1064AAD+CABA!5e0!3m2!1ses-419!2sar!4v1500147051029" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
    </iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/q1GA71TeZik" frameborder="0" allowfullscreen>
    </iframe>
  </body>
  ...
  ```

  * \<object> : se usa con mayor asiduidad para incrustar archivos PDF, controles ActiveX, películas flash, otras páginas web, y otros tipos de archivos

  ```html
  ...
  <body>
    <object data="documento.pdf" type="application/pdf" width="100" height="300">
      alt: <a href="documento.pdf">Documento PDF</a>
    </object>
  </body>
  ...
  ```
