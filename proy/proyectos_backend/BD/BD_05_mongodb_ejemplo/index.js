const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { procurarTudo, inserir, apagar } = require("./db");

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  res.render("index", {
    pessoas: await procurarTudo(),
  });
});

app.post("/pessoa", async (req, res) => {
  await inserir({ nome: req.body.nome, idade: req.body.idade });
  res.render("index", {
    pessoas: await procurarTudo(),
  });
});

app.delete("/pessoa", async (req, res) => {
  await apagar(req.body);
  res.render("index", {
    pessoas: await procurarTudo(),
  });
});

app.listen(3000);
console.log("Servidor no porto 3000");
