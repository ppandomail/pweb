const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// Conexión a la base de datos MongoDB
const client = new MongoClient('mongodb://localhost:27017');

const db = client.db('baseDeDatosPropuestas');
const collection = db.collection('ofertasTrabajo');

app.use(cors());
app.use(express.json());

// Ruta para obtener todas las ofertas de trabajo
app.get('/ofertasTrabajo', async (req, res) => {
    const ofertasTrabajo = await collection.find({}).toArray();
    res.json(ofertasTrabajo);
});

// Ruta para obtener una oferta de trabajo por id
app.get('/ofertasTrabajo/:id', async (req, res) => {
    const { id } = req.params;
    const ofertaTrabajo = await collection.findOne({ _id: new ObjectId(id) });
    res.json(ofertaTrabajo);
});

// Ruta para guardar una nueva oferta de trabajo
app.post('/ofertasTrabajo', async (req, res) => {
    console.log(req.body)
    const { nombre, apellido, email, salarioMinimo } = req.body;
    const result = await collection.insertOne({ nombre, apellido, email, salarioMinimo });
    console.log(result)
    res.json({ response: "ok" })
    //res.json(result.ops[0]);
});

// Ruta para actualizar una oferta de trabajo existente
app.put('/ofertasTrabajo/:id', async (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    const { nombre, apellido, email, salarioMinimo } = req.body;
    console.log("aaa")
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
         { $set: { nombre, apellido, email, salarioMinimo } });
    res.json(result);
});

// Ruta para eliminar una oferta de trabajo
app.delete('/ofertasTrabajo/:id', async (req, res) => {
    const { id } = req.params;
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})








