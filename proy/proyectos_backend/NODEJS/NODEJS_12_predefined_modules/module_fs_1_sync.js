// fs: file system
const fs = require("fs");

// sync: hay que esperar a que se termine de ejecutar una tarea para continuar con otra
const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

fs.writeFileSync("./data/third.txt", "Este es un 3er archivo");

const title = "Contenido del 4to archivo ";
fs.writeFileSync("./data/fourth.txt", title, {
  flag: "a", //append
});
