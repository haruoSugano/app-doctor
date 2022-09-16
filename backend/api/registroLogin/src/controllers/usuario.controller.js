/**
 * Arquivo: controllers/usuario.controller.js
 * Descricao: arquivo responsavel pelo CRUD da classe usuario
 */

const Usuario = require("../models/usuario.model");

// Utilizando async await
exports.create = async (req, res, next) => {
    const { nome, email } = req.body;
    try {
        if (await Usuario.findOne({ email })) {
            return res.status(400).send({ error: "Usuario com este e-mail ja existe" });
        }

        if (await Usuario.findOne({ nome })) {
            return res.status(400).send({ error: "Usuario com este nome ja existe" });
        }

        const novoUsuario = new Usuario(req.body);

        const usuario = await novoUsuario.save();

        return res.status(201).send({ message: "Usuario criado com sucesso!", usuario });
    } catch (error) {
        return res.status(404).send({ message: `Erro ao criar um novo usuario` });
    }
};

exports.findAll = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find({});
        if (usuarios.length === 0) return res.status(200).send({ message: "Nenhum usuario cadastrado na base de dados" });
        return res.status(200).send({ message: "Usuarios encontrados com sucesso!", usuarios });
    } catch (error) {
        return res.status(404).send({ message: `Erro ao selecionar todos os usuarios` });
    }
};

exports.findById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findById(id);
        if (usuario === null) {
            return res.status(404).send({ error: "Usuario informado nao existe!" });
        }
        return res.status(200).send({ message: "Usuario encontrado com sucesso!", usuario });
    } catch (error) {
        return res.status(404).send({ message: `Erro ao buscar o usuario` } || error.message);
    }
};

exports.update = async (req, res, next) => {
    const { nome, email } = req.body;
    const { id } = req.params;
    try {

        if (await Usuario.findOne({ email })) {
            return res.status(400).send({ error: "Usuario com este e-mail ja existe" });
        }

        if (await Usuario.findOne({ nome })) {
            return res.status(400).send({ error: "Usuario com este nome ja existe" });
        }
        
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);

        if (usuario === null) {
            return res.status(404).send({ error: "Usuario informado nao existe!" });
        }
        return res.status(200).send({ message: `Usuario atualizado com sucesso! ${id}` });
    } catch (error) {
        return res.status(500).send({ message: `Erro ao atualizar os usuarios` || err.message });
    }
};

exports.delete = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByIdAndDelete(id);
        if (usuario === null) {
            return res.status(404).send({ error: "Usuario informado nao existe!" });
        }
        return res.status(200).send({ message: `Usuario deletado com sucesso ${id}`, usuario });
    } catch (error) {
        return res.status(500).send({ message: `Erro ao deletar os usuarios` || err.message });
    }
};
