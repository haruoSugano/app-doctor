const express = require("express");
const usuarioRoutes = require("./usuario.routes");
const medicoRoutes = require("./medico.routes");

const router = express.Router();

router.use("/api/", usuarioRoutes);
router.use("/api/", medicoRoutes);

module.exports = router;
