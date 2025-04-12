/*

. Si tendria /perfil debajo del middleware no estaría autorizado
. Para que no tenga efecto el middleware pongo los métodos arriba del/los middleware/s

*/

const express = require("express");
const app = express();

app.get("/perfil", (req, res) => {
  res.send("Página de perfil");
});

app.use((req, res, next) => {
  console.log(`URL: ${req.url}  Method: ${req.method}`);
  next();
});

app.use((req, res, next) => {
  if (req.query.login === "pepe@gmail.com") {
    next();
  } else {
    res.send("No autorizado");
  }
});

app.get("/info", (req, res) => {
  res.send("Página de información");
});

app.listen(3000);
console.log("Servidor en el puerto 3000");
