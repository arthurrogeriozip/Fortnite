const database = require("../database/config");

module.exports = {

    registrarResposta: (fkUsuario, fkQuestao, acertou) => {
        const instrucao = `
            INSERT INTO resultado (fkUsuario, fkQuestao, acertou)
            VALUES (${fkUsuario}, ${fkQuestao}, ${acertou});
        `;

        return database.executar(instrucao);
    },

    estatisticas: () => {
        const instrucao = `
            SELECT 
                q.idQuestao,
                q.pergunta,
                COUNT(r.acertou) AS total_respostas,
                SUM(r.acertou) AS total_acertos,
                (SUM(r.acertou) / COUNT(r.acertou)) * 100 AS porcentagem_acertos
            FROM questao q
            JOIN resultado r ON q.idQuestao = r.fkQuestao
            GROUP BY q.idQuestao;
        `;

        return database.executar(instrucao);
    }
};