const { Model, DataTypes } = require("sequelize");

class Receituario extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "receituarios",
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
  }
}

module.exports = Receituario;
