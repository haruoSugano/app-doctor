const { Model, DataTypes } = require("sequelize");

class Paciente extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        cpf: DataTypes.INTEGER,
        telefone: DataTypes.INTEGER,
        endereco: DataTypes.STRING,
        numero: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        cep: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "pacientes",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Medico, {
      foreignKey: "medico_id",
      as: "medicos",
    });
  }
}

module.exports = Paciente;
