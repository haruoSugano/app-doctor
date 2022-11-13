import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-agendamentos-historico',
  templateUrl: './tela-sistema-agendamentos-historico.component.html',
  styleUrls: ['./tela-sistema-agendamentos-historico.component.css']
})

export class TelaSistemaAgendamentosHistoricoComponent implements OnInit {
  Agendas: any = [{}];
  pacientes: any = [{}];
  medico: any = [{}];
  filter: string;
  key: string = 'data'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(
    public authService: AuthService,
    public agendaService: AgendaService
  ) { }

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
    this.loadAgenda();
  }

  loadAgenda() {
    return this.agendaService.getAgendas().subscribe((data: {}) => {
      this.Agendas = data;
    });
  }
}
