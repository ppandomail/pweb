/*

Async code:

. Como manejar código que no está en nuestro servidor 
que podemos consultarlo a otro sistema externo (BD, servidor, etc.)
. Axios es un Cliente HTTP basado en promesas 
  para el navegador (usa XMLHttpRequests) y nodejs (módulo nativo http)
. Hace peticiones.
. Instalar módulo axios: npm i axios

*/

const express = require("express");
const path = require("path");
const ejs = require("ejs");

const axios = require("axios");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/post", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.render("index", {
    posts: response.data,
  });
});

app.listen(3000);
console.log("Servidor no porto 3000");
