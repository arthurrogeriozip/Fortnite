const questaoModel = require("../models/dashboardModel");

function listarAcertosErros(req, res) {
    questaoModel.listarAcertosErros()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch(erro => {
            console.log("Erro ao buscar dados do gráfico:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarAcertosErros
};