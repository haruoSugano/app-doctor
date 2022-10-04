const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medico.controller");
const multer = require("multer");
const multerMiddleware = require("../middlewares/multer.middleware");

const upload = multer(multerMiddleware);

router.post("/medicos", upload.single("file"), medicoController.create);
router.get("/medicos", medicoController.findAll);
router.get("/medicos/:medico_id", medicoController.findById);
router.put("/medicos/:medico_id", upload.single("file"), medicoController.update);
router.delete("/medicos/:medico_id", medicoController.delete);

module.exports = router;
