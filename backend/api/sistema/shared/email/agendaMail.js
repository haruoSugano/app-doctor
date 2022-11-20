require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

module.exports = (agenda, paciente, medico, url) => {
  const filePath = path.join(__dirname, "..", "html", "emails", "emailAgenda.ejs");
  let mail = {};
  const dados = {
    data: agenda.data.toLocaleDateString('pt-br'),
    hora: agenda.hora,
    nameMedico: medico.name,
    name: paciente[0].name,
    email: paciente[0].email,
    cpf: paciente[0].cpf,
    data_nascimento: paciente[0].data_nascimento.toLocaleDateString('pt-br'),
    endereco: paciente[0].endereco,
    numero: paciente[0].numero,
    estado: paciente[0].estado,
    cidade: paciente[0].cidade,
    cep: paciente[0].cep,
    url: url,
  };

  ejs.renderFile(filePath, dados, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    mail = {
      from: process.env.EMAIL,
      to: paciente[0].email,
      subject: "[NO-REPLY] Sua consulta foi agendada",
      text: "Consulta agendada",
      html: html,
      attachments: [
        {
          filename: "logo.png",
          path: path.resolve(__dirname, "..", "imgs", "logo.png"),
          cid: "logo",
        },
      ],
      auth: {
        user: process.env.EMAIL,
      },
    };
  });
  
  return mail;
};
