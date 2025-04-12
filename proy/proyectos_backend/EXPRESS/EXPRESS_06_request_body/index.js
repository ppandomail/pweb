/*

Request body:

. El cliente puede enviarle al servidor: texto, un objeto json, archivo, datos a partir de un formulario html, etc.
. Estructura del request y del response:
  . endpoint: Ruta. Ej: /endpoint
  . header: Formato de los datos. Ej: json
  . body: Datos. Ej: {...}

*/

const express = require("express");
const app = express();

// Es para que express procese el texto que le envia el cliente. Sin esta línea req.body es undefined
app.use(express.text());

// Es para que express procese el json que le envia el cliente. Sin esta línea req.body es vacio {}
app.use(express.json());

// Es para que express pueda entender los datos que vienen de un formulario.
app.use(express.urlencoded({ extended: false }));

// Probar con el cliente rest (plugin Thunder Client)
// Body -> Text : Bienvenido
app.post("/texto", (req, res) => {
  console.log(req.body);
  res.send(`Recibi el texto ${req.body}`);
});

// Probar con el cliente rest (plugin Thunder Client) Body
// Json -> { "email" : "pepe@gmail.com" }
app.post("/usuario", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado con los datos del json");
});

// Probar con el cliente rest (plugin Thunder Client)
// Body -> Form-encode :
// username  "pepe"
// age       18
app.post("/usuario2", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado con los datos del formulario");
});

app.listen(3000);
console.log("Servidor en el puerto 3000");
