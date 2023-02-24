# JavaScript

* Es un lenguaje de programación interpretado, no compilado.
* El código puede ser interpretado:
  * **En el cliente**: computadora del usuario
  * **En el servidor**: entorno de desarrollo Node.js
* Nace en 1995. Creador: Brendan Eich.
* Utilizado para generar scripts para la web.
* Valida datos en la máquina del cliente antes de enviarlos al servidor.
* Es un lenguaje multiparadigma, basada en prototipos (estilo de POO), dinámico, soporta estilos de programación funcional. OO e imperativa.
* Es case sensitive, es decir, es capaz de distinguir mayúsculas y minúsculas.
* Las diferentes versiones de JavaScript han sido finalmente integradas en un estándar denominado ECMAScript-262. Las versiones actuales de los navegadores soportan este estándar.

## Usos

* Crear animaciones
* Validar formularios
* Realizar acciones o eventos
* Insertar código HTML o CSS
* etc.

## Integración con HTML

* Hay dos sitios dentro de una página donde se puede situar código:
  * Dentro de la etiqueta \<head>: se suele utilizar normalmente para cargar archivos externos.
  * Dentro de la etiqueta \<body>: aquí se coloca habitualmente el código que va a realizar acciones sobre la página. Luego se verá que existen algunas restricciones.

    ```html
    <html>
    <head>
        <script type="text/javascript" src="mi_code.js"></script>
    </head>
    <body>
        <script>
            // Comentario en linea
            /* 
               Comentario
               multilinea
            */
            alert("Hola mundo en ventana")        // muestra ventana de aviso
            console.log("Hola mundo en consola")  // muestra en consola (F12)
        </script>
    </body>
    </html>
    ```

## Variables

* Nombre de variable: ($|_|L)(L|D|$|_)*
* No tipado: no es necesario definir el tipo de una variable al declararla.

```javascript
var miEdad        // Declaración explícita sin valor
var miEdad = 26   // Declaración explícita con valor
miEdad            // Declaración implícita sin valor (ERROR)
miEdad = 26       // Declaración implícita con valor

const PI = 3.14
const VALOR_MAXIMO = 256

var edad
edad = 26
edad = "veintiseis"
```

## Tipos de datos

```javascript
var year = 2022       // NUMBER
var algo              // UNDEFINED
var isPremium = true  // BOOLEAN
var name = "Pablo"    // STRING
```

## Operadores

| Nombre | Operador/es | Ejemplos |
| -- | -- | -- |
| Asignación| = | miDato = 5 |
| Aritméticos | +, -, ++, --, \*, /, %, +=, -=, *=, /=, %= | miDato++ |
| Cadenas | + | miDato = "Hola " + "mundo" |
| Lógicos | !, &&, \|\| | miDato = true && false |
| Relacionales | ==, !=, >, >=, <, <= | miDato = 5 > 3 |
| Estricta (tipo y valor) | ===, !== | 5 === "5" //false |
| Condicional | op1?op2:op3 | mayoria = (edad >= 18)? "si" : "no" |
| Tipo de dato | typeof | typeof(5.9)  //"number" |
| Punto | . | miObjeto.propiedad |
| Corchetes | [] | miObjeto[propiedad] |
| Creación | new | new miObjeto |
| Borrado | delete | delete miObjeto.propiedad |
| Existencia | in | propiedad in miObjeto |
| instanceof | instanceof | miCoche instanceof objetoCoche |
| actual | this | this.propiedad |

## Estructuras de control

* Condicionales:

```javascript
var edad = 14
if (edad >= 18) {
    console.log('Mayor de edad')
} else {
    console.log('Menor de edad')
}

var semaforo = "gris"
switch (semaforo) {
    case "rojo": console.log('Stop'); break
    case "amarillo": console.log('Precaución'); break
    case "verde": console.log('Adelante'); break
    default: console.log('Error'); break
}
```

* Bucles:

```javascript
var x = 1
while (x < 10) {
    console.log(x)
    x++
}

var arr = ["ub", "uade", "uno"]

for (var i=0; i < arr.length; i++)
    console.log(arr[i])

for (var dato of arr)
    console.log(dato)

```

