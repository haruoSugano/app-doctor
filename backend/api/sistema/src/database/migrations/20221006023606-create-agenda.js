"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("agendas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      medico_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "medicos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pacientes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_agendamento: {
        type: Sequelize.STRING,
        defaultValue: "PENDENTE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("agendas");
  },
};
