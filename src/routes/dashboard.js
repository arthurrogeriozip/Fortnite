var express = require("express");
var router = express.Router();

var questaoController = require("../controllers/dashboardController");

router.get("/listarAcertosErros", function (req, res) {
    questaoController.listarAcertosErros(req, res);
});

module.exports = router;