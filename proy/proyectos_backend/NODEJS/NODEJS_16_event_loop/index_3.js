const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Bemvindo ao servidor");
  }

  if (req.url === "/contato") {
    // Simulo una tarea pesada (blocking code)
    for (let i = 0; i < 1000000; i++) {
      console.log(Math.random() * i);
    }

    return res.end("Página de contato");
  }

  res.end("não encontrado");
});

server.listen(3000);
console.log("Servidor no porto 3000");

/*

Ejecutamos el programa: node index_3.js
Vamos al navegador y escribimos localhost:3000 y muestra "Bemvindo ao servidor" y 
si escribimos localhost:3000/contato vemos que queda procesando a causa de la tarea pesada
Si abrimos otra pestaña y escribimos localhost:3000 hasta que no termine el procesamiento 
no va a mostrar "Bemvindo ao servidor", es decir, el hilo principal de nodejs está bloqueado, 
no dejando que continue atendiendo otras peticiones.
Solución: utilizar código asíncrono que se ejecuta en 2do plano

*/
