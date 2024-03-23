const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Welcome to the server");
    return res.end();
  }

  if (req.url === "/about") {
    res.write("About");
    return res.end();
  }

  res.write(`
        <h1>Not Found</h1>
        <p>Esta pagina no se encontro</p>
        <a href='/'>Volver a la pagina principal</a>
    `);
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
