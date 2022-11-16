require("dotenv").config();
const Medico = require("../models/medico.model");

exports.create = async (req, res, next) => {
  let { name, email, data_nascimento, crm, telefone, endereco, numero, cidade, estado, cep } = req.body;
  const { path: url } = req.file;
  const imgURL = `${req.protocol}://${req.get('host')}/`;
  
  try {
    if (
      !name ||
      !email ||
      !data_nascimento ||
      !crm ||
      !telefone ||
      !endereco ||
      !numero ||
      !cidade ||
      !estado ||
      !cep ||
      !req.file
    ) {
      return res
        .status(400)
        .send({ message: "É necessário preencher todos os dados do médico!" });
    }

    const medico = await Medico.create({
      name,
      email,
      data_nascimento,
      crm,
      telefone,
      endereco,
      numero,
      cidade,
      estado,
      cep,
      assinatura: `${imgURL}${url}`,
    });

    return res
      .status(201)
      .send({ message: "Medico cadastrado com sucesso!", medico });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao cadastrar o médico" });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const medicos = await Medico.findAll();

    if (!medicos) {
      return res
        .status(400)
        .send({ message: "Nenhum médico cadastrado na base de dados" });
    }

    return res.status(200).send(medicos);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os medicos", error });
  }
};

exports.findById = async (req, res, next) => {
  try {
    const { medico_id } = req.params;

    const medico = await Medico.findByPk(medico_id);

    if (!medico) {
      return res.status(400).send({ error: "Médico não encontrado" });
    }

    return res.status(200).send(medico);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os medicos", error });
  }
};

exports.update = async (req, res, next) => {
  const { medico_id } = req.params;
  const { name, email, data_nascimento, crm, telefone, endereco, numero, cidade, estado, cep, assinatura } = req.body;
  const imgURL = `${req.protocol}://${req.get('host')}/`;
  let url = assinatura;
  try {
    if (req.file) url = req.file.path;

    if ( !name || !email || !data_nascimento || !crm || !telefone || !endereco || !numero || !cidade || !estado || !cep ||!url) {
      return res.status(400).send({ message: "É necessário preencher todos os dados do médico!" });
    }

    const medico = await Medico.upsert({
      id: medico_id,
      name,
      email,
      data_nascimento,
      crm,
      telefone,
      endereco,
      numero,
      cidade,
      estado,
      cep,
      assinatura: assinatura ? assinatura : `${imgURL}${url}`,
    });

    return res
      .status(200)
      .send({ message: "Dados do médico atualizado.", medico });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao atualizar os dados", error });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { medico_id } = req.params;
    const medico = await Medico.findByPk(medico_id);

    if (!medico) {
      return res.status(400).send({ error: "O medico não encontrado" });
    }

    await medico.destroy({
      where: {
        id: medico_id,
      },
    });

    return res
      .status(200)
      .send({ message: "Medico deletado da base de dados" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao deletar o medico", error });
  }
};
