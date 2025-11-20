const database = require("../database/config");

function listar() {
    const instrucaoSql = `SELECT COUNT(id), questao FROM errada GROUP BY questao ORDER BY questao DESC;`;
    return database.execute(instrucaoSql);
}

function cadastrar(questao, fk_usuario) {
    const instrucaoSql = `INSERT INTO errada (questao, fk_usuario) VALUES (${questao}, ${fk_usuario});`;
    return database.execute(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}