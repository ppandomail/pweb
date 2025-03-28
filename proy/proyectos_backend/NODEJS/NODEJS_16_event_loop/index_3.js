const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Bienvenido al Servidor");
  }

  if (req.url === "/contacto") {
    // Simulo una tarea pesada (blocking code)
    for (let i = 0; i < 1000000; i++) {
      console.log(Math.random() * i);
    }

    return res.end("Pagina de contacto");
  }

  res.end("No encontrado");
});

server.listen(3000);
console.log("Servidor en el puerto 3000");

/*

Ejecutamos el programa: node index_3.js
Vamos al navegador y escribimos localhost:3000 y muestra "Bienvenido al servidor" y 
si escribimos localhost:3000/contacto vemos que queda procesando a causa de la tarea pesada
Si abrimos otra pestaña y escribimos localhost:3000 hasta que no termine el procesamiento 
no va a mostrar "Bienvenido al servidor", es decir, el hilo principal de nodejs está bloqueado, 
no dejando que continue atendiendo otras peticiones.
Solución: utilizar código asíncrono que se ejecuta en 2do plano

*/
