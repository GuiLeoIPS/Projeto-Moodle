const pool = require('./connection');

module.exports.getDisciplinas = async () => {
    try {
        const sql = "SELECT * FROM disciplina";
        let result = await pool.query(sql);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports.addDisciplina = async (req) => {
    try{
       const sql = "INSERT INTO disciplina(nome_disciplina, docente_disciplina) values (?, ?)";
       let nome = req.body.disnome;
       let docente = req.body.docnome;
       var values = [
        nome, docente
       ]
       let result = await pool.query(sql, values);
        return result;
    } catch (error){
        console.log(error);
        return error;
    }
}

module.exports.editDisciplina = async (req) => {
    try{
       const sql = "UPDATE disciplina SET nome_disciplina = ?, docente_disciplina = ? WHERE id_disciplina = ?";
       let id = req.body.disEditar;
       let nome = req.body.disnome;
       let docente = req.body.docnome;
       
       var values = [
            nome, docente, id
       ]
       let result = await pool.query(sql, values);
        return result;
    } catch (error){
        console.log(error);
        return error;
    }
}


module.exports.deleteDisciplina = async (req) => {
    try{
       const sql = "DELETE FROM disciplina WHERE id_disciplina = ?";
       let id = req.body.disEliminar;
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