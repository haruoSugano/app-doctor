/**
 * Arquivo: models/usuario.js
 * Descricao: arquivo responsavel pelo modelo da classe "Usuario"
 */

const mongoose = require("../config/database");

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        maxlength: 255,
    },
    senha: {
        type: String,
        required: true,
        select: false,
        maxlength: 255,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    isMedico: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
    collection: "Usuarios",
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
