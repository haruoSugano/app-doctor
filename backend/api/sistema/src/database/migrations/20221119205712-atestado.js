"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("atestados", {
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
        allowNull: true,
      },
      pdf: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable("atestados");
  },
};
