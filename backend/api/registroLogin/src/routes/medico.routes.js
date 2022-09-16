/**
 * Arquivo: routes/medicoRoute.js
 * Descricao: arquivo responsavel pelas rotas da api relacionado ao medico
 */

// Rotas do HTTP da api - medico
const express = require("express");

const router = express.Router();
const medicoController = require("../controllers/medico.controller");

// definindo as rotas do CRUD - medico
router.post("/medicos", medicoController.create);
router.all("/medicos", medicoController.findAll);
router.get("/medicos/:id", medicoController.findById);
router.put("/medicos/:id", medicoController.update);
router.delete("/medicos/:id", medicoController.delete);

module.exports = router;
