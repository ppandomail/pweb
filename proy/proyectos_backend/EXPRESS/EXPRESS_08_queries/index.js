/*

Queries:

. ? es una consulta
. Ejemplo: hola/pepe?x=20&y=30

*/

const express = require("express");
const app = express();

app.get("/suma/:computadora", (req, res) => {
  console.log(req.query);
  const { x, y } = req.query;
  res.send(`Resultado de la suma para la computadora ${req.params.computadora} es ${parseInt(x) + parseInt(y)}`);
});
// en el browser  https://localhost:3000/suma/mac123?x=2&y=3

app.get("/buscar", (req, res) => {
  console.log(req.query);
  if (req.query.q === "libros") res.send("Lista de libros de javascript");
  else res.send("Página normal");
});
// en el browser http://localhost:3000/buscar?q=libros

app.listen(3000);
console.log("Servidor en el puerto 3000");