## Funciones

```javascript

// Function declaration
function square(x) {
    return x*x
}

// Function Expression
const square = function(x) { return x*x }

// Arrow Function 
const square = (x) =>  { return x*x }


square(3)
```

## Funciones predefinidas

```javascript

Number("1.95")  // 1.95
Number(true)    // 1
Number("hola")  // NaN

String(1.95)     // "1.95"
String(true)     // "true"
String("Hola")   // "Hola"

parseInt("1.95")   // 1
parseFloat("1.95") // 1.95
```

## Programación orientada a objetos (POO)

* Objetos (estructura) que contiene los datos (propiedades o atributos) y las funciones (métodos) que manejan éstos.
* Ejemplo: Objeto coche
  * Propiedades = {color, modelo, marca}
  * Método = {arrancar, acelerar, frenar}

* Instancias: todas parten de la misma estructura base, pero sus propiedades toman distintos valores.
* Ejemplo: Instancia miCoche
  * Propiedades = {color: rojo, modelo: EcoSport, marca: Ford}
  * Método = {arrancar, acelerar, frenar}

```javascript

// Constructor "de un solo uso"
var unCoche = {marca: "Ford", modelo: "EcoSport", color: "rojo" }
unCoche.marca

function MiCoche(vMarca, vModelo, vColor) {
    this.marca = vMarca
    this.modelo = vModelo
    this.color = vColor
    this.arrancar = function(velocidad) { ... }
}

var unCoche1 = new MiCoche("Ford", "EcoSport", "rojo")
var unCoche2 = new MiCoche("Chevrolet", "Trucker", "gris")
unCoche1.marca
unCoche1.arrancar(60)
```

* Ejemplo: Punto

```javascript
function Punto(x, y) {
    this.x = x
    this.y = y
    this.getX = () => this.x
    this.getY = () => this.y
    this.distOrigen = () => Math.sqrt(Math.pow(2, this.getX()) + Math.pow(2, this.getY()))
}

var p = new Punto(3, 4)
p.distOrigen()
```

## Objetos de JS

* Objeto Boolean

```javascript
var b = new Boolean()  // false
```

* Objeto Number

```javascript
var n = new Number(5)
```

* Objeto String
  * Estos métodos no modifican la instancia, por lo que se debe almacenar su valor en una variable si se quiere usar el resultado posteriormente.

```javascript
var s = new String("Hola")
s.length        // 4
s.charAt(0)     // H
s.indexOf("a")  // 3
s.concat(" PP") // "Hola PP"
s.toLowerCase() // "hola"
s.toUpperCase() // "HOLA"
s.split ("l")   // ["Ho", "a"]
s.replace("H","B") // "Bola"
```

* Objeto Array

```javascript
var arr = new Array()
var arr = ["lun", "mar", "jue"]
arr.length           // 3
arr.join("-")        // "lun-mar-jue"
arr.pop()            // ["lun", "mar"] devuelve "jue"
arr.push("vie")      // ["lun", "mar", "jue", "vie"]
arr.shift()          // ["mar", "jue"] devuelve "lun"
arr.unshift("dom")   // ["dom", "lun", "mar", "jue"]
arr.reverse()        // ["jue", "mar", "lun"]
arr.sort()           // ["jue", "lun", "mar"]

arr[0]               // "lun"
arr[0] = "dom"  

var nums = [1, 2, 3, 4, 5]
nums.every(num => num > 3) // false, verifica si c/u cumple con la condición
nums.some(num => num > 3)  // true, verifica si alguno cumple con la condición
nums.map(num => num * 2)   // [2, 4, 6, 8, 10], transforma los elementos
```

* Objeto Date
  * Almacena la fecha como un número que representa los milisegundos que han pasado desde el 1/1/1970 a las 00:00:00.000.

