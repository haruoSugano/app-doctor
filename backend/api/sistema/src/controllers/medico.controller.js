const Medico = require("../models/medico.model");
const rabbitmq = require("../config/rabbit/");

exports.create = async (req, res, next) => {
  let { name, data_nascimento, crm, telefone, endereco, numero } = req.body;
  const { path: url } = req.file;

  try {
    if (
      !name ||
      !data_nascimento ||
      !crm ||
      !telefone ||
      !endereco ||
      !numero ||
      !req.file
    ) {
      return res
        .status(400)
        .send({ message: "É necessário preencher todos os dados do médico!" });
    }

    const medico = await Medico.create({
      name,
      data_nascimento,
      crm,
      telefone,
      endereco,
      numero,
      assinatura: url,
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
  const { name, data_nascimento, crm, telefone, endereco, numero } = req.body;
  const { path: url } = req.file;
  try {
    if (await Medico.findOne({ where: { crm } })) {
      return res.status(400).send({ error: "Este crm já existe" });
    }

    const medico = await Medico.upsert({
      id: medico_id,
      name,
      data_nascimento,
      crm,
      telefone,
      endereco,
      numero,
      assinatura: url,
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
