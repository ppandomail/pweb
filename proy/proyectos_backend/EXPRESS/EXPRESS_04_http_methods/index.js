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

app.get("/produtos", (req, res) => {
  res.send("Lista de produtos");
});

app.post("/produto", (req, res) => {
  res.send("Criando produto");
});

app.put("/produto", (req, res) => {
  res.send("Atualizando produto");
});

app.delete("/produto", (req, res) => {
  res.send("Removendo produto");
});

// Significa que la ruta funciona con métodos get, post, put, delete
app.all("/info", (req, res) => {
  res.send('Informação do servidor')
})

app.listen(3000);
console.log("Servidor no porto 3000");