```javascript
var f0 = new Date()              // fecha y hora actual
var f1 = new Date(96400000)      // 2/1/1970 00:00:00
var f2 = new Date(2008, 7, 15)   // 15/08/2008
var f3 = new Date(2008, 7, 15, 13, 25, 34) // 15/08/2008 13:25:34
var f4 = new Date(“2008-08-15”)  // 15/08/2008


f0.getTime()
f0.getMinutes()
f0.getDate()
f0.getDay()
f0.getFullYear()

fo.toDateString()
f0.toLocaleDateString()
f0.toTimeString()
f0.loLocaleString()
f0.toString()
```

* Objeto Math

```javascript
Math.E
Math.PI
Math.pow(2, 3)  // 9
Math.sqrt(9)    // 3
Math.random()   // 0.04825
```

* Objeto RegExp

```javascript
var p1 = new RegExp("hola+")   // hola, holaa, holaaa, ...
var p2 = new RegExp("^A")      // lineas que empiezan con A
var p3 = new RegExp("\\d\\d")  // número de 2 dígitos
var p4 = new RegExp("\\d{2}-\\d{2}-\\d{4}") // formato fecha dd-dd-dddd


var texto = "Este mes aprendo JavaScript"
new RegExp("/va/").test(texto)  // true
new RegExp("/lol/").test(texto) // false
new RegExp("/apr/").exec(texto) // ["apr"]
```

## Debug

1. Presionar F12
1. Solapa "Consola"
1. Escribir código o ver resultados de código mediante sentencia console.log()

## Ejemplo Maze

```javascript
class Maze {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.board = [this.x]
        for(var i = 0; i < this.x; i++) {
            this.board[i] = []
            for(var j = 0; j < this.y; j++)
                this.board[i][j] = "."
        }
        this.xActual = Math.floor(this.x / 2)
        this.yActual = Math.floor(this.y / 2)
        this.setValueInActualPosition("v")
    }
    printMaze() {
        var myBoard = ""
        for(var i = 0; i < this.x; i++) {
            for(var j = 0; j < this.y; j++)
                myBoard += this.board[i][j] + " "
            myBoard += "\n"
        }
        console.log(myBoard)
    }
    setValueInActualPosition(aDirection) {
        this.board[this.xActual][this.yActual] = aDirection
    }
    getValueOfActualPosition() {
        return this.board[this.xActual][this.yActual]
    }
    packmanRight() {
        this.setValueInActualPosition("<")
    }
    packmanLeft() {
        this.setValueInActualPosition(">")
    }
    packmanRight() {
        this.setValueInActualPosition("<")
    }
    packmanUp() {
        this.setValueInActualPosition("v")
    }
    packmanDown() {
        this.setValueInActualPosition("^")
    }
    tick() {
        var actualValue = this.getValueOfActualPosition()
        this.setValueInActualPosition(" ")
        switch(actualValue) {
            case "<":
                (this.yActual == this.y - 1)? this.yActual = 0 : this.yActual += 1
                this.packmanRight()
                break
            case ">":
                (this.yActual === 0)? this.yActual = this.y - 1 : this.yActual -= 1
                this.packmanLeft()
                break
            case "v":
                (this.xActual === 0)? this.xActual = this.x - 1 : this.xActual -= 1
                this.packmanUp()
                break
            case "^":
                (this.xActual == this.x - 1)? this.xActual = 0 : this.xActual += 1
                this.packmanDown()
                break
        }
    }
}

var maze = new Maze(5, 5)
maze.printMaze()
maze.packmanRight()
maze.tick()
maze.printMaze()

```

## DOM

* **Window**: encargado de representar la ventana del navegador donde se está visualizando la página.

```javascript
var v1 = window.open("mi_pagina.html")
var v2 = window.open("mi_pagina.html", "titulo", "width=200, height=300, top=100, left=400")
```

* **Navigator**: se puede acceder a información acerca del navegador que está utilizando el usuario para ver la página.

```javascript
navigator.appName
navigator.appVersion
navigator.userAgent
navigator.language
navigator.cookieEnabled
```

* **Screen**: se obtiene información de la configuración de pantalla del usuario que está viendo la página.

