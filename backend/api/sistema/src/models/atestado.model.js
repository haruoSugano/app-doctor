const { Model, DataTypes } = require("sequelize");

class Atestado extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING,
        pdf: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "atestados",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Medico, {
      foreignKey: "medico_id",
      as: "medicos",
    });
    this.belongsTo(models.Paciente, {
      foreignKey: "paciente_id",
      as: "pacientes",
    });
    this.belongsTo(models.Agenda, {
      foreignKey: "agenda_id",
      as: "agendas"
    });
  }
}

module.exports = Atestado;
