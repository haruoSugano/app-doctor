const { Model, DataTypes } = require("sequelize");

class Agenda extends Model {
  static init(sequelize) {
    super.init(
      {
        data: DataTypes.DATE,
        hora: DataTypes.TIME,
        status_agendamento: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "agendas",
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
    this.hasMany(models.Receituario, {
      foreignKey: "agenda_id",
      as: "receituarios"
    });
    this.hasMany(models.Receituario, {
      foreignKey: "agenda_id",
      as: "atestados"
    });
  }
}

module.exports = Agenda;
