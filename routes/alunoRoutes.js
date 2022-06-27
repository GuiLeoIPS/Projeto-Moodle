const express = require('express');
const router = express.Router();
const userModel = require("../models/alunoModel");

router.get("/", async (req, res) => {
    let result = await userModel.getAlunos();
    res.status(200).json(result)
})

router.post("/addAluno", async (req, res) => {
    let result = await userModel.addAluno(req);
    //res.status(200).json(result);
    res.redirect("http://localhost:8000/editarAlunos.html");
})

router.post("/editAluno", async (req, res) => {
    let result = await userModel.editAluno(req);
    res.redirect("http://localhost:8000/editarAlunos.html");
})

router.post("/deleteAluno", async (req, res) => {
    let result = await userModel.deleteAluno(req);
    res.redirect("http://localhost:8000/editarAlunos.html");
})

module.exports = router;