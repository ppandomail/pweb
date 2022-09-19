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
