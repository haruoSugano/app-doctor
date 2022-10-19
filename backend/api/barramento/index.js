const express = require("express");
const producerQueue = require("../sistema/src/config/rabbit/rabbit");
const consumerQueue = require("../login/src/config/rabbit/rabbit");

const app = express();

app.use(express.json());

app.post("/message", async (req, res) => {
  try {
    const producer = await producerQueue(req.body);
    res.status(202).send(producer);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

consumerQueue();

app.listen(10000, () => {
  console.log("listening on port 10000");
});
