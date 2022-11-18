const amqp = require("amqplib");

const URI = process.env.CLOUD_AMQP;

const createConnectionAmqp = async () => {
    const connection = await amqp.connect(URI);
    console.log("Rabbitmq conectado com sucesso");
    return connection;
}

module.exports = createConnectionAmqp;
