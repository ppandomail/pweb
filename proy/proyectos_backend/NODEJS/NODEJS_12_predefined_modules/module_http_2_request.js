const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Bienvenidos al Servidor");
    return res.end();
  }

  if (req.url === "/acerca") {
    res.write("Acerca de ...");
    return res.end();
  }

  res.write(`
        <h1>No Encontrado</h1>
        <p>Esta pagina no se encontro</p>
        <a href='/'>Volver a la pagina principal</a>
    `);
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
