import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/shared/models/agenda';
import { AgendaService } from 'src/services/agenda.service';
import { MedicoService } from 'src/services/medico.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-agendamentos-novos',
  templateUrl: './tela-sistema-agendamentos-novos.component.html',
  styleUrls: ['./tela-sistema-agendamentos-novos.component.css']
})
export class TelaSistemaAgendamentosNovosComponent implements OnInit {
  @Input() agendaForm: Agenda = {
    data: new Date(),
    hora: "",
    cpf: "",
    medico_id: 0,
    status_agendamento: "PENDENTE"
  };

  Medico: any = [{}];

  constructor(
    public authService: AuthService,
    public agendaService: AgendaService,
    public medicoService: MedicoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadMedico();
  }

  addAgenda() {
    const agenda = this.agendaForm;
    this.agendaService.createAgenda(agenda).subscribe((data: {}) => {
      window.location.reload();
    });

    alert("Agendandado com sucesso!");
  }

  loadMedico() {
    return this.medicoService.getMedicos().subscribe((data: {}) => {
      this.Medico = data;
    })
  }

  logout() {
    this.authService.doLogout();
  }
}
