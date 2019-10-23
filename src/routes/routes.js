const express = require("express");
const router = express.Router();

const imcService = require("../services/imcService");
const ImcService = new imcService();

router.post("/api/imc-calc", async (req, res) => {
  const altura = req.body.altura
  const peso = req.body.peso
  const response = await ImcService.run(altura, peso)
  res.json(response).send();
});

module.exports = router;
