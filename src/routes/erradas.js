const express = require("express");
const router = express.Router();

const erradasController = require("../controllers/erradasController");

router.get("/listar", (req, res) => {
    erradasController.listar(req, res);
});

router.post("/cadastrar", (req, res) => {
    erradasController.cadastrar(req, res);
});

module.exports = router;