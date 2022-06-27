const express = require('express');
const router = express.Router();
const disciplinaModel = require("../models/disciplinaModel");
const aluDisModel = require("../models/aluDisModel");


router.get("/", async (req, res) => {
    let listAlunoDis = await aluDisModel.getAlunoDis();
    res.status(200).json(listAlunoDis)
})

module.exports = router;