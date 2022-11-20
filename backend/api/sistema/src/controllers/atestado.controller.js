const Medico = require("../models/medico.model");
const Paciente = require("../models/paciente.model");
const Agenda = require("../models/agenda.model");
const Atestado = require("../models/atestado.model");
const pdf = require("../../shared/pdf/atestado");
const atestadoMail = require("../../shared/email/atestadoMail");
const publish = require("../config/rabbit/publishDelay");
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

    const atestado = await Atestado.create({
      descricao,
      medico_id,
      paciente_id,
      agenda_id,
      pdf: `${url}/${arquivo_pdf}`,
    });

    publish(
      atestadoMail(paciente, medico, agenda, arquivo_pdf, urlApp),
      "atestado"
    );

    return res.status(201).send({ atestado });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao gerar o atestado" });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const atestado = await Atestado.findAll({
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

    return res.status(200).send({ atestado });
  } catch (error) {
    res.status(500).send({ error: "Ocorreu um erro ao buscar os Atestados" });
  }
};

exports.findAllPaciente = async (req, res, next) => {
  const { email } = req.query;
  try {
    const atestado = await Atestado.findAll({
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

    return res.status(200).send({ atestado });
  } catch (error) {
    res.status(500).send({ error: "Ocorreu um erro ao buscar os Atestados" });
  }
};

exports.delete = async (req, res, next) => {
  const { atestado_id } = req.params;
  try {
    const atestado = await Atestado.findByPk(atestado_id);

    if (!atestado) {
      return res.status(400).send({ message: "Atestado não encontrado" });
    }

    await Atestado.destroy({
      where: { id: atestado_id },
    });

    return res.status(200).send({ message: "Atestado excluído com sucesso" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu algum erro ao deletar o atestado", error });
  }
};
