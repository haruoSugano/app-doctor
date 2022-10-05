const { Op } = require("sequelize");

const Medico = require("../models/medico.model");
const Paciente = require("../models/paciente.model");

exports.create = async (req, res, next) => {
  const { medico_id } = req.params;
  const {
    name,
    email,
    data_nascimento,
    cpf,
    telefone,
    endereco,
    numero,
    estado,
    cidade,
    cep,
  } = req.body;

  try {
    const medico = await Medico.findByPk(medico_id);

    if (!medico) {
      return res.status(400).send({ error: "Médico não encontrado" });
    }

    if (!name) {
      return res.status(400).send({ message: "Campo nome é obrigatório" });
    }

    if (!email) {
      return res.status(400).send({ message: "Campo e-mail é obrigatório" });
    }

    if (!data_nascimento) {
      return res
        .status(400)
        .send({ message: "Campo data de nascimento é obrigatório" });
    }

    if (!cpf) {
      return res.status(400).send({ message: "Campo cpf é obrigatório" });
    }

    if (!telefone) {
      return res.status(400).send({ message: "Campo telefone é obrigatório" });
    }

    if (!endereco) {
      return res.status(400).send({ message: "Campo endereco é obrigatório" });
    }

    if (!numero) {
      return res.status(400).send({ message: "Campo numero é obrigatório" });
    }

    if (!estado) {
      return res.status(400).send({ message: "Campo estado é obrigatório" });
    }

    if (!cidade) {
      return res.status(400).send({ message: "Campo cidade é obrigatório" });
    }

    if (!cep) {
      return res.status(400).send({ message: "Campo cep é obrigatório" });
    }

    if (await Paciente.findOne({ where: { email } })) {
      return res.status(400).send({ message: "Este e-mail já existe" });
    }

    if (await Paciente.findOne({ where: { cpf } })) {
      return res.status(400).send({ message: "CPF já existe" });
    }

    const paciente = await Paciente.create({
      name,
      email,
      data_nascimento,
      cpf,
      telefone,
      endereco,
      numero,
      estado,
      cidade,
      cep,
      medico_id,
    });

    return res.status(201).send({ paciente });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao cadastrar o paciente" });
  }
};

exports.findByMedico = async (req, res, next) => {
  const { medico_id } = req.params;

  try {
    let medico = await Medico.findByPk(medico_id);

    if (!medico) {
      return res.status(400).send({ error: "Médico não encontrado" });
    }

    medico = await Medico.findByPk(medico_id, {
      include: { association: "pacientes" },
    });

    return res.status(200).send({ medico });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar o paciente" });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const pacientes = await Paciente.findAll();

    return res.status(200).send({ pacientes });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os pacientes" });
  }
};

exports.findByPaciente = async (req, res, next) => {
  const { paciente_id } = req.params;
  try {
    const paciente = await Paciente.findByPk(paciente_id);

    if (!paciente) {
      return res.status(400).send({ message: "Paciente não encontrado"});
    }

    return res.status(200).send({ message: "Paciente encontrado com sucesso.", paciente});
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar o paciente" });
  }
}

exports.update = async (req, res, next) => {
  const { paciente_id } = req.params;

  const {
    name,
    email,
    data_nascimento,
    cpf,
    telefone,
    endereco,
    numero,
    estado,
    cidade,
    cep,
  } = req.body;

  try {
    const paciente = await Paciente.findByPk(paciente_id);

    const medico_id = paciente.medico_id;

    if (!paciente) {
      return res.status(400).send({ error: "Paciente não encontrado" });
    }

    if (!name) {
      return res.status(400).send({ message: "Campo nome é obrigatório" });
    }

    if (!email) {
      return res.status(400).send({ message: "Campo e-mail é obrigatório" });
    }

    if (!data_nascimento) {
      return res
        .status(400)
        .send({ message: "Campo data de nascimento é obrigatório" });
    }

    if (!cpf) {
      return res.status(400).send({ message: "Campo cpf é obrigatório" });
    }

    if (!telefone) {
      return res.status(400).send({ message: "Campo telefone é obrigatório" });
    }

    if (!endereco) {
      return res.status(400).send({ message: "Campo endereco é obrigatório" });
    }

    if (!numero) {
      return res.status(400).send({ message: "Campo numero é obrigatório" });
    }

    if (!estado) {
      return res.status(400).send({ message: "Campo estado é obrigatório" });
    }

    if (!cidade) {
      return res.status(400).send({ message: "Campo cidade é obrigatório" });
    }

    if (!cep) {
      return res.status(400).send({ message: "Campo cep é obrigatório" });
    }

    // if (await Paciente.findOne({ where: { email } }) ) {
    //   return res.status(400).send({ message: "Este e-mail já existe" });
    // }

    // if (await Paciente.findOne({ where: { cpf } })) {
    //   return res.status(400).send({ message: "CPF já existe" });
    // }

    const paciente_atualizado = await Paciente.update(
      {
        name: name,
        email: email,
        data_nascimento: data_nascimento,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        numero: numero,
        estado: estado,
        cidade: cidade,
        cep: cep,
        medico_id: medico_id,
      },
      { where: { id: paciente_id } }
    );

    return res.status(201).send({ paciente_atualizado });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao atualizar os dados deste paciente" });
  }
};

exports.delete = async (req, res, next) => {
  const { paciente_id } = req.params;
  try {
    const paciente = await Paciente.findByPk(paciente_id);

    if (!paciente) {
      return res.status(400).send({ message: "Paciente não encontrado"});
    }

    await Paciente.destroy({
      where: { id: paciente_id },
    });

    return res.status(200).send({ message: "Paciente excluido na base de dados"});

  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao deletar o paciente" });
  }
};
