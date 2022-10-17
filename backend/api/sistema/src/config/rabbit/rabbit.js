const amqp = require("amqplib");

const URI = "admin:admin@localhost:5672"

const createConnectionAmqp = async () => {
    const connection = await amqp.connect("amqp://" + URI);
    console.log("Rabbitmq conectado com sucesso");
    return connection;
}

module.exports = createConnectionAmqp;
