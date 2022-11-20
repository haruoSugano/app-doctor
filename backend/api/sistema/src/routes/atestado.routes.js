const express = require("express");
const router = express.Router();
const atestadoController = require("../controllers/atestado.controller");

router.post("/atestados", atestadoController.create);
router.get("/atestados", atestadoController.findAll);
router.get("/atestados/pacientes", atestadoController.findAllPaciente);
router.delete("/atestados/:id", atestadoController.delete);

module.exports = router;
