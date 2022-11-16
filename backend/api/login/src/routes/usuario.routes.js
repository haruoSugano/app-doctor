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
router.post("/usuarios", usuarioController.create); // localhost:8000/usuario/create
router.all("/usuarios", usuarioMiddleware.checkToken, usuarioController.findAll);
router.all("/usuarios/pacientes", usuarioMiddleware.checkToken, usuarioController.findByPaciente);
router.all("/usuarios/medicos", usuarioMiddleware.checkToken, usuarioController.findByMedico);
router.get("/usuarios/:id", usuarioController.findById);
router.put("/usuarios/:id", usuarioMiddleware.checkToken, usuarioController.update);
router.delete("/usuarios/:id", usuarioMiddleware.checkToken, usuarioController.delete);
router.post("/forgot", usuarioController.sendMail);
router.post("/forgot/user/:id", usuarioController.password);

module.exports = router;
