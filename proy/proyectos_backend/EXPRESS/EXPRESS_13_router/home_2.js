const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  res.send("Información del servidor");
});

router.get("/productos", (req, res) => {
  res.send("Página de productos");
});

module.exports = router;
