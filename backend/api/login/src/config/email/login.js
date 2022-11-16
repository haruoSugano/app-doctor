require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

module.exports = (email, url) => {
  const filePath = path.join(__dirname, "..", "html", "login.ejs");
  const today = new Date(Date.now());
  let mail = {};
  const usuario = {
    today: today.toLocaleDateString('pt-br'),
    email: email,
    url: url,
  };

  ejs.renderFile(filePath, usuario, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    mail = {
      from: process.env.EMAIL,
      to: email,
      subject: `[NO-REPLY] Houve uma tentativa de acesso ${today.toUTCString()}`,
      text: "Tentativa de acesso",
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
