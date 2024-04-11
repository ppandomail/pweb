function UserRoutes(app) {
  app.get("/nome", (req, res) => {
    res.send("Nome do usuário");
  });

  app.get("/perfil", (req, res) => {
    res.send("Página de perfil");
  });
}

module.exports = UserRoutes;
