const ejs = require("ejs");
const path = require("path");
const crypto = require("crypto").createHash("md5");
const pdf = require("html-pdf");
const moment = require("moment");

module.exports = (paciente, medico, agenda, descricao) => {
  const filePath = path.join(__dirname, "..", "html", "receituario.ejs");
  const filename = `${crypto
    .update(Math.floor(Date.now() * Math.random()).toString(36))
    .digest("hex")}_${paciente.cpf}`;
  const pdfPath = path.join("pdfs", filename);
  const receituario = {
    namePaciente: paciente.name,
    cpf: paciente.cpf,
    dataNascimento: paciente.data_nascimento,
    endereco: paciente.endereco,
    numero: paciente.numero,
    data: moment(agenda.data).format("DD/MM/YYYY"),
    nameMedico: medico.name,
    crm: medico.crm,
    descricao: descricao,
    assinatura: medico.assinatura,
  };
  ejs.renderFile(filePath, receituario, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    const options = {
      height: "297mm",
      width: "210mm",
    };

    pdf.create(html, options).toFile(`${pdfPath}.pdf`, (err, data) => {
      if (err) {
        throw new Error("Erro ao gerar o arquivo pdf");
      }
      console.log(`Arquivo ${filename}.pdf foi gerado com sucesso`);
    });
  });

  return pdfPath;
};
