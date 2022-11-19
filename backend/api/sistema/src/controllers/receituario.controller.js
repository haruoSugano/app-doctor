const Medico = require("../models/medico.model");
const Paciente = require("../models/paciente.model");
const Agenda = require("../models/agenda.model");
const Receituario = require("../models/receituario.model");
const pdf = require("../../shared/pdf/receituario");
const publish = require("../config/rabbit/publishReceituario");
const receituarioMail = require("../../shared/email/receituarioMail");
const urlApp = `http://localhost:4200/`;

exports.create = async (req, res, next) => {
  const { descricao, agenda_id, medico_id, paciente_id } = req.body;
  const url = `${req.protocol}://${req.get("host")}`;
  try {
    const paciente = await Paciente.findByPk(paciente_id);

    const medico = await Medico.findByPk(medico_id);

    const agenda = await Agenda.findByPk(agenda_id);

    if (!medico) {
      return res.status(400).send({ message: "Medico não encontrado" });
    }

    if (!paciente) {
      return res.status(400).send({ message: "Paciente não encontrado" });
    }

    if (!agenda) {
      return res.status(400).send({ message: "Agendamento não encontrado" });
    }

    if (!descricao) {
      return res.status(400).send({ message: "Descricão é obrigatório" });
    }

    const arquivo_pdf = await pdf(paciente, medico, agenda, descricao);
  
    const receituario = await Receituario.create({
      descricao,
      medico_id,
      paciente_id,
      agenda_id,
      pdf: `${url}/${arquivo_pdf}.pdf`,
    });
    
    publish(
      receituarioMail(paciente, medico, agenda, `${arquivo_pdf}.pdf`, urlApp),
      "receituario"
    );

    return res.status(201).send({ receituario });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao cadastrar o paciente" });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const receituario = await Receituario.findAll({
      include: [
        {
          model: Paciente,
          as: "pacientes",
        },
        {
          model: Medico,
          as: "medicos",
        },
        {
          model: Agenda,
          as: "agendas",
        },
      ],
    });

    return res.status(200).send({ receituario });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os receituarios" });
  }
};

exports.findAllPaciente = async (req, res, next) => {
  const { email } = req.query;
  try {
    const receituario = await Receituario.findAll({
      include: [
        {
          model: Paciente,
          as: "pacientes",
          required: true,
          where: {
            email: email,
          },
        },
        {
          model: Medico,
          as: "medicos",
        },
        {
          model: Agenda,
          as: "agendas",
        },
      ],
    });

    return res.status(200).send({ receituario });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os receituarios" });
  }
};

exports.findById = async (req, res, next) => {
  const { receituario_id } = req.params;
  try {
    const receituario = await Receituario.findByPk(receituario_id);

    if (!receituario) {
      return res.status(400).send({ message: "Receituario nao encontrado" });
    }

    return res
      .status(200)
      .send({ message: "Receituario encontrado com sucesso!", receituario });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os receituarios" });
  }
};

exports.findByMedico = async (req, res, next) => {
  const { medico_id } = req.params;
  try {
    let medico = await Medico.findByPk(medico_id);

    if (!medico) {
      return res.status(400).send({ error: "Medico não encontrado" });
    }

    medico = await Medico.findByPk(medico_id, {
      include: { association: "receituarios" },
    });

    return res.status(200).send({ medico });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os receituarios" });
  }
};

exports.findByPaciente = async (req, res, next) => {
  const { paciente_id } = req.params;
  try {
    let paciente = await Paciente.findByPk(paciente_id);

    if (!paciente) {
      return res.status(400).send({ error: "Paciente não encontrado" });
    }

    paciente = await Paciente.findByPk(paciente_id, {
      include: { association: "receituarios" },
    });

    return res.status(200).send({ paciente });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os receituarios" });
  }
};

exports.update = async (req, res, next) => {
  const { medico_id, paciente_id, receituario_id } = req.params;
  const { descricao } = req.body;
  try {
    const medico = await Medico.findByPk(medico_id);
    const paciente = await Paciente.findByPk(paciente_id);
    const receituario = await Receituario.findByPk(receituario_id);

    if (!medico) {
      return res.status(400).send({ error: "Médico não encontrado" });
    }

    if (!paciente) {
      return res.status(400).send({ error: "Paciente não encontrado" });
    }

    if (!receituario) {
      return res.status(400).send({ error: "Receituário não encontrado" });
    }

    if (!descricao) {
      return res.status(400).send({ message: "Campo descrição é obrigatório" });
    }

    const receituario_atualizado = await Receituario.update(
      {
        descricao: descricao,
        medico_id: medico_id,
        paciente_id: paciente_id,
      },
      {
        where: { id: receituario_id },
      }
    );

    return res.status(201).send({
      message: "Receituário atualizado com sucesso",
      receituario_atualizado,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu algum erro ao atualizar os dados" });
  }
};

exports.delete = async (req, res, next) => {
  const { receituario_id } = req.params;
  try {
    const receituario = await Receituario.findByPk(receituario_id);

    if (!receituario) {
      return res.status(400).send({ message: "Receituario não encontrado" });
    }

    await Receituario.destroy({
      where: { id: receituario_id },
    });

    return res
      .status(200)
      .send({ message: "Receituario excluído com sucesso" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu algum erro ao deletar o receituário", error });
  }
};
