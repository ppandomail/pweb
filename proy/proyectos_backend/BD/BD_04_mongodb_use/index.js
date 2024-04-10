const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ppandomail:Gr1ll1t0@cluster0.qliwatk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("prueba");
    const users = database.collection("usuarios");

    const query = { username: "uno" };
    const user = await users.findOne(query);

    console.log(user);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
