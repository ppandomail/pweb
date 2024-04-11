/*

Settings:

. Cambiar comportamiento por defecto del framework

*/

const express = require("express");

const app = express();

// variables seteadas por el programador
app.set("nome", "pweb2");
app.set("porto", 3000);

// variables de express que el programador le cambia el valor
app.set("case sensitive routing", true);

app.listen(app.get("porto"));
console.log(`Servidor ${app.get("nome")} no porto ${app.get("porto")}`);
