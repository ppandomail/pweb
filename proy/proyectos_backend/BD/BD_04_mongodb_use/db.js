import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://ppandomail:Gr1ll1t0@cluster0.qliwatk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
const database = client.db("db");
const pessoas = database.collection("pessoas");

export async function procurarTudo() {
  return await pessoas.find({}).toArray();
}

export async function procurar(nome) {
  return await pessoas.findOne({ nome: nome });
}

export async function inserir(pessoa) {
  await pessoas.insertOne(pessoa);
}

export async function atualizar(nome, idade) {
  await pessoas.updateOne({ nome: nome }, { $set: { idade: idade } });
}

export async function apagar(nome) {
  await pessoas.deleteOne({ nome: nome });
}