```javascript
screen.width
screen.height
screen.colorDepth
```

* **History**: se encarga de almacenar el historial de visitas del navegador.

```javascript
history.length
history.back()
history.forward()
history.go(posicion)
```

* **Location**: contiene la URL actual, de la cual se podrá obtener una serie de valores.

```javascript
location.href
location.hostname
location.pathname
location.search
location.port
location.protocol
location.assign("http://www.google.com")  // se redirecciona a otra página
location.reload()                         // recarga la página actual idem F5
```

* **Document**: cuando se visualiza una página Web, todos sus elementos (texto, imágenes, enlaces, formularios...) quedan representados y accesibles para el código dentro del objeto document.

```javascript
var miAncla = document.anchors[0]
var miForm = document.forms["formNuevoUsuario"]
var miImage = document.images["logo"]
var miLink = document.links[3]
var miScript = document.scripts[0]

document.doctype
document.title
document.lastModified

document.write("Esto es un texto <B> en negrita </B>")
document.getElementById("unId")
document.getElementsByName("unName")
document.getElementsByTagName("div")

<p id="p1">Texto del párrafo</p>
var p = document.getElementById("p1")
p.innerHTML = "<i>Texto nuevo</i>"
```

* **Anchor**: engloba todas las propiedades y métodos que tienen los enlaces internos al documento, también llamados anclas y anchor.

```javascript
<a id="lstProp" name="listado" target="_self">Ver Listado de <b>propiedades</b></a>
var a = document.anchors["listado"]
a.id           // lstProp
a.name         // listado
a.target       // _self
a.text         // Ver Listado de propiedades
a.innerHTML    // Ver Listado de <b>propiedades</b>
a.focus()
a.blur()
```

* **Link**: permite acceder a todos los enlaces externos al documento o página actual. Se consideran objetos link todos los elementos HTML con etiquetas \<area> y los \<a> con el atributo href definido (aunque tengan también valor en name).

```javascript
<a id="lstProp" href="pag3.php#propiedades" target="_blank">Ver Listado de <b>propiedades</b></a>
var l = document.links[0]
l.id          // lstProp
l.href        // ...pag3.php#propiedades
l.target      // _blank
l.hostname
l.pathname
l.port
l.protocol
l.text
l.innerHTML
l.focus()
l.blur()
```

* **Image**: permite acceder y manipular ciertas características de una imagen contenida en la página.

```javascript
<img id="imgLogo" name="logo" src="img/logo.jpg" width="120" height="45" alt="Logo de la empresa" title="Este es nuestro logo"></img>
var i = document.images[0]
i.id
i.name
i.src
i.width
i.height
i.alt
i.title
```

## Forms

* **Form**: el objeto document permite un acceso directo a todos los formularios de la página a través de la colección forms.

```javascript
// accesos
var f = document.forms[0]
var f = document["formRegistro"]
var f = document.formRegistro

// acceso a un campo
var c = f.elements[0]
var c = f.elements["nombreUsuario"]
var c = f.nombreUsuario

f.name
f.length
f.action
f.method

f.reset()  // limpia el formulario
f.submit() // envia el formulario

c.name
c.id
c.type
c.value
c.disabled
c.readOnly
c.maxLength
c.size

// Campos de entrada de datos: text, textarea, password, file, hidden
c.focus()
c.blur()
c.select()  // selecciona el texto que esta escrito dentro de la caja de texto

// Campos de selección de datos: select, radio, checkbox
sel.options[0]
sel.multiple
sel.selectedIndex

rad.value
rad.checked
rad.click()

che.value
che.checked
che.click()

// Botones: button, submit, reset
b.click()
```

## Ejemplo validación form

