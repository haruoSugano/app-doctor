/**
 * Arquivo: models/usuario.js
 * Descricao: arquivo responsavel pelas connectionStrings da aplicação: Mongodb
 */
require("dotenv").config();
const { ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then(
    () => {
      console.log("A base de dados do MongoDB foi conectada com sucesso!", new Date());
    },
    (err) => {
      console.log(`Erro ao conectar com a base de dados: ${err}`);
      process.exit();
    }
  );

mongoose.Promise = global.Promise;

module.exports = mongoose;
