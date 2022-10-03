const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medico.controller");

router.post("/medicos", medicoController.create);
router.get("/medicos", medicoController.findAll);
router.get("/medicos/:medico_id", medicoController.findById);
router.put("/medicos/:medico_id", medicoController.update);
router.delete("/medicos/:medico_id", medicoController.delete);

module.exports = router;
