/*

Base de Datos: 

. Es un programa que se encarga de almacenar todos los datos relacionados con el contexto de una 
aplicación.

MongoDB:

. Es una BD opensource NoSQL (Not Only SQL), múltipleplataforma
. Enfocada a manejar enorme cantidad de datos que se generan demasiado rápido
. Mongo viene de Humongous (gigante)
. Escalable (agregar mas recursos), flexible y de propósito general 
  (cualquier tipo de applicación: data science, web, etc).
. Utiliza un enfoque basado en documentos, donde los datos se organizan en documentos flexibles 
  similares a JSON.
. Sitio: https://www.mongodb.com/es
. Atlas: https://www.mongodb.com/cloud/atlas/register
. Crearse una cuenta

Colección:

. Organizar los datos. Ejemplos: users, products, categories, etc.
. En una colección se guardan datos. en formato JSON (documento)

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
    console.log("Conexão bem-sucedida ao MongoDB!");
  } finally {
    // Asegura que el cliente se cerrará cuando termine/error
    await client.close();
  }
}
run().catch(console.dir);
