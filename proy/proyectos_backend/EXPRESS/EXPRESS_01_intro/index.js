/* 

Express:

. Es un framework de Nodejs usado para crear aplicaciones de servidor (web y APIs) usando Javascript.
. Funciona con Nodejs versión >= 14
. Cuando desarrollamos aplicaciones con express estamos desarrollando aplicaciones backend.
. Modelo cliente-servidor
  . Cliente: app que funciona en el navegador (HTML5 + CSS3 + JS)
  . Servidor: lógica por ejemplo: Guardar datos, subir archivos, etc
. Comunicación protocolo HTTP: Request - Response
. Sitio: https://expressjs.com/es/

. Crear un proyecto nodejs e instalar express:

mkdir myapp
cd myapp
npm init -y
npm i express
touch index.js  o  en windows: echo > index.js
gedit index.js

*/

// Importar el módulo de Express
const express = require("express");

// Crear una instancia de la aplicación Express
const app = express();

const port = 3000;

// Definir una ruta para la raíz del sitio
app.get("/", (req, res) => {
  res.send("<h1>Bienvenido</h1>");
});

app.get("/perfil", (req, res) => {
  res.send("<h1>Perfil de usuario</h1>");
});

// Escuchar en el puerto 3000
app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});

/* 

Se ejecuta: node index.js
. La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. 
. La aplicación responde con "Bienvenido" para las solicitudes al URL raíz (/) o a la ruta raíz.
. Para cada vía de acceso diferente a las definidas, responderá con un error 404 Not Found.

*/
