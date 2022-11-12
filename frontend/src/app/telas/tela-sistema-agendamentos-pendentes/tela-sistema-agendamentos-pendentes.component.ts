import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';
import { PacienteService } from 'src/services/paciente.service';
import { MedicoService } from 'src/services/medico.service';

@Component({
  selector: 'app-tela-sistema-agendamentos-pendentes',
  templateUrl: './tela-sistema-agendamentos-pendentes.component.html',
  styleUrls: ['./tela-sistema-agendamentos-pendentes.component.css']
})
export class TelaSistemaAgendamentosPendentesComponent implements OnInit {
  Agendas: any = [{}];
  pacientes: any = [{}];
  medico: any = [{}];
  filter: string;
  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  id: "";

  constructor(
    public authService: AuthService,
    public agendaService: AgendaService,
    public pacienteService: PacienteService,
    public medicoService:MedicoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadAgenda();
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  loadAgenda() {
    return this.agendaService.getAgendas().subscribe((data: {}) => {
      this.Agendas = data;
      console.log(this.Agendas)
    });
  }

  onEdit(item: any) {
    debugger;
    this.Agendas.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  removeUser(index): void {
    this.Agendas.splice(index, 1)
  }

  logout() {
    this.authService.doLogout();
  }
}

