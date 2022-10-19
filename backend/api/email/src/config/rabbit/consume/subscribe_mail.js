const sendMail = require("../../../mails/sendMail");
const createConnectionAmqp = require("../index");

module.exports = async () =>
  createConnectionAmqp()
    .then((conn) => conn.createChannel())
    .then(async (ch) => {
      console.log("Channel created");

      const queue = "email";

      console.log(
        "[*] Waiting for messages in %s. To exit press CTRL+C",
        queue
      );
      await ch.assertQueue(queue, { durable: false });
      await ch.consume(queue, async (msg) => {
        if (msg != null) {
          let mensagem = JSON.parse(msg.content.toString());
          console.log("%s Received %s", new Date(), mensagem);

          sendMail(mensagem, (err, res) => {
            if (!err) {
              console.log(res);
              ch.ack(msg);
            }
          });
        }
      });
    });
