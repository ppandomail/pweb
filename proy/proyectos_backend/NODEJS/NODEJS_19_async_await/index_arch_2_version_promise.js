// Dentro de fs hay una carpeta promises que ya tiene módulos que devuelven promesas
const { readFile } = require("fs/promises");

async function ler_arquivos() {
  try {
    const result = await readFile("./data/primeiro.txt", "utf-8");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

ler_arquivos();
