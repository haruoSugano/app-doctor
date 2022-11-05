const amqp = require("amqplib");

const createConnectionAmqp = async () => {
  const connection = await amqp.connect("amqp://" + process.env.URI);
  console.log("Rabbitmq connectado com sucesso");
  return connection;
};

module.exports = createConnectionAmqp;
