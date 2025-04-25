function HomeRoutes(app) {
  app.get("/info", (req, res) => {
    res.send("Información del servidor");
  });

  app.get("/productos", (req, res) => {
    res.send("Página de productos");
  });
}

module.exports = HomeRoutes;
