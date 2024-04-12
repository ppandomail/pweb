/*

MongoDB:

. Base de datos NoSQL
. Utiliza un enfoque basado en documentos, donde los datos se organizan en documentos flexibles 
  similares a JSON.

*/

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ppandomail:Gr1ll1t0@cluster0.qliwatk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Crea un MongoClient con un objeto MongoClientOptions para setear la version Stable API
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Conecta el cliente al servidor	
    await client.connect();
    // Envia un ping para confirmar una conexión exitosa
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
