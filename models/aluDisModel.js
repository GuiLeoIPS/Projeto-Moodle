const pool = require('./connection');

module.exports.getAlunoDis = async () => {
    try {
        const sql = "SELECT a.nome_aluno,d.nome_disciplina, b.nota FROM aluno a inner join aluno_disciplina b on b.id_aluno = a.id_aluno INNER JOIN disciplina d on d.id_disciplina = b.id_disciplina";
        let result = await pool.query(sql);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}