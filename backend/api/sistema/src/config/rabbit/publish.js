const createConnectionAmqp = require("./index");

module.exports = async (message, queue) => {
  createConnectionAmqp()
    .then((conn) => conn.createChannel())
    .then(async (ch) => {
      console.log("Channel created: " + queue);

      ch.assertQueue(queue, { durable: false });

      console.log("Sending message");

      ch.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
        persistent: true,
      });
      console.log("[X] sent ", message);
    });
};
