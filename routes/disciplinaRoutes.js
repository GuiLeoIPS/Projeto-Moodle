const express = require('express');
const router = express.Router();
const userModel = require("../models/disciplinaModel");

router.get("/", async (req, res) => {
    let result = await userModel.getDisciplinas();
    res.status(200).json(result)
})

router.post("/addDisciplina", async (req, res) => {
    let result = await userModel.addDisciplina(req);
    //res.status(200).json(result);
    res.redirect("http://localhost:8000/editarDisciplinas.html");
})


router.post("/editDisciplina", async (req, res) => {
    let result = await userModel.editDisciplina(req);
    //res.status(200).json(result);
    res.redirect("http://localhost:8000/editarDisciplinas.html");
})

router.post("/deleteDisciplina", async (req, res) => {
    let result = await userModel.deleteDisciplina(req);
    //res.status(200).json(result);
    res.redirect("http://localhost:8000/editarDisciplinas.html");
})




module.exports = router;