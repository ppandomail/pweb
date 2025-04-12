/*

Request Params:

. URL que tenga datos
. Parámetros: valores que pueden ir cambiando
. Ejemplo: ola/joe, ola/pepe, ola/ana

*/

const express = require("express");
const app = express();

app.get("/hola/:nombre", (req, res) => {
  console.log(req.params);
  res.send(`Hola ${req.params.nombre}`);
});
// en el browser  https://localhost:3000/hola/pepe

app.get("/suma/:x/:y", (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);
  const resultado = x + y;
  res.send(`Resultado de la suma: ${resultado}`);
});
// en el browser  https://localhost:3000/soma/20/30

// Otra versión para la suma
app.get("/suma2/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Resultado de la suma: ${parseInt(x) + parseInt(y)}`);
});

app.get("/nombre/:nombre/edad/:edad", (req, res) => {
  const { nombre, edad } = req.params;
  res.send(`El usuario ${nombre} tiene ${edad} años`);
});

app.listen(3000);
console.log("Servidor en el puerto 3000");
