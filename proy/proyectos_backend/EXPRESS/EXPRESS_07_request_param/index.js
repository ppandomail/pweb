/*

Request Params:

. URL que tenga datos
. Parámetros: valores que pueden ir cambiando
. Ejemplo: ola/joe, ola/pepe, ola/ana

*/

const express = require("express");
const app = express();

app.get("/ola/:nome", (req, res) => {
  console.log(req.params);
  res.send(`Olá ${req.params.nome}`);
});
// en el browser  https://localhost:3000/ola/pepe

app.get("/soma/:x/:y", (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);
  const result = x + y;
  res.send(`Resultado da soma: ${result}`);
});
// en el browser  https://localhost:3000/soma/20/30

// Otra versión para la suma
app.get("/somav2/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Resultado da soma: ${parseInt(x) + parseInt(y)}`);
});

app.get("/nome/:nome/idade/:idade", (req, res) => {
  const { nome, idade } = req.params;
  res.send(`O usuário ${nome} tem ${idade} anos`);
});

app.listen(3000);
console.log("Servidor no porto 3000");
