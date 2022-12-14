const ejs = require("ejs");
const path = require("path");
const pdf = require("html-pdf");

module.exports = async (paciente, medico, agenda, descricao) => {
  const filePath = path.join(__dirname, "..", "html", "pdfs", "pdfReceituario.ejs");
  const filename = `${Math.random().toString(36).substring(0,12)}_${paciente.cpf}.pdf`;
  const pdfPath = path.join("pdfs", "receituarios", filename);
  const savePath = path.join(__dirname, "..", "..", "pdfs", "receituarios", filename); 
  const receituario = {
    namePaciente: paciente.name,
    emailPaciente: paciente.email,
    cpf: paciente.cpf,
    dataNascimento: paciente.data_nascimento,
    endereco: paciente.endereco,
    numero: paciente.numero,
    data: agenda.data.toLocaleDateString('pt-br'),
    hora: agenda.hora,
    nameMedico: medico.name,
    emailMedico: medico.email,
    crm: medico.crm,
    descricao: descricao,
    assinatura: medico.assinatura
  };

  ejs.renderFile(filePath, receituario, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    const options = {
      height: "297mm",
      width: "210mm",
    };

    pdf.create(html, options).toFile(savePath, (err, data) => {
      if (err) {
        throw new Error("Erro ao gerar o arquivo pdf");
      }
      console.log(`Arquivo ${filename}.pdf foi gerado com sucesso`);
    });
  });

  return pdfPath;
};
