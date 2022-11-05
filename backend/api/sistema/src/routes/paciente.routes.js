const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/paciente.controller");

router.post("/pacientes", pacienteController.create);
router.get("/pacientes", pacienteController.findAll);
router.get("/pacientes/:paciente_id", pacienteController.findByPaciente);
router.put("/pacientes/:paciente_id", pacienteController.update);
router.delete("/pacientes/:paciente_id", pacienteController.delete);

module.exports = router;
