const database = require("../database/config");

function iniciarJogada(fkUsuario) {
    const instrucao = `
        INSERT INTO jogada (fkUsuario)
        VALUES (${fkUsuario});
    `;
    return database.executar(instrucao);
}

module.exports = {
    iniciarJogada
};
