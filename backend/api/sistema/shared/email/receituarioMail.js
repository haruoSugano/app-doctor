require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

module.exports = (paciente, medico, agenda, pdf, url) => {
  const filePath = path.join(__dirname, "..", "html", "emails", "emailReceituario.ejs");
  const today = new Date(Date.now());
  let arquivo_pdf = pdf.split("/");
  let mail = {};
  const dados = {
    namePaciente: paciente.name,
    emailPaciente: paciente.email,
    dataAgendamento: agenda.data.toLocaleDateString('pt-br'),
    horaAgendamento: agenda.hora,
    nameMedico: medico.name,
    emailMedico: medico.email,
    url: url,
  };

  ejs.renderFile(filePath, dados, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    mail = {
      from: process.env.EMAIL,
      to: paciente.email,
      subject: `[NO-REPLY]Consulta realizada ${today.toUTCString()}`,
      text: "Consulta realizada",
      html: html,
      attachments: [
        {
          filename: "logo.png",
          path: path.resolve(__dirname, "..", "imgs", "logo.png"),
          cid: "logo",
        },
        {
          filename: arquivo_pdf[2],
          path: path.resolve(__dirname, "..", "..", "pdfs", "receituarios", arquivo_pdf[2]),
          contentType: 'application/pdf'
        },
      ],
      auth: {
        user: process.env.EMAIL,
      },
    };
  });
  return mail;
};
