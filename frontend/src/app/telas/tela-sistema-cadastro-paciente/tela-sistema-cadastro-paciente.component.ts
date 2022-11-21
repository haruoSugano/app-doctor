import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { PacienteService } from 'src/services/paciente.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-tela-sistema-cadastro-paciente',
  templateUrl: './tela-sistema-cadastro-paciente.component.html',
  styleUrls: ['./tela-sistema-cadastro-paciente.component.css']
})

export class TelaSistemaCadastroPacienteComponent implements OnInit {
  @Input() pacienteForm = {
    name: "",
    email: "",
    data_nascimento: new Date(),
    cpf: "",
    telefone: "",
    endereco: "",
    numero: "",
    estado: "",
    cidade: "",
    cep: 0,
    senha: "",
    confirmarSenha: ""
  };

  constructor(
    public authService: AuthService,
    public pacienteService: PacienteService,
    public usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addPaciente() {
    const paciente = {
      name: this.pacienteForm.name,
      email: this.pacienteForm.email,
      data_nascimento: this.pacienteForm.data_nascimento,
      cpf: this.pacienteForm.cpf,
      telefone: this.pacienteForm.telefone,
      endereco: this.pacienteForm.endereco,
      numero: this.pacienteForm.numero,
      estado: this.pacienteForm.estado,
      cidade: this.pacienteForm.cidade,
      cep: this.pacienteForm.cep,
    };

    if (paciente.name && paciente.email && paciente.data_nascimento && paciente.cpf
      && paciente.telefone && paciente.endereco && paciente.numero &&
      paciente.estado && paciente.cidade && paciente.cep) {
      this.pacienteService.createPaciente(paciente).subscribe((data: {}) => { });

      alert("Paciente cadastrado com sucesso!");
      window.location.reload();
    } else {
      alert("É necessário preencher todos os campos");
    }
  }

  addUser() {
    const usuario = {
      email: this.pacienteForm.email,
      senha: this.pacienteForm.senha,
      confirmarSenha: this.pacienteForm.confirmarSenha,
      isMedico: false,
      isAdmin: false
    }

    if (usuario.email && usuario.senha && usuario.confirmarSenha) {
      this.usuarioService.createUsuario(usuario).subscribe((data: {}) => { })
      alert("Usuario cadastrado com sucesso!");
    } else {
      alert("É Necessário preencher todos os campos");
    }
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }
}
