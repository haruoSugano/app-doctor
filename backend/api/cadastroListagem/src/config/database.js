/**
 * Arquivo: models/usuario.js
 * Descricao: arquivo responsavel pelas connectionStrings da aplicação: Mongodb
 */
const mongoose = require("mongoose");
const localDatabase = require("./localDatabase.json");

mongoose.connect(localDatabase.localURL, { useNewUrlParser: true }).then(() => {
    console.log("A base de dados foi conectada com sucesso!");
}, (err) => {
    console.log(`Erro ao conectar com a base de dados: ${err}`);
    process.exit();
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
