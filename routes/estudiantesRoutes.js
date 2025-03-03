const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({mensaje: "Consulta de estudiante"});
});

router.post("/", (req, res) => {
  res.json({mensaje: "Ingreso de estudiante"});
});

router.put("/", (req, res) => {
  res.json({mensaje: "Actualización de estudiante"});
});

router.delete("/", (req, res) => {
  res.json({mensaje: "Eliminacion de estudiante"});
});

module.exports = router;