```html
<h3>Formulario para darse de alta como usuario en nuestra Web</h3>
<form id="form" name="formRegistro" action="registrar.php" method="post">
    Username: <input type="text" id="ent1" name="usuario" maxlength="8" />(Máximo 8 caracteres) <br>
    Password: <input type="password" id="ent2" name="clave" /> <br>
    Repetir:  <input type="password" id="ent3" name="claveRepe" />(Deben coincidir) <br>
    Email:  <input type="text" id="ent4" name="email" size="40" />
    Idioma: <select id="sel1" name="idioma">
                <option id="opc1" value="EN">Inglés</option>
                <option id="opc2" value="ES" selected>Español</option>
                <option id="opc3" value="PT">Portugués</option>
            </select> <br> <br>
    <input type="checkbox" id="sel2" name="publicidad" />Quiero recibir publicidad mensual en mi mail <br>
    <a href="javascript:validarRegistro()">Validar formulario</a>
</form>
<script>
    function comprobarUsuario(nombreUsuario) {
        return nombreUsuario != ""
    }
    
    function comprobarContraseña(clave, claveRepetida) {
        if (clave != "" && claveRepetida != "")
            return clave == claveRepetida
        return false        
    }

    funtion comprobarEmail(email) {
        var patron = new RegExp("^\\w+@\\w+\\.\\w{2,3}$")
        if (email != "")
            return patron.test(email)
        return false
    }

    function comprobarIdioma(campoIdioma) {
        return campoIdioma.selectedIndex != -1
    }

    function comprobarPublicidad(aceptaPublicidad) {
        if (!aceptaPublicidad)
            return confirm("Nuestra publicidad le mantendrá informado sobre las ofertas y novedades. ¿Desea recibirla en su mail?")
        return true
    }

    function validarRegistro() {
        with (document.formRegistro) {
            if (!comprobarUsuario(usuario.value)) {
                alert("El nombre de usuario está vacío.")
                usuario.focus()
            } else if (!comprobarContraseña(clave.value, claveRepe.value)) {
                alert("La contraseña está vacía o no coinciden.")
                clave.value = ""
                claveRepe.value = ""
                clave.focus()
            } else if (!comprobarEmail(email.value)) {
                alert("El email está vacío o no es válido.")
                email.select()
                email.focus()
            } else if (!comprobarIdioma(idioma)) {
                alert("No hay idioma seleccionado.")
                idioma.focus()
            } else 
                publicidad.checked = comprobarPublicidad(publicidad.checked)
        }
    }
</script>    
```

## Eventos

* Acciones que puede hacer el usuario en la página Web.
* Engloban cosas como pasar el puntero del mouse por encima de una imagen o hacer clic sobre un botón.
* JavaScript es capaz de detectar estos eventos y, a la vez, permite asociarles unas instrucciones que se ejecutarán cuando se produzcan.

| Evento | Origen | Elementos html que generan eventos |
| -- | -- | -- |
| abort | la carga de una imagen es interrumpida | img |
| load | el navegador termina de cargar una página | body |
| unload | se abandona la página actual | body |
| error | se produce un error durante la carga de un documento o imagen | body, img |
| resize | se modifica el tamaño de una ventana o marco | body |
| blur | un elemento de la página pierde el foco | body, input, select, textarea |
| focus | un elemento recibe el foc | body, input, select, textarea |
| change | el estado o valor de un elemento cambia. Normalmente se origina después de que el elemento haya perdido el foco (Blur) | input, select, textarea |
| select | se selecciona un elemento de la página | input, textarea |
| keydown | una tecla es pulsada sin soltarla | elem. de entrada de datos |
| keyup | una tecla que estaba pulsada es soltada | elem. de entrada de datos |
| keypress | una tecla es pulsada. Se genera después de KeyDown | elem. de entrada de datos |
| click | se hace clic sobre un elemento | elem. de selección de datos, botones, a, img |
| dblclick | se hace doble clic sobre un  elemento | elem. de selección de datos, botones, a, img |
| mousedown | se pulsa un botón cualquiera del mouse | elem. de selección de datos, botones, a, img |
| mouseup | se libera un botón del mouse que estaba pulsado | elem. de selección de datos, botones, a, img |
| mousemove | se mueve e l puntero por la pantalla | elem. de formulario, a, img |
| mouseover | el puntero entra en el área que ocupa un elemento (se pasa por encima) | elem. de formulario, a, img |
| mouseout | el puntero sale del área que ocupa un elemento (se quita de encima) | elem. de formulario, a, img |
| submit | un formulario está a punto de ser enviado | form |
| reset | un formulario es limpiado o reiniciado | form |

