require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log("Aplicacao executando na porta: ", port);
});
