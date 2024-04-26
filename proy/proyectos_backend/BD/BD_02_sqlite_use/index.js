/*

Base de datos:

. Es una colección organizada de datos que se almacenan de forma persistente en un sistema informático.
. Los datos se organizan en tablas o colecciones y se relacionan entre sí utilizando diferentes técnicas y estructuras de datos.
. Las bases de datos permiten almacenar, recuperar, modificar y eliminar datos de manera eficiente.
. También ofrecen funcionalidades para realizar consultas complejas, realizar análisis de datos, garantizar la integridad de los datos y aplicar reglas de seguridad y acceso.
. Existen diferentes tipos de bases de datos, incluyendo bases de datos relacionales (SQL), bases de datos NoSQL, bases de datos en memoria, bases de datos orientadas a objetos, entre otros.
. Cada tipo tiene sus propias características y se adapta a diferentes necesidades y requisitos de las aplicaciones.


. Como conectar Express a una BD (por ejemplo: MySQL, Postgress, MongoDB, Redis, etc.)
. PlanetScale: es un servicio en la nube para MYSQL 
  (todo siguiente hasta que pide nombre de la base de datos, por ejemplo: expressdb)

. Se instala en proyecto: npm i mysql2

*/

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const getAlbums = require("./db");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/info", async (req, res) => {
  res.render("index", {resultado : await getAlbums()});
});

app.listen(3000);
console.log("Servidor no porto 3000");
