/* 

HTTP Methods:

. GET : Cliente trata de obtener algo
. POST : Cliente envia datos al servidor para guardarlos
. PUT : Cliente trata de actualizar algo
. DELETE : Cliente trata de eliminar algo

. Todas las URLs que se escriban en la barra de direcciones del navegador serán peticiones GET
. El resto de las peticiones (POST, PUT, DELETE) se probar por Postman o 
. Instalando en VSC el plugin Thunder Client (aparece un rayo) y un botón New Request

*/

const express = require("express");
const app = express();

app.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

app.post("/producto", (req, res) => {
  res.send("Creando producto");
});

app.put("/producto", (req, res) => {
  res.send("Actualizando producto");
});

app.delete("/producto", (req, res) => {
  res.send("Eliminando producto");
});

// Significa que la ruta funciona con métodos get, post, put, delete
app.all("/info", (req, res) => {
  res.send('Información del servidor')
})

app.listen(3000);
console.log("Servidor en el puerto 3000");
