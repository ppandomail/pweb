import express from "express";
import { procurarTudo, procurar, inserir, atualizar, apagar } from "./db.js";

const app = express();

app.get("/", async (req, res) => {
  const resultado = await procurarTudo();
  res.json(resultado);
});

app.get("/pessoa/:nome", async (req, res) => {
  const resultado = await procurar(req.params.nome);
  res.json(resultado);
});

app.post("/pessoa/nome/:nome/idade/:idade", async (req, res) => {
  await inserir({ nome: req.params.nome, idade: req.params.idade });
  res.json({ message: "Pessoa inserida" });
});

app.put("/pessoa/nome/:nome/idade/:idade", async (req, res) => {
  await atualizar(req.params.nome, req.params.idade);
  res.json({ message: "Pessoa atualizada" });
});

app.delete("/pessoa/nome/:nome", async (req, res) => {
  await apagar(req.params.nome);
  res.json({ message: "Pessoa apagada" });
});

app.listen(3000);
console.log("Servidor no porto 3000");
