import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  GetObjectCommand, DeleteObjectCommand
} from "@aws-sdk/client-s3";
import {
  AWS_BUCKET_NAME,
  AWS_BUCKET_REGION,
  AWS_PRIVATE_KEY,
  AWS_PUBLIC_KEY,
} from "./config.js";
import fs from "fs";

const cliente = new S3Client({
  region: AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: AWS_PUBLIC_KEY,
    secretAccessKey: AWS_PRIVATE_KEY,
  },
});

export async function subirArquivo(arquivo) {
  const stream = fs.createReadStream(arquivo.tempFilePath);
  const subirParâmetros = {
    Bucket: AWS_BUCKET_NAME,
    Key: arquivo.name,
    Body: stream,
  };
  const comando = new PutObjectCommand(subirParâmetros);
  return await cliente.send(comando);
}

export async function obterArquivos() {
  const comando = new ListObjectsCommand({
    Bucket: AWS_BUCKET_NAME,
  });
  return await cliente.send(comando);
}

export async function obterArquivo(nome) {
  const comando = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: nome,
  });
  return await cliente.send(comando);
}

export async function baixarArquivo(nome) {
  const comando = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: nome,
  });
  const resultado = await cliente.send(comando);
  resultado.Body.pipe(fs.createWriteStream(`./descargas/${nome}`));
}
