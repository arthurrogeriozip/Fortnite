const jogadaModel = require("../models/jogadaModel");

function iniciarJogada(req, res) {
    const idUsuario = req.body.idUsuario;

    if (!idUsuario) {
        return res.status(400).json({ erro: "idUsuario não enviado" });
    }

    jogadaModel.iniciarJogada(idUsuario)
        .then(resultado => {
            res.status(200).json({
                idJogada: resultado.insertId
            });
        })
        .catch(erro => {
            console.log("Erro ao iniciar jogada:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    iniciarJogada
};
