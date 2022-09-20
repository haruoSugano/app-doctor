/**
 * Arquivo: controllers/medico.controller.js
 * Descricao: arquivo responsavel pelo CRUD da classe medico
 */

const Medico = require("../models/medico.model");

exports.create = async (req, res, next) => {
    const { email, crm } = req.body;
    try {
        if (await Medico.findOne({ email })) {
            return res.status(400).send({ error: "Medico com este e-mail ja existe" });
        }

        if (await Medico.findOne({ crm })) {
            return res.status(400).send({ error: "Medico com este CRM ja existe" });
        }

        const novoMedico = new Medico(req.body);

        const medico = await novoMedico.save();

        return res.status(201).send({ message: "Dados do medico registrado com sucesso!", medico });
    } catch (error) {
        return res.status(404).send({ message: "Erro ao registrar um novo medico" });
    }
};

exports.findAll = async (req, res, next) => {
    try {
        const medicos = await Medico.find({});
        if (medicos.length === 0) return res.status(200).send({ message: "Nenhum médico cadastrado na base de dados" });
        return res.status(200).send({ message: "Medico encontrado com sucesso!", medicos });
    } catch (error) {
        return res.status(404).send({ message: "Erro ao selecionar todos os usuarios" });
    }
};

exports.findById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const medico = await Medico.findById(id);
        
        if (medico === null) {
            return res.status(404).send({ error: "Medico informado nao existe!" });
        }

        return res.status(200).send({ message: "Medico encontrado com sucesso", medico });
    } catch (error) {
        return res.status(404).send({ message: "Erro ao buscar o usuario" } || error.message);
    }
};

exports.update = async (req, res, next) => {
    const { email, crm } = req.body;
    const { id } = req.params;
    try {

        if (await Medico.findOne({ email })) {
            return res.status(400).send({ error: "Medico com este e-mail ja existe" });
        }

        if (await Medico.findOne({ crm })) {
            return res.status(400).send({ error: "Medico com este crm ja existe" });
        }

        const medico = await Medico.findByIdAndUpdate(id, req.body);
        if (medico === null) {
            return res.status(404).send({ error: "Medico informado nao existe!" });
        }
        return res.status(200).send({ message: `Cadastro do medico atualizado com sucesso! ${id}` });
    } catch (error) {
        return res.status(500).send({ message: `Erro ao atualizar os dados do Medicos` || err.message });
    }
};

exports.delete = async (req, res, next) => {
    const { id } = req.params;
    try {
        const medico = await Medico.findByIdAndDelete(id);
        if (medico === null ) {
            return res.status(404).send({ error: "Medico informado nao existe!" });
        }
        return res.status(200).send({ message: `Medico deletado com sucesso ${id}`, medico });
    } catch (error) {
        return res.status(500).send({ message: `Erro ao deletar o Medico` || err.message });
    }
};
