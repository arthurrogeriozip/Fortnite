const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quizController");

router.get("/estatisticas", (req, res) => {
    quizController.estatisticas(req, res);
});


router.post("/registrarResposta", (req, res) => {
    quizController.registrarResposta(req, res);
});

module.exports = router;