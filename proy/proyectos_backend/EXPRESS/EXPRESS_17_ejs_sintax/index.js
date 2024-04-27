const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

  const ferramentas = [
    { id: 1, nome: "cypress"},
    { id: 2, nome: "selenium"}
  ]
  res.render('index', {
    titulo: 'Página de informação',
    estaVivo: false,
    ferramentas: ferramentas
  })
});

app.listen(3000);
console.log("Servidor no porto 3000");