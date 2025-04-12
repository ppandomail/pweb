/*

Routing:

. Crear un servidor que puede enviar distintas rutas.
. Ejemplo: /profile, /dashboard, /product, etc.

*/

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Biemvenido");
});

app.get("/perfil", (req, res) => {
  res.send("Perfil de usuario");
});

app.get("/clima", (req, res) => {
  res.send("El clima actual es lluvioso");
});

app.use((req, res) => {
  res.status(404).send("La página no existe");
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
