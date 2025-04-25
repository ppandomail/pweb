function UserRoutes(app) {
  app.get("/nombre", (req, res) => {
    res.send("Nombre del usuario");
  });

  app.get("/perfil", (req, res) => {
    res.send("Página de perfil");
  });
}

module.exports = UserRoutes;
