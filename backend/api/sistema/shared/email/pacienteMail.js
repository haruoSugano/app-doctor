require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

module.exports = (paciente, url) => {
  const filePath = path.join(__dirname, "..", "html", "emailPaciente.ejs");
  let mail = {};
  const dados = {
    name: paciente.name,
    email: paciente.email,
    cpf: paciente.cpf,
    data_nascimento: paciente.data_nascimento.toLocaleDateString('pt-br'),
    endereco: paciente.endereco,
    numero: paciente.numero,
    estado: paciente.estado,
    cidade: paciente.cidade,
    cep: paciente.cep,
    url: url,
  };

  ejs.renderFile(filePath, dados, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    mail = {
      from: process.env.EMAIL,
      to: paciente.email,
      subject: "[NO-REPLY] Seus dados foram cadastrado",
      text: "Registrado com sucesso no nosso aplicativo!",
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
