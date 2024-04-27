/*

Template engine:

. Motor de plantilla
. Crear múltiples páginas y que todas compartan una misma interface, compartir datos.
. Procesar archivos htmls en el backend y enviarle al frontend estos htmls
. Módulo ejs: Embedded JavaScript templating
. Sitio: https://ejs.co/

. Instalar en el proyecto: npm i ejs
. Crear en el proyecto la carpeta views y dentro un archivo index.ejs 
  (no tiene porque estar en una carpeta tampoco tiene porque tener extensión ejs)

  */

const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/info", (req, res) => {
  res.render("index");
});

app.listen(3000);
console.log("Servidor no porto 3000");
