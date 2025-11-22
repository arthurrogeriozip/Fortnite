var express = require("express");
var router = express.Router();

var jogadaController = require("../controllers/jogadaController");

router.post("/iniciar", jogadaController.iniciarJogada);

module.exports = router;
