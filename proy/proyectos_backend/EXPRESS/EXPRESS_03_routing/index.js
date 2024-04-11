/*

Routing:

. Crear un servidor que puede enviar distintas rutas.
. Ejemplo: /profile, /dashboard, /product, etc.

*/

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bemvindo");
});

app.get("/perfil", (req, res) => {
  res.send("Perfil de usuário");
});

app.get("/clima", (req, res) => {
  res.send("O clima atual é chuvoso");
});

app.use((req, res) => {
  res.status(404).send("A página não existe");
});

app.listen(port, () => {
  console.log(`Aplicativo de exemplo escutando no porto ${port}`);
});
