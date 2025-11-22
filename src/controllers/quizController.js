const quizModel = require("../models/quizModel");

function maisDificil(req, res) {
    quizModel.questaoMaisDificil()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar questão mais difícil:", erro);
            res.status(500).json(erro);
        });
}

function maisFacil(req, res) {
    quizModel.questaoMaisFacil()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar questão mais fácil:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    maisDificil,
    maisFacil,

    registrarResposta: (req, res) => {
        const { fkUsuario, fkQuestao, acertou, fkJogada } = req.body;

        quizModel.registrarResposta(fkUsuario, fkQuestao, acertou, fkJogada)
            .then(resultado => {
                res.status(200).json({ message: "Registrado com sucesso!" });
            })
            .catch(erro => {
                console.error("Erro ao registrar resposta:", erro);
                res.status(500).json(erro);
            });
    }
};