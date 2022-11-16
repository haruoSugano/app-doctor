const express = require("express");
const router = express.Router();
const path = require("path");
const medicoRoutes = require("./medico.routes");
const pacienteRoutes = require("./paciente.routes");
const receituarioRoutes = require("./receituario.routes");
const agendaRoutes = require("./agenda.routes");

router.use("/api", medicoRoutes);
router.use("/api", pacienteRoutes);
router.use("/api", receituarioRoutes);
router.use("/api", agendaRoutes);
router.use("/uploads", express.static(path.join(__dirname, "..", "..", "/uploads")));
router.use("/pdfs", express.static(path.join(__dirname, "..", "..", "/pdfs")));

module.exports = router;
