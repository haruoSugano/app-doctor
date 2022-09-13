const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); //indicando a utilizando o bodyParser
app.use(bodyParser.urlencoded({ extended: false})); //para quando é passado via url, para consiguir decodar o parametro

// Repassar o app -> porque o app é um objeto que é definido uma vez, assim é necessário repassar várias vezes em todos os outros arquivos
// Se criarmos outro app em outro lugar, pois terá duas aplicação ou mais rodando nesta plataforma
require('./controllers/authController')(app);

app.listen(3000, () => {
  console.log("Porta:3000 is running");
});
