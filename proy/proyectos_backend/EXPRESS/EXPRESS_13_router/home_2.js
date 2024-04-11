const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.send("Informaçao do servidor");
});

router.get("/produtos", (req, res) => {
  res.send("Página de produtos");
});

module.exports = router;
