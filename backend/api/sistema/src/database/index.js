const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Medico = require("../models/medico.model");
const Paciente = require("../models/paciente.model");

const connection = new Sequelize(dbconfig);

Medico.init(connection);
Paciente.init(connection);

Medico.associate(connection.models);
Paciente.associate(connection.models);

module.exports = connection;
