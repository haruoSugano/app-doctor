const { Op } = require("sequelize");
const Medico = require("../models/medico.model");
const Paciente = require("../models/paciente.model");
const Agenda = require("../models/agenda.model");
const agendaMail = require("../../shared/email/agendaMail");
const publish = require("../config/rabbit/publish");
const url = `http://localhost:4200/`;

exports.create = async (req, res, next) => {
  const { data, hora, cpf, medico_id } = req.body;
  try {
    const pacientes = await Paciente.findAll();
    let medico = await Medico.findByPk(medico_id);

    const paciente = pacientes.filter((paciente) => paciente.cpf == cpf);
    const paciente_id = paciente[0].id;

    if (!medico) {
      return res.status(400).send({ message: "Medico não encontrado" });
    }

    if (!paciente) {
      return res.status(400).send({ message: "Paciente não encontrado" });
    }

    if (!data || !hora) {
      return res.status(400).send({ message: "Data e a hora é obrigatório" });
    }

    const agenda = await Agenda.create({
      data,
      hora,
      medico_id,
      paciente_id,
    });

    publish(agendaMail(agenda, paciente, medico, url), "agendamento");

    return res.status(201).send({ agenda });
  } catch (error) {
    return res.status(500).send({ error: "Ocorreu um erro no agendamento" });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const agendas = await Agenda.findAll({
      include: [
        {
          model: Paciente,
          as: "pacientes",
          attributes: ["cpf"],
        },
        {
          model: Medico,
          as: "medicos",
          attributes: ["crm"],
        },
      ],
    });

    return res.status(200).send({ agendas });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os agendamentos" });
  }
};

exports.findAllStatus = async (req, res, next) => {
  try {
    const agendas = await Agenda.findAll({
      include: [
        {
          model: Paciente,
          as: "pacientes",
          attributes: ["cpf"],
        },
        {
          model: Medico,
          as: "medicos",
          attributes: ["crm"],
        },
      ],
      where: {
        [Op.or]: [
          { status_agendamento: "PENDENTE" },
          { status_agendamento: "REMARCADO" },
        ],
      },
    });

    return res.status(200).send({ agendas });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os agendamentos" });
  }
};

exports.findByCpf = async (req, res, next) => {
  try {
    const agenda = await Agenda.findAll();
    if (!agenda || agenda.length === 0) {
      return res.status(400).send({ message: "Nenhum agendamento cadastrado" });
    }

    return res
      .status(200)
      .send({ message: "Agendamentos encontrado com sucesso!", agenda });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar os agendamentos" });
  }
};

exports.findById = async (req, res, next) => {
  const { agenda_id } = req.params;
  try {
    const agenda = await Agenda.findByPk(agenda_id, {
      include: [
        {
          model: Paciente,
          as: "pacientes",
        },
        {
          model: Medico,
          as: "medicos",
        },
      ],
    });

    if (!agenda) {
      return res.status(400).send({ message: "Agendamento não encontrado" });
    }

    return res.status(200).send(agenda);
  } catch (error) {
    res.status(500).send({ error: "Ocorreu um erro ao buscar o agendamento" });
  }
};

exports.findByMedico = async (req, res, next) => {
  const { medico_id } = req.params;
  try {
    let medico = await Medico.findByPk(medico_id);

    if (!medico) {
      res
        .status(400)
        .send({ error: "Ocorreu um erro ao buscar o agendamento" });
    }

    medico = await Medico.findByPk(medico_id, {
      include: { association: "agendas" },
    });

    return res.status(200).send({ medico });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar o agendamento" });
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
      include: { association: "agendas" },
    });

    console.log(paciente);

    return res.status(200).send({ paciente });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar o agendamento" });
  }
};

exports.updateStatus = async (req, res, next) => {
  const { agenda_id } = req.params;
  const { status_agendamento } = req.body;
  try {
    const agenda = await Agenda.findByPk(agenda_id);

    if (!agenda) {
      return res.status(400).send({ error: "agendamento não encontrado" });
    }

    if (!status_agendamento) {
      return res
        .status(400)
        .send({ message: "É necessário informar a situação do agendamento" });
    }

    await Agenda.update(
      {
        status_agendamento,
      },
      {
        where: { id: agenda_id },
      }
    );

    return res
      .status(201)
      .send({ message: "Agendamento atualizado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu algum erro ao atualizar os dados" });
  }
};

exports.update = async (req, res, next) => {
  const { agenda_id } = req.params;
  const { data, hora } = req.body;
  try {
    const agenda = await Agenda.findByPk(agenda_id);

    if (!agenda) {
      return res.status(400).send({ error: "agendamento não encontrado" });
    }

    if (!data || !hora) {
      return res.status(400).send({
        message: "É necessário informar a hora e a data do agendamento",
      });
    }

    await Agenda.update(
      {
        data: data,
        hora: hora,
        status_agendamento: "REMARCADO",
      },
      {
        where: { id: agenda_id },
      }
    );

    return res
      .status(201)
      .send({ message: "Agendamento atualizado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu algum erro ao atualizar os dados" });
  }
};

exports.delete = async (req, res, next) => {
  const { agenda_id } = req.params;
  try {
    const agenda = await Agenda.findByPk(agenda_id);

    if (!agenda) {
      return res.status(400).send({ message: "Agendamento não encontrado" });
    }

    await Agenda.destroy({
      where: { id: agenda_id },
    });

    return res
      .status(200)
      .send({ message: "Agendamento excluído com sucesso" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Ocorreu algum erro ao deletar o agenda", error });
  }
};
