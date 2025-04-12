/*

Http Response:

. ¿Qué puede responder el servidor?
  . texto, archivos html, videos, audios, json, xml, etc.

*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.get("/mi_archivo", (req, res) => {
  res.sendFile("./bandera.jpg", {
    root: __dirname,
  });
});

app.get("/usuario", (req, res) => {
  res.json({ nombre: "pepe" });
});

// Validador de json: https://jsonformatter.curiousconcept.com/
// Extensión de Chrome JSON Viewer: https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});
// 204: Este código significa que el servidor ha procesado con éxito la solicitud, pero no va a devolver ningún contenido

app.listen(3000);
console.log("Servidor en el puerto 3000");
