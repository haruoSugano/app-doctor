const express = require("express");
const medicoRoutes = require("./medico.routes");
const router = express.Router();

router.use("/api/", medicoRoutes);

module.exports = router;
