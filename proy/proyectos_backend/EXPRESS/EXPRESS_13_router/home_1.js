function HomeRoutes(app) {
  app.get("/info", (req, res) => {
    res.send("Informaçao do servidor");
  });

  app.get("/produtos", (req, res) => {
    res.send("Página de produtos");
  });
}

module.exports = HomeRoutes;
