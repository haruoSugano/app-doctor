const express = require("express");
const medicoRoutes = require("./medico.routes");
const pacienteRoutes = require("./paciente.routes");
const router = express.Router();

router.use("/api", medicoRoutes);
router.use("/api", pacienteRoutes);

module.exports = router;
