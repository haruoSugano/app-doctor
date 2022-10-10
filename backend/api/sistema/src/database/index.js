const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Medico = require("../models/medico.model");
const Paciente = require("../models/paciente.model");
const Receituario = require("../models/receituario.model");
const Agenda = require("../models/agenda.model");

const connection = new Sequelize(dbconfig);

connection.authenticate().then(() => {
    console.log("Conectado com sucesso na base de dados...");
}).catch((error) => {
    console.error("Não foi possível conectar com o banco de dados: ", error);
});

Medico.init(connection);
Paciente.init(connection);
Agenda.init(connection);
Receituario.init(connection);

Medico.associate(connection.models);
Paciente.associate(connection.models);
Agenda.associate(connection.models);
Receituario.associate(connection.models);

module.exports = connection;
