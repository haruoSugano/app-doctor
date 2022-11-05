require("dotenv").config();
const path = require("path");
const Paciente = require("../models/paciente.model");
// const publish = require("../config/rabbit/publish");

exports.create = async (req, res, next) => {
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
    if (
      !name ||
      !email ||
      !data_nascimento ||
      !cpf ||
      !telefone ||
      !endereco ||
      !numero ||
      !estado ||
      !cidade ||
      !cep
    ) {
      return res
        .status(400)
        .send({ message: "É necessário preencher todos os campos" });
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
      status_consulta: false,
    });

    // const mail = {
    //   from: process.env.EMAIL,
    //   to: email,
    //   subject: "[NO-REPLY] Seus dados foram cadastrado no nosso aplicativo",
    //   text: "Cadastro de seus dados",
    //   html: `<body>
    //           <h1>Comunicado</h1>
    //           <p>Seus dados foram cadastrado com sucesso</p>
    //           <ol>
    //               <li>Dr(a): ${name}</li>
    //               <li>CPF: ${cpf}</li>
    //           </ol>
    //         </body>
    //         `,
    //   attachments: [
    //     {
    //       filename: "logo.png",
    //       path: path.resolve(__dirname, "..", "..", "tmp", "imgs", "logo.png"),
    //       cid: "logo",
    //     },
    //   ],
    //   auth: {
    //     user: process.env.EMAIL,
    //   },
    // };

    // publish(mail, "paciente");

    return res.status(201).send({ paciente });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao cadastrar o paciente", error });
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
      return res.status(400).send({ message: "Paciente não encontrado" });
    }

    return res
      .status(200)
      .send({ message: "Paciente encontrado com sucesso.", paciente });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao buscar o paciente" });
  }
};

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
    status_consulta,
  } = req.body;

  try {
    const paciente = await Paciente.findByPk(paciente_id);

    const medico_id = paciente.medico_id;

    if (!paciente) {
      return res.status(400).send({ error: "Paciente não encontrado" });
    }

    if (
      !name ||
      !email ||
      !data_nascimento ||
      !cpf ||
      !telefone ||
      !endereco ||
      !numero ||
      !estado ||
      !cidade ||
      !cep
    ) {
      return res
        .status(400)
        .send({ message: "É necessário preencher todos os campos" });
    }

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
        status_consulta: status_consulta,
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
      return res.status(400).send({ message: "Paciente não encontrado" });
    }

    await Paciente.destroy({
      where: { id: paciente_id },
    });

    return res
      .status(200)
      .send({ message: "Paciente excluido na base de dados" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocorreu um erro ao deletar o paciente" });
  }
};
