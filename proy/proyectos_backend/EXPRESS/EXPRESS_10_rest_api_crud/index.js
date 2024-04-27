/*

Rest API CRUD

. Es un servidor que tiene ciertas URLs que nos va a permitir procesar datos
. Ejemplo: aplicación que guarde productos (ejemplo arreglo de JS)
  . GET /produtos
  . POST /produtos
  . GET /produtos/:id
  . PUT /produtos/:id
  . DELETE /produtos/:id

. Crear proyecto nodejs e instalar express y morgan. 
. Para desarrollo instalar nodemon

"scripts" : {
  "dev" : "nodemon index.js"
},
```

. Luego ejecutar: npm run dev
```

*/

const express = require("express");
const morgan = require("morgan");

const app = express();
let produtos = [];
produtos.push({ nome: "zapatillas", preço: 20, id: 1 });
produtos.push({ nome: "notebook", preço: 2000, id: 2 });
produtos.push({ nome: "caneta", preço: 5, id: 3 });

app.use(morgan("dev"));
app.use(express.json());

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.post("/produtos", (req, res) => {
  // se crea un nuevo objeto con id
  const novoProduto = { ...req.body, id: produtos.at(-1).id + 1 };
  produtos.push(novoProduto);
  res.send(novoProduto);
});

app.put("/produtos/:id", (req, res) => {
  const novoDado = req.body;
  const produtoEncontrado = produtos.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!produtoEncontrado)
    return res.status(404).json({ message: "Produto nao encontrado" });
  produtos.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...novoDado } : p
  );
  res.json({
    message: "Produto atualizado com sucesso",
  });
});

app.delete("/produtos/:id", (req, res) => {
  const produtoEncontrado = produtos.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!produtoEncontrado)
    return res.status(404).json({ message: "Produto nao encontrado" });
  produtos = produtos.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.get("/produtos/:id", (req, res) => {
  const produtoEncontrado = produtos.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!produtoEncontrado)
    return res.status(404).json({ message: "Produto nao encontrado" });
  res.json(produtoEncontrado);
});

app.listen(3000);
console.log("Servidor no porto 3000");
