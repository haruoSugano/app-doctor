/**
 * Arquivo: routes/usuarioRoute.js
 * Descricao: arquivo responsavel pelas rotas da api relacionado ao usuario
 */

// Rotas do HTTP da api - usuario

const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const usuarioMiddleware = require("../middleware/login.middlware");

// definindo as rotas do CRUD - usuario
router.post("/login", usuarioController.login);
router.post("/usuarios", usuarioMiddleware.checkToken, usuarioController.create); // localhost:8000/usuario/create
router.all("/usuarios", usuarioMiddleware.checkToken, usuarioController.findAll);
router.get("/usuarios/:id", usuarioMiddleware.checkToken, usuarioController.findById);
router.put("/usuarios/:id", usuarioMiddleware.checkToken, usuarioController.update);
router.delete("/usuarios/:id", usuarioMiddleware.checkToken, usuarioController.delete);

module.exports = router;
