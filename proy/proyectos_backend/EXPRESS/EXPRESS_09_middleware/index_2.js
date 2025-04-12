/*

Ejemplo flujo de protección de ruta:

BROWSER ---REQUEST---> isAuthenticated ---> /info
        <--RESPONSE---/
        (Not authorized)

*/

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`URL: ${req.url}  Method: ${req.method}`);
  next();
});

app.use((req, res, next) => {
  console.log('Validando autorización...')
  if (req.query.login === "pepe@gmail.com") {
    next();
  } else {
    res.send("No autorizado");
  }
});

app.get("/info", (req, res) => {
  res.send("Página de información");
});
// en el browser para no acceder: http://localhost:3000/info
// en browser para acceder: http://localhost:3000/info?login=pepe@gmail.com

app.listen(3000);
console.log("Servidor en el puerto 3000");
