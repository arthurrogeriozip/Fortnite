const database = require("../database/config");

function listarAcertosErros() {
    const instrucao = `
        SELECT 
            q.idQuestao,
            q.pergunta,
            SUM(r.acertou = 1) AS acertos,
            SUM(r.acertou = 0) AS erros
        FROM questao q
        LEFT JOIN resultado r ON r.fkQuestao = q.idQuestao
        GROUP BY q.idQuestao, q.pergunta
        ORDER BY q.idQuestao;
    `;

    return database.executar(instrucao);
}

module.exports = {
    listarAcertosErros
};