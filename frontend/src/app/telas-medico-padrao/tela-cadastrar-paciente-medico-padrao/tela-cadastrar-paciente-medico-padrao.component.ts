import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { PacienteService } from 'src/services/paciente.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-tela-cadastrar-paciente-medico-padrao',
  templateUrl: './tela-cadastrar-paciente-medico-padrao.component.html',
  styleUrls: ['./tela-cadastrar-paciente-medico-padrao.component.css']
})
export class TelaCadastrarPacienteMedicoPadraoComponent implements OnInit {
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
    const paciente = this.pacienteForm;
    this.pacienteService.createPaciente(paciente).subscribe((data: {}) => {
      this.router.navigate(["/cadastrar-paciente"]);
    });

    this.pacienteForm = {
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
    alert("Paciente cadastrado com sucesso!");
  }

  addUser() {
    const usuario = {
      email: this.pacienteForm.email,
      senha: this.pacienteForm.senha,
      confirmarSenha: this.pacienteForm.confirmarSenha,
      isMedico: false,
      isAdmin: false
    }

    console.log(usuario)

    this.usuarioService.createUsuario(usuario).subscribe((data: {}) => { })

    alert("Usuario cadastrado com sucesso!");

    this.router.navigate(["/cadastrar-paciente"]);
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }
}
