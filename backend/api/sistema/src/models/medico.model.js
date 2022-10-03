const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        crm: DataTypes.INTEGER,
        telefone: DataTypes.INTEGER,
        endereco: DataTypes.STRING,
        numero: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Medico;
