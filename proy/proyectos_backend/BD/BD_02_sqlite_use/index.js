/*

Ejemplo flujo:

BROWSER ---REQUEST---> /info ---> MODEL ---> BD
      ^_________________RESPONSE_/    ^_DATOS_/


*/

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const getAlbums = require("./db");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/info", async (req, res) => {
  res.render("index", { resultado: await getAlbums() });
});

app.listen(3000);
console.log("Servidor no porto 3000");
