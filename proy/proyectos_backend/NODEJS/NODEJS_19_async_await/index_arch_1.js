const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

async function ler_arquivos() {
  try {
    const resultado_1 = await getText("./data/primeiro.txt");
    const resultado_2 = await getText("./data/segundo.txt");
    console.log(resultado_1);
    console.log(resultado_2);
  } catch (error) {
    console.log(error);
  }
}

ler_arquivos();
