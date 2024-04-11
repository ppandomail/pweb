const express = require("express");

const router = express.Router();

router.get("/nome", (req, res) => {
  res.send("Nome do usuário");
});

router.get("/perfil", (req, res) => {
  res.send("Página de perfil");
});

module.exports = router;
