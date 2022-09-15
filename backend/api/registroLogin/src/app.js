/**
 * Arquivo: src/app.js
 * Descricao: arquivo responsavel pela toda configuracao do backend
 */


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// importar o arquivo database
const localDatabase = require("./config/database");

mongoose.Promise = global.Promise;

// Conexão com a base de dados
mongoose.connect(localDatabase.local.localUrl, { useNewUrlParser: true }).then(() => {
    console.log("A base de dados foi conectada com sucesso!");
}, (err) => {
    console.log(`Erro ao conectar com a base de dados: ${err}`);
    process.exit();
});

// Rotas
const usuarioRoute = require("./routes/usuario.routes");

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/", usuarioRoute); //localhost:3000/api/usuarios

module.exports = app;
