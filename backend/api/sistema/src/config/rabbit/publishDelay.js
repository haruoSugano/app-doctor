const createConnectionAmqp = require("./index");

module.exports = async (message, queue) => {
  createConnectionAmqp()
    .then((conn) => conn.createChannel())
    .then(async (ch) => {
      console.log("Channel created: " + queue);

      ch.assertQueue(queue, { durable: false });

      console.log("Sending message");

      await delay(3);

      ch.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
        persistent: true,
      });
      console.log("[X] sent ", message);
    });

  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }
};
