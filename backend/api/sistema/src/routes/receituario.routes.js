const express = require("express");
const router = express.Router();
const receituarioController = require("../controllers/receituario.controller");

router.post("/receituarios", receituarioController.create);
router.get("/receituarios", receituarioController.findAll);
router.get("/receituarios/:receituario_id", receituarioController.findById);
router.get("/receituarios/medico/:medico_id", receituarioController.findByMedico);
router.get("/receituarios/paciente/:paciente_id", receituarioController.findByPaciente);
router.put("/receituarios/medico/:medico_id/paciente/:paciente_id/receituario/:receituario_id", receituarioController.update);
router.delete("/receituarios/:receituario_id", receituarioController.delete);

module.exports = router;
