const express = require("express");
const subscribe_mail = require("../config/rabbit/consume/subscribe_mail");
const router = express.Router();

subscribe_mail("cadastro");
subscribe_mail("medico");
subscribe_mail("paciente");
subscribe_mail("agendamento");
subscribe_mail("receituario");
subscribe_mail("atestado");

module.exports = router;