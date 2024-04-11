/*

Queries:

. ? es una consulta
. Ejemplo: ola/pepe?x=20&y=30

*/

const express = require("express");
const app = express();

app.get("/soma/:nome", (req, res) => {
  console.log(req.query);
  const { x, y } = req.query;
  res.send(`Resultado da soma: ${parseInt(x) + parseInt(y)}`);
});
// en el browser  https://localhost:3000/soma/pepe?x=20&y=30

app.get("/procurar", (req, res) => {
  console.log(req.query);
  if (req.query.q === "livros") res.send("Lista de livros de javascript");
  else res.send("Página normal");
});
// en el browser http://localhost:3000/procurar?q=livros

app.listen(3000);
console.log("Servidor no porto 3000");
