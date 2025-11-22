var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/estatisticas", (req, res) => {
    quizController.estatisticas(req, res);
});

router.get("/maisDificil", quizController.maisDificil);
router.get("/maisFacil", quizController.maisFacil);


router.post("/registrarResposta", (req, res) => {
    quizController.registrarResposta(req, res);
});

module.exports = router;