/*

Middleware de Terceros:

. Podemos instalar paquetes que nos permitan agregar middlewares a nuestra aplicación
. Buscar en google: npm morgan (nos permite ver en consola las peticiones que van llegando)

*/

const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan());
// Probar app.use(morgan([combined, common, dev, short, tiny]))

app.get("/perfil", (req, res) => {
  res.send("Página de perfil");
});

app.get("/info", (req, res) => {
  res.send("Página de información");
});

app.listen(3000);
console.log("Servidor en el puerto 3000");
