const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/info", (req, res) => {
  const umTitulo = "Meu página criada desde Express";
  // Se le pasan datos desde el servidor al html
  res.render("index", { titulo: umTitulo });
});

app.listen(3000);
console.log("Servidor no porto 3000");
