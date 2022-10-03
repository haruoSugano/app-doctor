const Medico = require("../models/medico.model");

exports.create = async (req, res, next) => {
  let { name, email, data_nascimento, crm, telefone, endereco, numero } =
    req.body;

  try {
    if (!name) return res.status(400).send({ message: "O nome é obrigatório" });

    if (!email)
      return res.status(400).send({ message: "O e-mail é obrigatório", error });

    if (!data_nascimento)
      return res
        .status(400)
        .send({ message: "A Data de nascimento é obrigatório" });

    if (!crm) return res.status(400).send({ message: "O CRM é obrigatório" });

    if (!telefone)
      return res.status(400).send({ message: "O Telefone é obrigatório" });

    if (!endereco)
      return res.status(400).send({ message: "O endereço é obrigatório" });

    if (!numero)
      return res.status(400).send({ message: "O Numero é obrigatório" });

    if (await Medico.findOne({ where: { email } })) {
      return res.status(400).send({ error: "Este e-mail já existe" });
    }

    if (await Medico.findOne({ where: { crm } })) {
      return res.status(400).send({ error: "Este crm já existe" });
    }

    const medico = await Medico.create({
      name,
      email,
      data_nascimento,
      crm,
      telefone,
      endereco,
      numero,
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
  try {
    const { medico_id } = req.params;
    const { name, email, data_nascimento, crm, telefone, endereco, numero } =
      req.body;

    if (await Medico.findOne({ where: { email } })) {
      return res.status(400).send({ error: "Este e-mail já existe" });
    }

    if (await Medico.findOne({ where: { crm } })) {
      return res.status(400).send({ error: "Este crm já existe" });
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
