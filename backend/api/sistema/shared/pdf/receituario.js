const ejs = require("ejs");
const path = require("path");
const crypto = require("crypto").createHash("md5");
const pdf = require("html-pdf");

module.exports = (paciente, medico, agenda, descricao) => {
    const filePath = path.join(__dirname, "..", "html", "receituario.ejs");
    const filename = `${crypto.update("If you love node so much why don't you marry it?").digest("hex")}_${paciente.cpf}`;
    const pdfPath = path.join("pdfs", filename);
    const receituario = {
        namePaciente: paciente.name,
        cpf: paciente.cpf,
        data: agenda.data,
        nameMedico: medico.name,
        crm: medico.crm,
        descricao: descricao
    }

    ejs.renderFile(filePath, receituario, (err, html) => {
        if (err) {
          throw new Error("Erro ao carregar o arquivo html");
        } 

        const options = {
          height: "11.25in",
          width: "8.5in",
          header: {
            height: "20mm"
          },
          footer: {
            height: "20mm"
          }
        };
      
        pdf.create(html, options).toFile(`${pdfPath}.pdf`, (err, data) => {
          if (err) {
            throw new Error("Erro ao gerar o arquivo pdf");
          }
        });
      });

      return pdfPath;
}
