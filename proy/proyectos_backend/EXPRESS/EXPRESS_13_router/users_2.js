const express = require("express");

const router = express.Router();

router.get("/nombre", (req, res) => {
  res.send("Nombre del usuario");
});

router.get("/perfil", (req, res) => {
  res.send("Página de perfil");
});

module.exports = router;
