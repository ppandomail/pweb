/*

Módulo HTTP

. HyperText Transfer Protocol (Protocolo de Transferencia de HiperTexto)
. Se establecen criterios de sintaxis y semántica para la comunicación entre clientes y servidores (también proxies)
. Se usa para crear servidores web
. Modelo cliente-servidor
  . Aplicaciones clientes que se comunican con un servidor mediante solicitudes (request and response)
  . Cliente: son los dispositivos desde los que se consume la información de la web (SW en el clente: navegadores web)
  . Servidor: computadoras donde se almacenan los sitios web y sus recursos (SW en el servidor: APACHE, NGINX)
. Puertos: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
. localhost:3000 le estamos diciendo conectate a mi propia máquina y utiliza el puerto 3000 que es alli donde el programa esta escuchando que es nuestro servidor

*/

const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hola Mundo");
    res.end();
  })
  .listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
// Programa que se encuentra escuchando o esperando constantemente por una petición realizada desde la red (clientes).
