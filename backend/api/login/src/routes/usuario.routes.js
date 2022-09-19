/**
 * Arquivo: routes/usuarioRoute.js
 * Descricao: arquivo responsavel pelas rotas da api relacionado ao usuario
 */

// Rotas do HTTP da api - usuario

const express = require("express");

const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");

// definindo as rotas do CRUD - usuario
router.post("/login", usuarioController.login);
router.post("/usuarios", usuarioController.create); // localhost:8000/usuario/create
router.all("/usuarios", usuarioController.findAll);
router.get("/usuarios/:id", usuarioController.findById);
router.put("/usuarios/:id", usuarioController.update);
router.delete("/usuarios/:id", usuarioController.delete);

module.exports = router;
