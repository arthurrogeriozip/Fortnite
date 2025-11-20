const questionErrorModel = require("../models/questionErrorModel");

function listar(req, res) {
    questionErrorModel.listar()
        .then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json(error.sqlMessage);
        });
}

function cadastrar(req, res) {
    let questao = req.body.questao;
    let fk_usuario = req.params.fk_usuario;

    questionErrorModel.cadastrar(questao, fk_usuario)
        .then(result => {
            res.status(201).json(result);
        }).catch(error => {
            res.status(500).json(error.sqlMessage);
        });
}

module.exports = {
    listar,
    cadastrar
}