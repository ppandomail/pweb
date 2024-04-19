/*

Desarrollar una api que calcule: 
. la edad de una persona dada una fecha de nacimiento
. la CUIT de un beneficiario
. la conversión de número a letra. Ejemplo: 99 respuesta: noventa y nueve
. y muestre los problemas de accesibilidad web dada una URL. 
Usar el framework pa11y y calcular de acuerdo a la Legislación Argentina vigente (ONTI), determinando si la página es o no es accesible.

*/

const express = require("express");

const app = express();

// YYYY-MM-DD
app.get("/:fecha", (req, res) => {
  const { fecha } = req.params;
  const fechaNacimiento = new Date(fecha);
  const fechaActual = new Date();
  console.log(fechaActual.getFullYear());
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  res.status(200).json({ edad });
});

app.listen(3000, () => {
  console.log("Servidor corriendo");
});
