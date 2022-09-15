/**
 * Arquivo: models/usuario.js
 * Descricao: arquivo responsavel pelo modelo da classe "Usuario"
 */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        maxlength: 255
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        maxlength: 255,
    },
    password: {
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

UsuarioSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
