const database = require("../database/config");

function questaoMaisDificil() {
    const instrucao = `
        SELECT 
            q.idQuestao,
            q.pergunta,
            SUM(r.acertou = 1) AS 'Acertos',
            COUNT(*) AS 'Tentativas'
        FROM questao q
        JOIN resultado r ON r.fkQuestao = q.idQuestao
        GROUP BY q.idQuestao, q.pergunta
        ORDER BY Acertos
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function questaoMaisFacil() {
    const instrucao = `
        SELECT 
            q.idQuestao,
            q.pergunta,
            SUM(r.acertou = 1) AS 'Acertos',
            COUNT(*) AS 'Tentativas'
        FROM questao q
        JOIN resultado r ON r.fkQuestao = q.idQuestao
        GROUP BY q.idQuestao, q.pergunta
        ORDER BY Acertos DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

module.exports = {
    questaoMaisDificil,
    questaoMaisFacil,


    registrarResposta: (fkUsuario, fkQuestao, acertou, fkJogada) => {
        const instrucao = `
            INSERT INTO resultado (fkUsuario, fkQuestao, acertou, fkJogada)
            VALUES (${fkUsuario}, ${fkQuestao}, ${acertou}, ${fkJogada});
        `;

        return database.executar(instrucao);
    }
};