# CSS3

* CSS: Cascading Style Sheets (Hojas de Estilo en Cascada)
* Nació en 1996.
* Lenguaje de texto orientado al diseño gráfico.
* Es el código que se ocupa de dar vida gráfica al contenido por el cual navegamos.
* Con una hoja de estilo CSS vinculada al documento HTML, se cambia significativamente la forma de visualizar el contenido web. 

## Incorporación de CSS en un documento HTML

* Incorporación en línea:

```html
<div style="margin:10px;"></div>
```

* Incorporación interna:

```html
<!DOCTYPE html>
<html lang="es">
<head>  
  <style type="text/css">h1 {color:#000;} </style>
</head>
<body>
  <h1>Hola</h1>
</body>
</html>
```

* Incorporación externa.

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

```css
body {
  background-color: chocolate;
}

h1 {
  background-color: black;
  font-family: Verdana, Arial;
  font-size: 3;
  color: yellow;
}
```

## Sintaxis

* selector {propiedad : valor}
  * selector: es un descriptor que le permite dirigirse a elementos específicos de la página.
  * propiedad: atributos para los que se pueden especificar valores

* Ejemplo:

```css
h1 {
  color: red;
  background: yellow;
}
```

## Selectores

* Los elementos en los CSS, hacen referencia directa al html en la página a través de:
  * Nombre del tag: en HTML \<div>

    ```css
    div {
      background-color: red;
      font-size: 14px;
    }
    ```

  * Clase: en HTML class = "..."

    ```css
    .titulo-grande {
      font-size: 70px;
    }
    ```

  * Id: en HTML id = "..."

    ```css
    #pie {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    ```

  * Atributos/valores:

    ```css
    input [type=“text”] {
      text-align: center;
      height: 20px;
      width: 20px;
      border-radius: 5px;
    }
    ```

  * Evento o pseudo-clase:

    ```css
    input:valid {...}
    input:invalid {...}
    input[type="email"]:invalid {...}
    input:checked {...}
    input[name*="dato"]:checked {...}
    input:focus {...}

    a:hover {...}
    a:active {...}
    ```

  * Jerárquicamente:

    ```css
    div p {...}              /* todos los p hijos de div */
    div#container > p {...}  /* todos los hijos que tengan como padre directo a div */ 
    div + p {...}            /* el primer hermano p del div */
    div ~ p {...}            /* todos los p cuyo hermano anterior es un div */
    ```

  * Avanzados:

    ```css
    div p:first-child {...}    /* si hubiese un div  y dentro se encontrase un párrafo que fuese a su vez el primer hijo de este se vería afectado */
    p:first-of-type {...}      /* si diese el caso que hay un párrafo y fuese el primero de su tipo se vería afectado */
    div p:last-of-type {...}   /* último de su tipo debe ser un párrafo y encontrarse en un div */
    li:nth-child(3) {...}      /* debe ser un li y ser el 3er. hijo de su padre */
    li:nth-last-child(3) {...} /* debe ser un li y ser el 3er. hijo de su padre contando desde el último hijo, es decir, de abajo hacia arriba */
    li:nth-of-type(3) {...}     /* debe ser contando desde arriba, el 3er. de su tipo */
    li:nth-last-of-type(3) {... /* debe ser contando desde abajo el 3er. de su tipo */
    ```
  
  * Múltiple:

    ```css
    ul li ul > li {
      display: inline-block;
    }
    table tr.mi-clase > div {
      color: blue;
    }
    ```

## Modelo de Caja

* En content, el tamaño del objeto no se ve afectado por la definición de márgenes, padding o border.

![Box Model](img/boxcss3.png)

## Border

```css
h1 {
  border-style: solid;       /* Estilo de borde */
  border-color: aquamarine;  /* Color de borde */
  border-width: medium;      /* Ancho de borde */
  border-radius: 18px;       /* Redondeode borde */
}
```

* Simplificado, solo es obligatorio el atributo de estilo

```css
h1 {
  border: groove aquamarine 18px;
}
```

## Height y width

```css
p {
  border-style: solid;
  border-color: cyan;
  font-family: verdana;
  font-size: 4;
  height: 300px;       /* Alto del elemento, px: medida absoluta */
  width: 50%;          /* Ancho del elemento, %: medida relativa */
  background-color: powderblue;
}
```

## Margin

* Utilizada para crear espacio alrededor de los diferentes elementos que integran una página web.
* Se puede especificar el tamaño del espacio en blanco en todo el borde que rodea al elemento (div, p, h, etc.) por medio de:
  * margin-top.
  * margin-bottom.
  * margin-left.
  * margin-right.
