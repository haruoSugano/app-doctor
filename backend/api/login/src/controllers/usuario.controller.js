const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario.model");
const publish = require("../config/rabbit/publish");
const createMail = require("../config/email/create");
const updateMail = require("../config/email/update");
const loginMail = require("../config/email/login");
const forgotMail = require("../config/email/forgot");
const url = `http://localhost:4200/`;

// Utilizando async await
exports.create = async (req, res, next) => {
  const { email, senha, confirmarSenha, isAdmin, isMedico } = req.body;

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

    const hash = await bcrypt.hash(senha, 12);

    const novoUsuario = new Usuario({
      email: email,
      senha: hash,
      isAdmin: isAdmin,
      isMedico: isMedico,
    });

    await novoUsuario.save();

    publish(createMail(novoUsuario, url));

    return res.status(201).send({ message: "Usuario criado com sucesso!" });
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

exports.findByPaciente = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find({});

    if (usuarios.length === 0)
      return res
        .status(200)
        .send({ message: "Nenhum usuario cadastrado na base de dados" });

    const pacientes = usuarios.filter((paciente) => {
      return paciente.isMedico != true;
    });

    return res.status(200).send({ pacientes });
  } catch (error) {
    return res
      .status(404)
      .send({ message: `Erro ao selecionar todos os Pacientes` });
  }
};

exports.findByMedico = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find({});

    if (usuarios.length === 0)
      return res
        .status(200)
        .send({ message: "Nenhum usuario cadastrado na base de dados" });

    const medicos = usuarios.filter((medico) => {
      return medico.isMedico === true;
    });

    return res.status(200).send({ medicos });
  } catch (error) {
    return res
      .status(404)
      .send({ message: `Erro ao selecionar todos os Medicos` });
  }
};

exports.findById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findById(id, "-senha");
    if (!usuario) {
      return res.status(404).send({ error: "Usuario informado nao existe!" });
    }
    return res.status(200).send(usuario);
  } catch (error) {
    return res
      .status(404)
      .send({ message: `Erro ao buscar o usuario` } || error.message);
  }
};

exports.update = async (req, res, next) => {
  let { email, senha } = req.body;
  const { id } = req.params;
  try {
    if (!email || !senha) {
      return res
        .status(404)
        .send({ error: "Necessário preencher todos os campos" });
    }

    let usuario = await Usuario.findById(id, "-senha");

    if (!usuario) {
      return res.status(404).send({ error: "Usuario informado nao existe!" });
    }

    const hash = await bcrypt.hash(senha, 12);

    req.body.senha = hash;

    usuario = await Usuario.findByIdAndUpdate(id, req.body);

    publish(updateMail(usuario, url));

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

    publish(loginMail(email, url));

    res
      .status(200)
      .send({ message: "Autenticação realizada com sucesso", token, usuario });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Erro na autenticação` || err.message });
  }
};

exports.sendMail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res
        .status(400)
        .send({ message: "Este e-mail não está cadastrado" });
    }

    publish(forgotMail(email, usuario._id, url), "cadastro");

    return res
      .status(201)
      .send({ message: "E-mail de recuperação enviado com sucesso!" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Erro ao enviar o email` || err.message });
  }
};

exports.password = async (req, res, next) => {
  const { id } = req.params;
  const { senha, confirmarSenha } = req.body;

  let usuario = await Usuario.findById(id, "-senha");

  if (!usuario) {
    return res.status(404).send({ error: "Usuario informado nao existe!" });
  }

  if (!senha || !confirmarSenha) {
    return res
      .status(404)
      .send({ error: "Necessário preencher todos os campos" });
  }

  const hash = await bcrypt.hash(senha, 12);

  req.body.senha = hash;

  await Usuario.findByIdAndUpdate(id, req.body);

  return res
  .status(200)
  .send({ message: `Usuario atualizado com sucesso!` });
};
