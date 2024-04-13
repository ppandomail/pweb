const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ppandomail:Gr1ll1t0@cluster0.qliwatk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const database = client.db("db");
const pessoas = database.collection("pessoas");

async function procurar(query) {
  const pessoa = await pessoas.findOne(query);
  console.log(pessoa);
  fechar()
}

async function inserir(pessoa) {
  await pessoas.insertOne(pessoa);
  fechar()
}

async function atualizar(query, set) {
  await pessoas.updateOne(query, set)
  fechar()
}

async function apagar(pessoa) {
  await pessoas.deleteOne(pessoa);
  fechar()
}

async function fechar() {
  await client.close();
}

// inserir({ nome: "pepe", idade: 24 });
// atualizar({ nome: "pepe" }, { $set: { idade: 44 } });
// procurar({ nome: "pepe" });
 procurar({});
// apagar({ nome: "pepe" });
// fechar();
