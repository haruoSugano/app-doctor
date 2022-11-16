require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

module.exports = (user, url) => {
  const filePath = path.join(__dirname, "..", "html", "createUser.ejs");
  let mail = {};
  const usuario = {
    name: user.name,
    email: user.email,
    url: url,
  };

  ejs.renderFile(filePath, usuario, (err, html) => {
    if (err) {
      throw new Error("Erro ao carregar o arquivo html");
    }

    mail = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "[NO-REPLY] Bem-vindo ao APP DOCTOR",
      text: "Registrado com sucesso no nosso aplicativo!",
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