* Ejemplo:

```css
p {
  border-style: solid;
  border-color: aqua;
  font-family: cursive;
  color: red;
  margin-left: 50px;
}
```

* Simplificado:

```css
p {
  margin: 20px 40px 60px 80px; /* top, right, bottom, left */
}
```

```css
p {
  margin: 20px 40px; /* top y bottom, right y left */
}
```

```css
p {
  margin: 20px; /* top y right y left y bottom */
}
```

## Padding

* Utilizada para generar espacio alrededor del contenido de un elemento, limpiando el área entre el borde y su contenido propio del elemento.
* Al igual que margin, padding permite establecer valores mediante auto, lenght, % e inherit, de manera individual sobre cada lateral, o de manera conjunta utilizando en una única línea hasta 4 parámetros.
* Ejemplo:

```css
p {
  border-style: solid;
  border-color: aqua;
  font-family: cursive;
  color: red;
  padding-top: 40px;
}
```

* Simplificado:

```css
p {
  padding: 20px 40px 60px 80px; /* top, right, bottom, left */
}
```

```css
p {
  padding: 20px 40px; /* top y bottom, right y left */
}
```

```css
p {
  padding: 20px; /* top y right y left y bottom */
}
```

## Propiedades text

* Opciones que CSS pone a disposición para el manejo de texto HTML:
  * Text Color:

    ```css
    h1 {
      color: blue;
    }
    h2 {
      color: #FF0000;
    }
    h3 {
      color: rgb(255, 255, 255);
      background: rgb(0, 0, 0);
    }
    ```

  * Text Align:

    ```css
    p {
      text-align: left; /* {center, right, justify} */
    }
    ```

  * Text Decoration:

    ```css
    p {
      text-decoration: overline; /* {line-through, underline, none} */
    }
    ```

  * Text Transformation:

    ```css
    p {
      text-transformation: capitalize; /* {lowercase, uppercase} */
    }
    ```

  * Text Shadow (sombra):

    ```css
    p {
      text-shadow: 2px 3px #FE990F; /* h-shadow, v-shadow, color */
    }
    ```

  * Text Overflow: permite recortar el contenido de un texto por visualizar en un elemento P o elemento DIV, cuando dicho contenido supera con creces el alto/ancho delimitado al elemento en cuestión.

    ```css
    p {
      overflow: scroll; /* {hidden, scroll, visible, clip, ellipsis} */
    }
    ```

## Element Classes

* Permite aplicar diferentes formatos a un mismo elemento HTML.

```html
<p class="nombreClase">...</p>
```

```css
p.nombreClase {
  ...
}
```

* Clases personalizadas:
  * CSS permite crear clases personalizadas independientes, que no afecten directamente a un elemento HTML, pero sí lo decoren.
  * Las clases se definen con el nombre que se desee, y luego se las invoca a través del atributo class.

```html
<div class="nombreClase">
  <p> ... </p>
</div>
```

```css
.nombreClase {
  ...
}
```

## Agrupar selectores

```css
h1, h2, p {
  text-align: right;
  color: grey;
}
```

## Hipervínculos

* Por defecto: estilo subrayado y color fuente azul, que se torna a violeta una vez accedido.
* CSS permite personalizar el estilo de cada hipervínculo para cada estado.
  * a:link -> hipervínculo normal, no visitado
  * a:visited -> hipervínculo que ya ha sido visitado por  el usuario
  * a:hover -> hipervínculo donde el cursor del dispositivo se encuentra encima o señalándole
  * a:active -> hipervínculo en el momento en el cual es cliqueado o activado. Sólo dura lo que dura el click

* Ejemplos:

```css
a:link {
  text-decoration: none;
  color: brown;
}

a:visited {
  text-decoration: none;
  color: hotpink;
}

a:hover {
  text-decoration: underline;
  color: darkblue;
}

a:active {
  text-decoration: none;
  color: darkslateblue;
}
```

* Se pueden modificar los hipervínculos para que simulen ser botones interactivos:

```css
a:link, a:visited {
  background-color: steelblue;
  color: snow;
  border: solid;
  padding: 14px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: snow;
  color: steelblue;
  border: double;
  border-color: steelblue;
  padding: 14px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
```

## Listas

* CSS permite a través de diferentes propiedades mejorar el estilo de las listas HTML.
  * list-style-type -> permite especificar el estilo de viñeta en las listas desordenadas
  * list-style-image -> permite especificar una imagen que reemplaza a la viñeta
  * list-style-position -> especifica si los marcadores de elementos de lista deben aparecer dentro o fuera del contenido de la lista
  * list-style -> simplifica el uso de las otras 3 propiedades en el siguiente orden: list-style-type, list-style-position,     list-style-image

