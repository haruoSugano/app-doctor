require("dotenv").config();
const amqp = require("amqplib");

const URI = `${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@localhost:5672`;

const createConnectionAmqp = async () => {
  let connection = await amqp.connect("amqp://" + URI);

  connection.on("error", (e) => {
    console.log("Erro: " + e);
  });

  console.log("Rabbitmq connectado com sucesso");
  return connection;
};

module.exports = createConnectionAmqp;
