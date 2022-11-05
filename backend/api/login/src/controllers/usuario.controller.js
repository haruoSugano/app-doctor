/**
 * Arquivo: controllers/usuario.controller.js
 * Descricao: arquivo responsavel pelo CRUD da classe usuario
 */
require("dotenv").config();
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario.model");
const publish = require("../config/rabbit/publish");

// Utilizando async await
exports.create = async (req, res, next) => {
  const { nome, email, senha, confirmarSenha, isAdmin, isMedico } = req.body;
  try {
    if (!email || !senha || !confirmarSenha) {
      return res
        .status(400)
        .send({ message: "É necessário preencher todos os campos" });
    }

    if (senha != confirmarSenha) {
      return res.status(400).send({ message: "A senha não conferem" });
    }

    if (await Usuario.findOne({ email })) {
      return res
        .status(400)
        .send({ error: "Usuario com este e-mail ja existe" });
    }

    if (await Usuario.findOne({ nome })) {
      return res.status(400).send({ error: "Usuario com este nome ja existe" });
    }

    const hash = await bcrypt.hash(senha, 12);

    const novoUsuario = new Usuario({
      nome: nome,
      email: email,
      senha: hash,
      isAdmin: isAdmin,
      isMedico: isMedico,
    });

    const usuario = await novoUsuario.save();

    const mail = {
      from: process.env.EMAIL,
      to: email,
      subject: "[NO-REPLY] Bem-vindo ao APP DOCTOR",
      text: "Registrado com sucesso no nosso aplicativo!",
      html: `<body>
              <h1>Seja bem-vindo ao App Doctor!</h1>
              <p>Ao logar com os dados abaixo, você poderá acessar todos os documentos gerados em sua consulta, tais como: Receituário e Atestado.</p>
              <ol>
                  <li>Usuário: ${email}</li>
                  <li>Senha: CPF somente numeros</li>
              </ol>
              <p>Recomendamos que altere a senha ao realizar seu primeiro acesso.</p>
              <p>Link de acesso:</p><a href="www.google.com">APP DOCTOR</a>
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
      .status(201)
      .send({ message: "Usuario criado com sucesso!", usuario });
  } catch (error) {
    return res.status(404).send({ message: `Erro ao criar um novo usuario` });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find({});
    if (usuarios.length === 0)
      return res
        .status(200)
        .send({ message: "Nenhum usuario cadastrado na base de dados" });

    return res
      .status(200)
      .send({ message: "Usuarios encontrados com sucesso!", usuarios });
  } catch (error) {
    return res
      .status(404)
      .send({ message: `Erro ao selecionar todos os usuarios` });
  }
};

exports.findById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findById(id, "-senha");
    if (!usuario) {
      return res.status(404).send({ error: "Usuario informado nao existe!" });
    }
    return res
      .status(200)
      .send({ message: "Usuario encontrado com sucesso!", usuario });
  } catch (error) {
    return res
      .status(404)
      .send({ message: `Erro ao buscar o usuario` } || error.message);
  }
};

exports.update = async (req, res, next) => {
  const { nome, email } = req.body;
  const { id } = req.params;
  try {
    if (await Usuario.findOne({ email })) {
      return res
        .status(400)
        .send({ error: "Usuario com este e-mail ja existe" });
    }

    if (await Usuario.findOne({ nome })) {
      return res.status(400).send({ error: "Usuario com este nome ja existe" });
    }

    const usuario = await Usuario.findByIdAndUpdate(id, req.body);

    if (usuario === null) {
      return res.status(404).send({ error: "Usuario informado nao existe!" });
    }
    return res
      .status(200)
      .send({ message: `Usuario atualizado com sucesso! ${id}` });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Erro ao atualizar os usuarios` || err.message });
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByIdAndDelete(id);
    if (usuario === null) {
      return res.status(404).send({ error: "Usuario informado nao existe!" });
    }
    return res
      .status(200)
      .send({ message: `Usuario deletado com sucesso ${id}`, usuario });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Erro ao deletar os usuarios` || err.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, senha } = req.body;

    if (!email) {
      return res.status(400).send({ message: "O e-mail é obrigatório" });
    }

    if (!senha) {
      return res.status(400).send({ message: "A senha é obrigatório" });
    }

    let usuario = await Usuario.findOne({ email }).select("+senha");

    if (!usuario) {
      return res.status(400).send({ message: "Usuário não encontrado" });
    }

    const checarSenha = await bcrypt.compare(senha, usuario.senha);

    if (!checarSenha) {
      return res.status(400).send({ message: "E-mail ou senha inválida!" });
    }

    usuario = {};

    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: usuario.id,
      },
      secret
    );

    usuario = await Usuario.findOne({ email })
      .select("-senha")
      .select("-email")
      .select("-nome")
      .select("-isAdmin")
      .select("-isMedico");

    res
      .status(200)
      .send({ message: "Autenticação realizada com sucesso", token, usuario });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Erro na autenticação` || err.message });
  }
};
