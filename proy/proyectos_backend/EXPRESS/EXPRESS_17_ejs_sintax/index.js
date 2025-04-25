const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

  const herramientas = [
    { id: 1, nombre: "cypress" },
    { id: 2, nombre: "selenium" }
  ]

  res.render('index', {
    titulo: 'Página de información',
    estaVivo: true,
    herramientas: herramientas
  })
});

app.listen(3000);
console.log("Servidor en el puerto 3000");