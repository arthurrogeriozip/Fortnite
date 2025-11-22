const quizModel = require("../models/quizModel");

module.exports = {
    registrarResposta: (req, res) => {
        const { fkUsuario, fkQuestao, acertou } = req.body;

        quizModel.registrarResposta(fkUsuario, fkQuestao, acertou)
            .then(resultado => {
                res.status(200).json({ message: "Registrado com sucesso!" });
            })
            .catch(erro => {
                console.error("Erro ao registrar resposta:", erro);
                res.status(500).json(erro);
            });
    },

    estatisticas: (req, res) => {
        quizModel.estatisticas()
            .then(resultado => {
                if (!resultado || resultado.length === 0) {
                    return res.status(404).json({ message: "Nenhuma estatística encontrada." });
                }

                // Encontrar mais fácil e mais difícil
                const maisFacil = resultado.reduce((a, b) =>
                    b.porcentagem_acertos > a.porcentagem_acertos ? b : a
                );

                const maisDificil = resultado.reduce((a, b) =>
                    b.porcentagem_acertos < a.porcentagem_acertos ? b : a
                );

                res.status(200).json({
                    facil: maisFacil,
                    dificil: maisDificil,
                });
            })
            .catch(erro => {
                console.error("Erro ao buscar estatísticas:", erro);
                res.status(500).json(erro);
            });
    }
};