const express = require("express");
const subscribe_mail = require("../config/rabbit/consume/subscribe_mail");
const router = express.Router();

router.get("/", (req, res) => {
    subscribe_mail();
    return res.send("Simple Mail Delevery");
});

module.exports = router;