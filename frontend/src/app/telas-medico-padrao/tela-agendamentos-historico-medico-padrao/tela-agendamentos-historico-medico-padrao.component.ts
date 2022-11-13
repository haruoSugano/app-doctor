import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-agendamentos-historico-medico-padrao',
  templateUrl: './tela-agendamentos-historico-medico-padrao.component.html',
  styleUrls: ['./tela-agendamentos-historico-medico-padrao.component.css']
})
export class TelaAgendamentosHistoricoMedicoPadraoComponent implements OnInit {
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
