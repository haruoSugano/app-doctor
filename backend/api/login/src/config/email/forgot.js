require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

module.exports = (email, id, url) => {
  const filePath = path.join(__dirname, "..", "html", "forgot.ejs");
  const today = new Date(Date.now());
  let mail = {};
  const usuario = {
    today: today.toLocaleDateString('pt-br'),
    email: email,
    url: `${url}/recuperar-senha-nova-senha/${id}`,
  };

  ejs.renderFile(filePath, usuario, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    mail = {
      from: process.env.EMAIL,
      to: email,
      subject: `[NO-REPLY] Recuperação de senha ${today.toLocaleDateString('pt-br')}`,
      text: "Recuperação de senha",
      html: html,
      attachments: [
        {
          filename: "logo.png",
          path: path.resolve(__dirname, "..", "..", "imgs", "logo.png"),
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
