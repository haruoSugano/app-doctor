require("dotenv").config();
const amqp = require("amqplib");

const URI = `admin:admin@localhost:5672`;

const createConnectionAmqp = async () => {
  let connection = await amqp.connect("amqp://" + URI);

  connection.on("error", (e) => {
    console.log("Erroedwafdegfase: " + e);
  });

  console.log("Rabbitmq connectado com sucesso");
  return connection;
};

module.exports = createConnectionAmqp;
