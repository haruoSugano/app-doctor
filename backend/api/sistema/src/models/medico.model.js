const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        crm: DataTypes.STRING,
        telefone: DataTypes.STRING,
        endereco: DataTypes.STRING,
        numero: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        cep: DataTypes.STRING,
        assinatura: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "medicos",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Receituario, {
      foreignKey: "medico_id",
      as: "receituarios"
    });
    this.hasMany(models.Agenda, {
      foreignKey: "medico_id",
      as: "agendas"
    });
  }
}

module.exports = Medico;