* Ejemplo:

```css
ul {
  background: #009999;
  padding: 24px;
}
ul li {
  list-style-image: url('ok.png');
  list-style-position: outside;
  margin: 8px;
  padding: 6px;
  background: #00B9B9;
  color: dimgray;
}
```

## Bordes redondeados

```css
border-radius: 30px;                /* mismo valor para los 4 extremos */
border-radius: 30px 30px;           /* top-left y bottom-right, top-right y bottom-left */
border-radius: 30px 30px 30px;      /* top-left, top-right, bottom-left */
border-radius: 30px 30px 30px 30px; /* top-left, top-right, bottom-right, bottom-left */
```

## Fondo gradiente

* **linear-gradient**: permite especificar un fondo con un degradado de colores lineales, ya sea vertical, horizontal o diagonal.

  ```css
  #lineal {
    background: linear-gradient(to bottom right, blue, lightblue);
  }
  ```

* **radial-gradient**: permite establecer un radio determinado, definido por supuesto desde su centro.

  ```css
  #radial {
    background: radial-gradient(darkblue, blue, lightblue 70%);
  }
  ```

## Tranformaciones

* Permiten aplicar, sobre elementos HTML, diferentes efectos, cambiando el estado original de estos.
* Dentro de los efectos se puede aplicar:
  * translate(x, y) : mueve un elemento entre sus ejes x e y. También: translateX(n) o translateY(n).
  * scale(x, y) : cambia ancho y alto. También scaleX(n) o scaleY(n).
  * rotate(aº) : rota un elemento hacia un ángulo determinado [0º,360º] en el sentido de las agujas reloj o [0º,-360º] caso contrario.
  * skew(xº, yº) : Tuerce un elemento sobre los ejes X e Y. También skewX(nº) o skewY(nº)

* Ejemplo:

```css
div {
  width: 200px;
  height: 100px;
  background-color: yellow;
  transform: rotate(7deg);
}
```

## Transiciones

* Permiten cambiar de forma gradual los valores de las otras propiedades de animación, integrando una fusión de uno o más efectos con un tiempo de duración determinado.
* Se activan con el :hover y el :focus.

```css
img {
  opacity: 0.4;
  width: 200px;
  border: 2px solid lightgray;
  transition: all 0.3s ease-out;
}

/*
ease: Inicia despacio, sucede rápido y termina despacio
linear: Mantiene la transición con estilo de velocidad igual en toda la duración de la misma
ease-in: Inicia despacio, luego sucede normal y termina normal
ease-out: Inicia normal, sucede normal  y termina despacio
ease-in-out: Inicia despacio, sucede normal y termina despacio
*/

img:hover {
  opacity: 1;
  width: 220px;
  transform: rotate(-3deg);
}
```

## Animaciones

* Permiten que un elemento HTML cambie gradualmente de un estilo hacia otro.
* @keyframes:
  * Son los "fotogramas" en que la animación cambia.
  * Esta regla es la encargada de ejecutar los estilos CSS predefinidos.
  * Cada estilo definido dentro de esta se ejecutará, alternando el estilo original, dentro de una cantidad de tiempo. Este período está definido, a través de la propiedad animation-delay, en segundos.
  * Todos esos segundos se deben dividir en % dentro de la regla @keyframes, que le asigna un % determinado a cada uno de los estilos que se ejecutarán dentro de dicha animación (desde 0% hasta 100%)
* Ejemplo: escala de grises

```css
#anima {
  background: white;
  width: 400px;
  height: 400px;
  border: 1px solid lightgray;
}

#anima:hover {
  background: white;
  animation-name: ejemplo; /* nombre de la animación para poder identificarla y ejecutarla */
  animation-delay: 2s;     /* especifica cuántos segundos se retarda la animación, desde el momento que se activa su ejecución */
  animation-duration: 4s;  /* es el tiempo (en segundos), que durará la animación */
}

@keyframes ejemplo {
  0%   { background: lightgray; }
  20%  { background: dimgray; }
  40%  { background: darkslategray; }
  60%  { background: black; }
  80%  { background: dimgray; }
  100% { background: black; }
}
```

* Ejemplo: blinking background

```css
#demo {
  width: 300px;
  height: 300px;
  animation: blinking 1s infinite; /* name, delay, duration*/
}

@keyframes blinking {
  0%   { background-color: red; }
  50%  { background-color: blue; }
  100% { background: green; }
}
```
