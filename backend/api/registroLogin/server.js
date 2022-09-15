/**
 * Arquivo: server.js
 * Descricao: arquivo responsável por toda a configuração a aplicacao
 * server.js -> app.js chama as rotas 
 */
const app = require("./src/app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Aplicacao executando na porta: ", port);
});
