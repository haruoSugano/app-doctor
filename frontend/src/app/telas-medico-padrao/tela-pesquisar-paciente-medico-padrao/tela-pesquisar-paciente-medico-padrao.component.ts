import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { PacienteService } from 'src/services/paciente.service';
import { Paciente } from 'src/app/shared/models/paciente';

@Component({
  selector: 'app-tela-pesquisar-paciente-medico-padrao',
  templateUrl: './tela-pesquisar-paciente-medico-padrao.component.html',
  styleUrls: ['./tela-pesquisar-paciente-medico-padrao.component.css']
})
export class TelaPesquisarPacienteMedicoPadraoComponent implements OnInit {

  Paciente: any = {};
  filter: string;
  key: string = 'cpf';
  reverse: boolean = false;

  constructor(
    public authService: AuthService,
    public pacienteService: PacienteService,
    public router: Router
  ) { }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {
    this.loadPaciente();
  }

  loadPaciente() {
    return this.pacienteService.getPacientes().subscribe((data: {}) => {
      this.Paciente = data;
    });
  }

  deletePaciente(id: any) {
    if (window.confirm("Você realmente quer deletar este paciente?")) {
      this.pacienteService.deletePaciente(id).subscribe((data) => {
        this.loadPaciente();
      })
    }
  }

  updatePaciente(id: any, paciente: Paciente) {
    if (window.confirm("Você realmente quer atualizar os dados deste paciente?")) {
      this.pacienteService.updatePaciente(id, paciente).subscribe(data => {
        window.alert("Atualizado com sucesso");
        window.location.reload();
      });
    }
  }

  logout() {
    this.authService.doLogout();
  }

  onEdit(item: any) {
    this.Paciente.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

}
