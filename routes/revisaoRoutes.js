const express = require('express');
const router = express.Router();
const userModel = require("../models/revisoesModel");

router.get("/", async (req, res) => {
    let result = await userModel.getRevisoes();
    res.status(200).json(result)
})

module.exports = router;