* Un evento como tal carece de utilidad por sí mismo.
* Se hace necesario asociarles una función o código JavaScript que se ejecutará cuando se produzca dicho evento.
* A estas funciones o código se les conoce como manejadores de eventos.
* Nombre de los manejadores se definen anteponiendo la palabra "on" al nombre del evento. Ejemplo onclick.

```html
<body>
    <input type="button" id="btn" name="mensaje" value="Púlsame" onclick="alert('Me has pulsado!')" />
</body>
```

```html
<form name="formEventos">
    <h3>Listado de Eventos</h3>
    <textarea name="eventos" rows="9"></textarea>
</form>
<script>
    function mostrarEvento(evento) {
        document.formEventos.eventos.value += eventos.type + "\n"
    }
    document.onclick = mostrarEvento
    document.onmousedown = mostrarEvento
    document.onmouseup = mostrarEvento
</script>
```

## AJAX

* JavaScript Asíncrono y XML (AJAX).
* Es un conjunto de técnicas de desarrollo web que permiten evitar las demoras que pueden presentarse en las clásicas peticiones y posteriores resultados del servidor; para lograrlo se encarga de transmitir pequeños paquetes de datos en segundo plano.
* Entonces, la principal característica de AJAX reside en que hace posible efectuar peticiones al servidor y obtener resultados en segundo plano. Luego, utiliza los datos obtenidos para modificar los contenidos presentes en la página con la posibilidad de ofrecer efectos dinámicos y que se desplieguen con rapidez.
* Esto es posible pues no se necesita recargar la página por completo como sucede con otras tecnologías que realizan peticiones al servidor.
* Crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.
* Aplicaciones web como Gmail, Facebook, Twitter, hacen uso de AJAX para mejorar la experiencia de usuario, ya que muchas de las consultas que se realizan al servidor no requieren recargar toda la página y muestran la información recibida del servidor de una manera rápida y precisa.

### Pasos

1. Usuario realiza una acción en la página.
1. Se invoca a XMLHttpRequest para iniciar la petición al servidor.
1. Se ejecuta una petición asíncrona.
1. Servidor procesa los datos recibidos y devuelve un XML con la información necesaria.
1. XMLHttpRequest interpreta el XML y reparte la información a los lugares que corresponde.
1. Se actualiza solo aquella parte de la página requerida por los datos, es escrita y se forma el objeto DOM con los nuevos datos.

### Ejemplo

```html
<body>
    <button type="button" onclick="cargar_paises()">Obtener Países</button> <br> <br>
    <table id="paises"></table>
    <script>
        function cargar_paises() {
            // Permite realizar la comunicación con el servidor en segundo plano
            var xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange == function() {
                // readyState: representa la situación del intercambio de datos a través del objeto
                // 0: no iniciado, 1: conexión con servidor establecida, 2: recibida petición en servidor, 3: enviando información, 4: completado
                // status: código enviado por el servidor que indica el tipo de respuesta dada a la petición
                // 200: OK, 404: no encontrado, 500: error interno del servidor
                if (this.readyState == 4 && this.status == 200)
                    procesarRespuesta(this)
            }
            // Crea la petición para el servidor
            xmlhttp.open("GET", "http://api.mercadolibre.com/classified_locations/countries")
            // Envia la petición al servidor
            xmlhttp.send()
        }

        function procesarRespuesta(xmlhttp) {
            // responseText: contiene la respuesta del servidor en formato texto
            var json = JSON.parse(xmlhttp.responseText)
            var table =  "<tr> <th> Name </th> <th> currency_id </th> </tr>"
            for(var i=0; i < json.length; i++)
                table += "<tr> <td>" + json[i].name + "</td> <td>" + json[i].currency_id + "</td> </tr>"
            document.getElementById("paises").innerHTML = table
        }
    </script>
</body>
```

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
