/**
 * Arquivo: src/routes/index.js
 * Descricao: arquivo responsavel pela chamada da Api usuario da aplicacao
 */

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({ success: "true", message: "OK" });
});

module.exports = router;
