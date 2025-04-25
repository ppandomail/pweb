/*

Settings:

. Cambiar comportamiento por defecto del framework

*/

const express = require("express");

const app = express();

// variables seteadas por el programador
app.set("nombre", "pweb2");
app.set("puerto", 3000);

// variables de express que el programador le cambia el valor
app.set("case sensitive routing", true);

app.listen(app.get("puerto"));
console.log(`Servidor ${app.get("nombre")} en el puerto ${app.get("puerto")}`);
