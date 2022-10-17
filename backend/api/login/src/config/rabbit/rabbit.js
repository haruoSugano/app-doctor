const amqp = require("amqplib");

const URI = "admin:admin@localhost:5672";

const createConnectionAmqp = async () => {
  const connection = await amqp.connect("amqp://" + URI);
  console.log("Rabbitmq connectado com sucesso");
  return connection;
};

module.exports = async () => createConnectionAmqp()
  .then((conn) => conn.createChannel())
  .then( async (ch) => {
    console.log("Channel created");

    const queue = "medico";

    await ch.assertQueue(queue);
    await ch.consume(queue, async (msg) => {
        if (msg != null) {
            console.log("%s Received %s", new Date(), msg.content.toString());
            return await ch.ack(msg);
        }
    })
  });
