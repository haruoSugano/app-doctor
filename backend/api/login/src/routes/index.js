const express = require("express");
const usuarioRoutes = require("./usuario.routes");

const router = express.Router();

router.use("/api/", usuarioRoutes);

module.exports = router;
