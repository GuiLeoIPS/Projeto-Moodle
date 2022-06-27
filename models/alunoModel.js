const pool = require('./connection');

module.exports.getAlunos = async () => {
    try {
        const sql = "SELECT * FROM aluno ORDER BY id_aluno";
        let result = await pool.query(sql);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports.addAluno = async (req) => {
    try{
       const sql = "INSERT INTO aluno(nome_aluno, dtnsc_aluno, genero_aluno, email_aluno) values (?, ?, ?, ?)";
       let nome = req.body.alunome;
       let dtns = req.body.aludn;
       let genero = req.body.alugen;
       let email = req.body.alumail;
       var values = [
            nome, dtns, genero, email
       ]
       let result = await pool.query(sql, values);
        return result;
    } catch (error){
        console.log(error);
        return error;
    }
}


module.exports.editAluno = async (req) => {
    try{
       const sql = "UPDATE aluno SET nome_aluno = ?, dtnsc_aluno = ?, genero_aluno = ?, email_aluno = ? WHERE id_aluno = ?";
       let id = req.body.alunAEditar;
       let nome = req.body.alunome;
       let dtns = req.body.aludn;
       let genero = req.body.alugen;
       let email = req.body.alumail;
       
       var values = [
            nome, dtns, genero, email, id
       ]
       let result = await pool.query(sql, values);
        return result;
    } catch (error){
        console.log(error);
        return error;
    }
}


module.exports.deleteAluno = async (req) => {
    try{
       const sql = "DELETE FROM aluno WHERE id_aluno = ?";
       let id = req.body.alunAEliminar;
       var values = [
            id
       ]
       let result = await pool.query(sql, values);
        return result;
    } catch (error){
        console.log(error);
        return error;
    }
}