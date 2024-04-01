/*

DOM: 

. Document Object Model
. Es la estructura del documento HTML (árbol de objetos)
. Se puede modificar de forma dinámica desde JS: 
  . agregar, modificar, eliminar etiquetas, 
  . agregar, modificar, eliminar atributos,
  . agregar, modificar, eliminar estilos CSS 
  . agregar, modificar, eliminar contenido de texto 
  . etc.

. Objetos: window, navigator, screen, history, location, document

*/

// window: ventana del navegador donde se está visualizando la página

v1 = window.open("mi_pagina.html");
v2 = window.open(
  "mi_pagina.html",
  "titulo",
  "width=200, height=300, top=100, left=400"
);

// navigator: información del navegador

navigator.userAgent;
navigator.language;
navigator.cookieEnabled;

// screen: información de la configuración de pantalla

screen.width;
screen.height;
screen.colorDepth;

// history: almacena el historial de visitas del navegador

history.length;
history.back();
history.forward();
history.go(posicion);

// location: información de la URL actual

location.href;
location.hostname;
location.pathname;
location.search;
location.port;
location.protocol;
location.assign("http://www.google.com"); // se redirecciona a otra página
location.reload(); // recarga la página actual idem F5

// document: elementos (texto, imágenes, enlaces, formularios, etc.)

var miForm = document.forms["formNuevoUsuario"];
var miImage = document.images["logo"];
var miLink = document.links[3];
var miScript = document.scripts[0];

document.doctype;
document.title;
document.lastModified;

document.write("Esto es un texto <B> en negrita </B>");

page = document.getElementById("page"); // <div id="page"></div>. Si no lo encuentra devuelve NULL
items = document.getElementsByClassName("item"); // [div, div, div]. Si no encuentra ninguno devuelve []
names = document.getElementsByName("nickname"); // <p name="nickname"></p>
divs = document.getElementsByTagName("div"); // [div, div, div, div]

page = document.querySelector("#page"); // <div id="page"></div>
info = document.querySelector(".main .info"); // <div class="info"></div>
infos = document.querySelectorAll(".info"); // Obtiene todos los elementos con clase "info"
names = document.querySelectorAll('[name="nickname"]'); // Obtiene todos los elementos con atributo name="nickname"
divs = document.querySelectorAll("div"); // Obtiene todos los elementos <div> de la página HTML

// Crear elementos HTML
div = document.createElement("div"); // Se crea un <div></div>
span = document.createElement("span"); // Se crea un <span></span>
img = document.createElement("img"); // Se crea un <img>

comment = document.createComment("Comentario"); // <!--Comentario-->
text = document.createTextNode("Hola"); // Nodo de texto: 'hola'

div.textContent = "Elemento 1";
div2 = div.cloneNode(); // Se está clonando el elemento
div2.textContent = "Elemento 2";

div.isConnected(); // false, el elemento permanece sólo en memoria, no está insertado en el documento HTML

// Atributos HTML de un elemento
const div = document.createElement("div"); // <div></div>
div.id = "page"; // <div id="page"></div>
div.className = "data"; // <div id="page" class="data"></div>
div.style = "color: red"; // <div id="page" class="data" style="color: red"></div>

// Otra forma para agregar, modificar o eliminar atributos

div = document.querySelector("#page"); // Obtenemos <div id="page" class="info data dark" data-number="5"></div>
div.hasAttribute("data-number"); // true (data-number existe)
div.hasAttributes(); // true (tiene 3 atributos)
div.getAttributeNames(); // ["id", "data-number", "class"]
div.getAttribute("id"); // "page"
div.removeAttribute("id"); // class="info data dark" y data-number="5"
div.setAttribute("id", "page"); // Vuelve a agregar id="page"

// Reemplazar contenido en el DOM
div = document.querySelector("div"); // <div></div>
div.textContent = "Hola a todos"; // <div>Hola a todos</div>
div.textContent; // "Hola a todos"

div = document.querySelector(".info"); // <div class="info"></div>
div.innerHTML = "<strong>Importante</strong>"; // Interpreta el HTML
div.innerHTML; // "<strong>Importante</strong>"
div.textContent; // "Importante"
div.textContent = "<strong>Importante</strong>"; // No interpreta el HTML

data = document.querySelector(".data");
data.innerHTML = "<h1>Tema 1</h1>";
data.textContent; // "Tema 1"
data.innerHTML; // "<h1>Tema 1</h1>"
data.outerHTML; // "<div class="data"><h1>Tema 1</h1></div>"

// Insertar elementos
img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";
document.body.appendChild(img);

div = document.createElement("div");
div.textContent = "Esto es un div insertado con JS.";
app = document.createElement("div"); // <div></div>
app.id = "app"; // <div id="app"></div>
app.appendChild(div); // <div id="app"><div>Esto es un div insertado con JS</div></div>

// Eliminar elementos
div = document.querySelector(".deleteme");
div.isConnected(); // true
div.remove();
div.isConnected(); // false
