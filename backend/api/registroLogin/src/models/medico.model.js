const mongoose = require("../config/database");

const MedicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxLength: 255
    },
    dataNascimento: {
        type: Date,
        required: true,
        maxLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        maxLength: 255
    },
    crm: {
        type: Number,
        required: true,
        unique: true,
        maxLength: 255,
    },
    endereco: {
        type: String,
        required: true,
        maxLength: 255
    },
    numero: {
        type: String,
        required: true,
        maxLength: 255
    },
    complemento: {
        type: String,
        maxLength: 255
    },
    cidade: {
        type: String,
        required: true,
        maxLength: 50
    },
    estado: {
        type: String,
        uppercase: true,
        required: true,
        maxLength: 5
    },
    cep: {
        type: Number,
        required: true,
        maxLength: 8
    },
    telefone: {
        type: Number,
        required: true,
        maxLength: 11
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
    collection: "Medico",
});

const Medico = mongoose.model("Medico", MedicoSchema);

module.exports = Medico;
