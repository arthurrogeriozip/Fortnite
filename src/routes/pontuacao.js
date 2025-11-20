var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/:usuarioId", function (req, res) {
  quizController.buscarFortnitePorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  quizController.cadastrar(req, res);
})

module.exports = router;