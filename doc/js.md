# JavaScript

## JQuery

* Creada en 2006 por John Resig.
* Es una librería JavaScript, gratuita con licencia GNU.
* Simplifica las tareas de:
  * Manipulación HTML/DOM.
  * Manipulación CSS.
  * Métodos para los eventos HTML.
  * Efectos y animaciones.
  * AJAX
  * Utilidades
* En la sección descargas de jquery.com [JQUERY](http://jquery.com/download/) se pueden encontrar las diversas formas de incluir la librería en un proyecto.

```html
<html>
<head>
    <meta charset="utf-8">
    <title>jQuery</title>
</head>
<body>
    <h1>HTML</h1>
    <script src="jquery-3.3.1.min.js"></script>
    <script>
        $('h1').html('jQuery está en la casa')
    </script>
</body>
</html>
```

* Sintaxis básica: $(selector).action()
  * $(this).hide()     // oculta el elemento actual
  * $("p").hide()      // oculta todos los elementos \<p>
  * $(".test").hide()  // oculta todos los elementos con class = "test"
  * $("#test").hide()  // oculta el elemento con id = "test"

* Funciones:

| Función | Descripción |
| -- | -- |
| html() | devuelve contenido html |
| html('Un poco de \<em> markup </em>') | asigna nuevo html |
| text() | devuelve contenido textual |
| text('Pepe') | asigna contenido textual |
| empty() | equivale a html('') |
| css('color') | devuelve valor de la prop css |
| css('color', 'red') | asigna el estilo css |
| attr('src') | devuelve el valor del atributo |
| attr('src', 'http://' | asigna un nuevo valor al atributo |

* Eventos:
  * click(callback)
  * change(callback)
  * blur(callback)
  * focus(callback)
  * submit(callback)
  * hover(callback)
  * hover(callbackIn, callbackOut)
  * [Otros eventos](http://api.jquery.com/category/events/))

```javascript
$(‘#btn1’).click(function(){ 
     console.log(“click”);
});

```

* Método $.ajax

```javascript
$.ajax({
     url:'mi-archivo.html'
})
.done(recibir)
.fail(manejarError);

function recibir(datos){
     $('#miDiv' ).text(JSON.stringify(datos));
}

function manejarError() {
    alert(‘Se produjo un error’);
}
```

### Ejemplo: Mover cuadrado con animate

```html
<button>Mover el cuadrado</button>
<div id="cuadrado"></div>
```

```css
div {
  background: blue;
  height: 100px;
  margin: 10px;
  position: absolute;
  width: 100px;
}
```

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("#cuadrado").animate({
            height: '150px', 
            left: '500px',
            opacity: '0.7',
            top: '100px',
            width: '150px'
        }, 1500);
    });
});
```

### Ejemplo: bola con time

```html
<div id="bola"></div>
```

```css
#bola {
  width: 10px;
  height: 10px;
  background-color: red;
  border: black 2px solid;
  border-radius : 10px;
  position: relative;
}
```

```javascript
$(function(){
  function animarBola() {
    $("#bola").animate({left: '+=150'}, "slow")
              .animate({top: '+=150'}, "slow")
              .animate({left: '-=150'}, "slow")
              .animate({top: '-=150'}, "slow");   
  }
  
  setInterval(animarBola, 2400);
});
```

### Ejemplo: Reloj

```html
<span id="hora"></span>
```

```css
* {
    font-family: Helvetica;
    font-size: 20px;
    text-align: center;
}
```

```javascript
$(function() {
    function mostrarHora() {
        var fecha = new Date(), // nuevo objeto Fecha
        hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
         $('#hora').text(hora);
    }
    setInterval(mostrarHora, 1000); // la función "mostrarHora" se ejecuta cada segundo
});
```

## Ejercicios

1. Hacer un programa que tome dos valores por teclado y los multiplique, luego muestre el resultado por pantalla, por ambos métodos (alert y console.log)
1. Realizar un programa en el que se ingrese la base y la altura de un triángulo e informe su área. El programa debe imprimir una leyenda que incluya los datos de entrada y el resultado
1. Hacer un programa en el que se ingrese la velocidad máxima de una calle, la velocidad de un auto y tipo de auto (particular o ambulancia). Las normas de tránsito indican que existe un 15% de tolerancia sobre la velocidad máxima. Indicar si el auto recibe una advertencia, una multa o nada según los siguientes parámetros:
    * Particulares:
      * Si la velocidad es menor a la velocidad máxima, no pasa nada.
      * Si la velocidad está por encima de la velocidad máxima pero dentro del margen de tolerancia = Advertencia.
      * Si la velocidad está por encima del margen de tolerancia = Multa.
    * Ambulancia:
      * Si está en una emergencia, no pasa nada.
      * Si no está en emergencia, vale como un particular.
1. Pedir al usuario que ingrese dos números por teclado y sumarlos.
1. Pedir al usuario que ingrese un número con decimales y mostrar su parte entera.
1. Pedir al usuario que ingrese un número de 4 dígitos e invertirlo.
1. Pedir al usuario que ingrese una cantidad expresada en segundos y mostrarla en días, horas, minutos y segundos.
1. Pedir al usuario que ingrese una cantidad de días, una cantidad de horas, una cantidad de minutos y una cantidad de segundos y luego expresarla en segundos.
1. Pedir al usuario que ingrese una cantidad monetaria y mostrar la cantidad mínima de billetes y monedas requerida para dicha cantidad.
1. Pedir a usuario que ingrese un número e indicar si el mismo es:
    * Par Positivo
    * Impar Positivo
    * Par Negativo
    * Impar Negativo
1. Hacer un programa que muestre una cuenta regresiva desde un valor ingresado por el usuario.
1. Hacer un programa que le pida dos números al usuario y los multiplique por el método de la suma. Ejemplo:  4x3 = 4 + 4 + 4  
1. Hacer un programa que le pida un número N  al usuario y muestre los primeros N números pares. Ejemplo: si el usuario ingresa 4, el programa mostrará: 2,4,6,8. Complicación: mostrar los números en un único mensaje.
1. Hacer un programa que le pida al usuario un número con una cantidad indefinida de dígitos e invertirlo.
1. Hacer un programa que sólo permita ingresar números pares y los muestre. Si el número ingresado es impar, mostrar un mensaje de error y pedir otro número.
1. Hacer un programa que le pida al usuario un número entero y lo muestre. El programa no deberá permitir que el usuario ingrese números con decimales ni letras. Considerar para ello que cuando las funciones parseInt y parseFloat devuelven NaN, la condición es falsa y cuando devuelven un número, la condición es verdadera. Esto no es válido para el 0, por lo que no deberán considerarlo en el programa.
1. Escribir una función que reciba el nombre de un usuario y lo salude ("Bienvenido Juan!")
1. Escribir una función que determine si una letra es vocal o no.
1. Modificar la función de las vocales para que devuelva true o false.
1. Crear una función que reciba un número binario y devuelva su equivalente en base 10.
1. Crear una función que reciba un número entero y devuelva:
     * Verdadero si el número ingresado es primo.
     * Falso si el número ingresado no es primo.
1. Crear una función que reciba los datos de un usuario y devuelva un objeto "usuario" con dichos datos almacenados en el.
1. Hacer una función que le cargue a un objeto alumno (ya existente) las notas de las materias
1. Crear un arreglo de números y mostrar su longitud, luego agregarle datos y volver a mostrar su longitud. Finalmente, eliminar los últimos 3 valores del arreglo y mostrarlo.
1. Cargar un arreglo de “marcas” con datos ingresados por el usuario.
1. Cargar un arreglo con los números del 1 al 1000.
1. Pedirle al usuario una cantidad y eliminar esa cantidad de números del arreglo anterior.
1. Considerando un eje de coordenadas cartesiano de dos dimensiones (x,y) pedirle al usuario dos puntos del plano e indicar cual se encuentra más cercano al (0,0) y luego indicar la distancia entre dichos puntos. Cada punto del plano es un arreglo de dos elementos.
1. Utilizando el arreglo de números del 1 al 1000, pedirle al usuario un número entero y buscarlo dentro del arreglo. Si se encuentra el número, indicar en qué posición está; en caso contrario mostrar un mensaje indicando que el número no está en el arreglo.
1. Utilizando un ciclo for, recorrer un arreglo de los ejercicios anteriores (elegir uno) de principio a fin mostrando de manera independiente todos los valores que se encuentran en el.
1. Pedir números positivos al usuario, cargar un arreglo con todos los números pares que haya ingresado. Luego, recorrer el arreglo e indicar cuál fue el mayor número guardado. La carga de números finaliza cuando el usuario ingrese el 0.
1. Pedir números al usuario y almacenar en un arreglo los primeros 10 números pares ingresados, mostrarlo. Luego, eliminar los primeros 3 números del arreglo.
    * Dato: no podemos eliminar un valor del principio, pero si podemos reemplazarlo por otro y luego eliminar el último valor del arreglo.
    * Condición: el arreglo debe mantener el orden original.
1. Utilizando el arreglo anterior, pedirle un número al usuario
    * Si el número está en el arreglo, eliminarlo.
    * Si el número NO está en el arreglo, indicarlo.

## Ejercicios DOM

1. Crear una página con HTML con algunos elementos a elección (al menos un título).
    * Ubicar un elemento (a elección) y cambiar su contenido.
    * Luego ubicar otro elemento y ponerlo en negrita.
1. En la página creada anteriormente, utilizar javascript para crear una lista no ordenada con tres elementos y darles color.
1. Escribir el código JS para que al apretar el botón, se sumen X1 y X2 mostrándose el resultado en el título con id="resultado".
    * generar evento click en el botón.
    * cuando se aprieta, tomar lo que hay en la propiedad value de los inputs y almacenarlo en alguna variable.
    * sumar las variables y mostrar el resultado en el contenido del h2

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Estilos</title>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>¡SUMAS SUMAS SUMAS!</h1>
            <p>Ingresá un número en cada casilla para sumarlos.</p>
            <input id="x1" type="text" placeholder="x1"><br>
            <input id="x2" type="text" placeholder="x2"><br>
            <button>Sumar!</button>
            <h2 id="resultado"></h2>
        </body>
    </html>
    ```

1. Hacer una calculadora con 15 botones: 10 Dígitos, 4 Operaciones, 1 Igual. Escribir el código HTML correspondiente. recordar que deben dejar un espacio para el resultado. Luego mediante JS programar todos los eventos y los handlers.
1. Implementar la siguiente página web:
    ![Ejercicio Personas](img/ejercicio-personas.JPG)
1. Escribe un programa que contenga un formulario con cinco botones. Cada uno de los botones debe tener como etiqueta el nombre de un color y al pulsarlo pondrá el color del fondo del documento del mismo color que indica.
1. Como ampliación del ejercicio anterior, añade a los cinco botones, la posibilidad de elegir el cambio de color para el fondo del documento o para el fondo de una capa situa da en la esquina superior derecha del documento. (sugerencia.- Usar un formulario del tipo type=' radio' para elegir entre cambiar el documento o la capa).
