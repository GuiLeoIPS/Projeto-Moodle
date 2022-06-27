const pool = require('./connection');

module.exports.getRevisoes = async () => {
    try {
        const sql = "SELECT * FROM revisao r INNER JOIN aluno a ON r.id_aluno = a.id_aluno INNER JOIN disciplina d ON r.id_disciplina = d.id_disciplina";
        let result = await pool.query(sql);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}