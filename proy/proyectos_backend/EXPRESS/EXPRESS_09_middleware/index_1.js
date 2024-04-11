/*

Middleware:

 . Flujo normal: BROWSER ---REQUEST---> /profile
 . Flujo middle: BROWSER ---REQUEST---> showInfo() ---> /profile  

. Es una función que se ejecute antes de ejecutar la función de cuaquier ruta. Por ejemplo para loggear algo

*/

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`URL: ${req.url}  Method: ${req.method}`);

  next(); // es una función para que express continue con su flujo normal.
});

app.get("/perfil", (req, res) => {
  res.send("Página de perfil");
});

app.get("/info", (req, res) => {
  res.send("Página de informação");
});

app.listen(3000);
console.log("Servidor no porto 3000");
