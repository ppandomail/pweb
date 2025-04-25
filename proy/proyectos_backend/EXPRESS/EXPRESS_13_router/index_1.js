/*

Express router: 

. Dividir una aplicación en múltiples partes
. Crear múltiples archivos y al final unirlos todos en una sola aplicación

*/

const express = require("express");

const app = express();

const HomeRoutes = require("./home_1");
const UserRoutes = require("./users_1");

HomeRoutes(app);
UserRoutes(app);

app.listen(3000);
console.log("Servidor en el puerto 3000");
