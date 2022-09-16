const mongoose = require("../config/database");

const ReceituarioSchema = new mongoose.Schema({
    
});

const Receituario = mongoose.model("Receituario", ReceituarioSchema);

module.exports = Receituario;
