/*

S3:

. Como configurar AWS para que podamos conectarlo con el servidor de nodejs
. Sitio: https://aws.amazon.com/es/
. Registrarse: ppandomail@gmail.com / HolaMundo123!!!
. Servicios/Almacenamiento/S3
. Botón Crear Bucket (carpeta que está en la nube para poder almacenar archivos)
. Poner nombre del bucket y crearlo.

. Servicios/IAM : administrar el acceso a los recursos de AWS
  1. Crear politica: Servicio: s3, Lectura: GetObject, Escritura: PutObject, Enumerar: ListBucket, Recurso: bucket pweb2, object \*. Siguiente y nombre politica : tutorial 
  2. Crear usuario: nombre: user_pweb2 y asignarle la política.

. En el proyecto crear un archivo .env (ver contenido):
. Instalar módulo dotenv para que lea el archivo .env : npm i dotenv
. Crear archivo config.js (ver contenido)

. Instalar módulo @aws-sdk/client-s3 : npm i @aws-sdk/client-s3
. Crear archivo s3.js (ver contenido)

video: https://www.youtube.com/watch?v=sDVRyFaoI8s&list=PLL0TiOXBeDahTsuVTKGV8SLG4XiCGnstS&index=20
*/

import express from "express";
import fileUpload from "express-fileupload";
import {
  subirArquivo,
  obterArquivos,
  obterArquivo,
  baixarArquivo
} from "./s3.js";

const app = express();

// middleware, pone al req la prop files
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./descargas",
  })
);

// carpeta descargas es pública
// Para acceder a los archivos: http://localhost:3000/<filename>
app.use(express.static("descargas"));

app.post("/arquivos", async (req, res) => {
  const resultado = await subirArquivo(req.files.file);
  res.json({ resultado });
});
// usar Thunder Client y en Body/Form check en File
// cargar el nombre del archivo 'file' y subirlo. Luego botón Send
// Ir a aws y ver que haya subido el archivo
// Para descargarlo ir a:  Acciones del Objeto/Compartir con una URL prefirmada

app.get("/arquivos", async (req, res) => {
  const resultado = await obterArquivos();
  res.json(resultado.Contents);
});

app.get("/arquivos/:nome", async (req, res) => {
  const resultado = await obterArquivo(req.params.nome);
  res.json(resultado.$metadata);
});

app.get("/baixar-arquivo/:nome", async (req, res) => {
  await baixarArquivo(req.params.nome);
  res.json({ message: "Arquivo baixado" });
});

app.listen(3000);
console.log("Servidor no porto 3000");
