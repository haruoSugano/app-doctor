import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/shared/models/agenda';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';

@Component({
  selector: 'app-tela-agendamentos-novos-medico-padrao',
  templateUrl: './tela-agendamentos-novos-medico-padrao.component.html',
  styleUrls: ['./tela-agendamentos-novos-medico-padrao.component.css']
})
export class TelaAgendamentosNovosMedicoPadraoComponent implements OnInit {
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
    if (agenda.data && agenda.hora && agenda.cpf) {
      this.agendaService.createAgenda(agenda).subscribe((data: {}) => {
        window.location.reload();
      });

      alert("Agendandado com sucesso!");
    } else {
      alert("Necessário preencher todos os campos!");
    }
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
