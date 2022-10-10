"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("receituarios", {
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
      agenda_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "agendas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable("receituarios");
  },
};

