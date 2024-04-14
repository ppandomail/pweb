/*

S3:

. Servicio de AWS S3 (Amazon Web Services Simple Storage Service)
. Permite subir archivos en la nube, descargarlos, etc.

Subir archivos locales:

1. Crear proyecto nodejs: npm init -y
2. Instalar modulos: npm i express express-fileupload
3. Crear archivo: index.js
4. Agregar en package.json "type" : "module",

*/

import express from "express";
import fileUpload from "express-fileupload";

const app = express();

// middleware, pone al req la prop files
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./descargas",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Bemvindo" });
});

app.post("/arquivos", (req, res) => {
  console.log(req.files);
  res.json({ message: "Arquivo baixado" });
});
// usar Thunder Client y en Body/Form check en File 
// cargar el nombre del archivo y subirlo. Luego botón Send

app.listen(3000);
console.log("Servidor no porto 3000");
