const mongoose = require("../config/database");

const PacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 255
    },
    dataNascimento: {
        type: Date,
        required: true,
        maxlength: 3,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        maxlength: 255
    },
    endereco: {
        type: String,
        required: true,
        maxlength: 255
    },
    numero: {
        type: String,
        required: true,
        maxlength: 255
    },
    complemento: {
        type: String,
        maxlength: 255
    },
    cidade: {
        type: String,
        required: true,
        maxlength: 50
    },
    estado: {
        type: String,
        required: true,
        maxlength: 5
    },
    cep: {
        type: Number,
        required: true,
        maxlength: 100
    },
    telefone: {
        type: Number,
        required: true,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
    collection: "Paciente",
});

const Paciente = mongoose.model("Paciente", PacienteSchema);

module.exports = Paciente;
