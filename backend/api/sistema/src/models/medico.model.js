const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        crm: DataTypes.INTEGER,
        telefone: DataTypes.INTEGER,
        endereco: DataTypes.STRING,
        numero: DataTypes.STRING,
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
