const express = require("express");
const emailRoutes = require("./email.routes");
const router = express.Router();

router.use("/mail/", emailRoutes);

module.exports = router;