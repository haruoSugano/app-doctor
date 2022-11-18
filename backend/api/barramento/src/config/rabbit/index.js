require("dotenv").config();
const amqp = require("amqplib");

const URI = process.env.URI;

const createConnectionAmqp = async () => {
  let connection = await amqp.connect(URI || process.env.CLOUD_AMQP);

  connection.on("error", (e) => {
    console.log("Erro: " + e);
  });

  console.log("Rabbitmq connectado com sucesso");
  return connection;
};

module.exports = createConnectionAmqp;
