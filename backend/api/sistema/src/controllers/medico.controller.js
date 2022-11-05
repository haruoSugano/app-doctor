require("dotenv").config();
const path = require("path");
const Medico = require("../models/medico.model");
// const publish = require("../config/rabbit/publish");

exports.create = async (req, res, next) => {
  let { name, email, data_nascimento, crm, telefone, endereco, numero, cidade, estado, cep } = req.body;
  const { path: url } = req.file;

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
      assinatura: url,
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
    //               <li>CRM: ${crm}</li>
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

    // publish(mail, "medico");

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

exports.findByName = async (req, res, next) => {
  const { crm } = req.body;
  try {
    if (!crm) {
      return res.status(400).send({ error: "Crm deve ser informado" });
    }


  } catch (error) {
    
  }
};

exports.update = async (req, res, next) => {
  const { medico_id } = req.params;
  const { name, email, data_nascimento, crm, telefone, endereco, numero, cidade, estado, cep, assinatura } = req.body;
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
      assinatura: assinatura ? assinatura : url,
    });

    const mail = {
      from: process.env.EMAIL,
      to: email,
      subject: "[NO-REPLY] Seus dados foram atualizado",
      text: "Atualização de seus dados",
      html: `<body>
              <h1>Comunicado</h1>
              <p>Seus dados foram atualizados com sucesso</p>
              <ol>
                  <li>Usuário: ${email}</li>
              </ol>
            </body>
            `,
      attachments: [
        {
          filename: "logo.png",
          path: path.resolve(__dirname, "..", "tmp", "imgs", "logo.png"),
          cid: "logo",
        },
      ],
      auth: {
        user: process.env.EMAIL,
      },
    };

    publish(mail);

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
