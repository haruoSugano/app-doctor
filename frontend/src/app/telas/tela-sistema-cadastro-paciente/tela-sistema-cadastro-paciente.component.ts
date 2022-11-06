import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { PacienteService } from 'src/services/paciente.service';

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
  };

  constructor(
    public authService: AuthService,
    public pacienteService: PacienteService,
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
    };
    alert("Paciente cadastrado com sucesso!");
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }
}
