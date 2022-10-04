const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Medico = require("../models/medico.model");

const connection = new Sequelize(dbconfig);

Medico.init(connection);

module.exports = connection;
