const fs = require("fs");

// async: Mientras se ejecuta una tarea podemos ir haciendo otras.
// Tiende a tener mejor rendimiento (sin tiempos muertos)
// Con callback que se ejecuta una vez que se lee el archivo
fs.readFile("./data/first.txt", "utf-8", function (error, data) {
  console.log(error);
  console.log(data);
});

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  console.log(error);
  console.log(data);
});

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
