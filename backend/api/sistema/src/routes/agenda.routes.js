const express = require("express");
const router = express.Router();

const agendaController = require("../controllers/agenda.controller");

router.post("/agendas/medico/:medico_id/paciente/:paciente_id", agendaController.create);
router.get("/agendas", agendaController.findAll);
router.get("/agenda/:agenda_id", agendaController.findById);
router.get("/agendas/medico/:medico_id", agendaController.findByMedico);
router.get("/agendas/paciente/:paciente_id", agendaController.findByPaciente);
router.put("/agendas/medico/:medico_id/paciente/:paciente_id/agenda/:agenda_id", agendaController.update);
router.delete("/agenda/:agenda_id", agendaController.delete);

module.exports = router;
