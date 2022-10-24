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
        status_consulta: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "pacientes",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Receituario, {
      foreignKey: "paciente_id",
      as: "receituarios",
    });
    this.hasMany(models.Agenda, {
      foreignKey: "paciente_id",
      as: "agendas"
    });
  }
}
module.exports = Paciente;
