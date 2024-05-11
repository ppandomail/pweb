const { MongoClient } = require("mongodb");
const { MONGODB_USR, MONGODB_PWD } =  require("./config.js");

const uri =
  "mongodb+srv://" + MONGODB_USR + ":" + MONGODB_PWD + "@cluster0.qliwatk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
const database = client.db("db");
const pessoas = database.collection("pessoas");

async function procurarTudo() {
  return await pessoas.find({}).toArray();
}

async function procurar(nome) {
  return await pessoas.findOne({ nome: nome });
}

async function inserir(pessoa) {
  await pessoas.insertOne(pessoa);
}

async function atualizar(nome, idade) {
  await pessoas.updateOne({ nome: nome }, { $set: { idade: idade } });
}

async function apagar(nome) {
  await pessoas.deleteOne({ nome: nome });
}

module.exports = { procurarTudo, procurar, inserir, atualizar, apagar }