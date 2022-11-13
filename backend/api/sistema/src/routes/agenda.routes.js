const express = require("express");
const router = express.Router();

const agendaController = require("../controllers/agenda.controller");

router.post("/agendas", agendaController.create);
router.get("/agendas", agendaController.findAll);
router.get("/agendas/status", agendaController.findAllStatus);
router.get("/agenda/:agenda_id", agendaController.findById);
router.get("/agendas/medico/:medico_id", agendaController.findByMedico);
router.get("/agendas/paciente/:paciente_id", agendaController.findByPaciente);
router.put("/agendas/:agenda_id", agendaController.updateStatus);
router.put("/agendas/agenda/:agenda_id", agendaController.update);
router.delete("/agenda/:agenda_id", agendaController.delete);

module.exports = router;
