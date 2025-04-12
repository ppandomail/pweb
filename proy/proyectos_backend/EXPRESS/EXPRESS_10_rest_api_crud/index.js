/*

Rest API CRUD

. Es un servidor que tiene ciertas URLs que nos va a permitir procesar datos
. Ejemplo: aplicación que guarde productos (ejemplo arreglo de JS)
  . GET /productos
  . POST /productos
  . GET /productos/:id
  . PUT /productos/:id
  . DELETE /productos/:id

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
let productos = [];
productos.push({ nombre: "zapatillas", precio: 20, id: 1 });
productos.push({ nombre: "notebook", precio: 2000, id: 2 });
productos.push({ nombre: "lapicera", precio: 5, id: 3 });

app.use(morgan("dev"));
app.use(express.json());

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.post("/productos", (req, res) => {
  // se crea un nuevo objeto con id
  const nuevoProducto = { ...req.body, id: productos.at(-1).id + 1 };
  productos.push(nuevoProducto);
  res.send(nuevoProducto);
});

app.put("/productos/:id", (req, res) => {
  const nuevoDato = req.body;
  const productoEncontrado = productos.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!productoEncontrado)
    return res.status(200).json({ message: "Producto no encontrado" });
  productos.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...nuevoDato } : p
  );
  res.json({
    message: "Producto actualizado con éxito",
  });
});

app.delete("/productos/:id", (req, res) => {
  const productoEncontrado = productos.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!productoEncontrado)
    return res.status(200).json({ message: "Producto no encontrado" });
  productos = productos.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.get("/productos/:id", (req, res) => {
  const productoEncontrado = productos.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!productoEncontrado)
    return res.status(200).json({ message: "Producto no encontrado" });
  res.json(productoEncontrado);
});

app.listen(3000);
console.log("Servidor en el puerto 3000");
