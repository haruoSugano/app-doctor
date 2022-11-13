import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/shared/models/agenda';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { PacienteService } from 'src/services/paciente.service';

@Component({
  selector: 'app-tela-agendamentos-pendentes-medico-padrao',
  templateUrl: './tela-agendamentos-pendentes-medico-padrao.component.html',
  styleUrls: ['./tela-agendamentos-pendentes-medico-padrao.component.css']
})
export class TelaAgendamentosPendentesMedicoPadraoComponent implements OnInit {
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
    public medicoService: MedicoService,
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
    return this.agendaService.getAgendasStatus().subscribe((data: {}) => {
      this.Agendas = data;
    });
  }

  update(id: number, agenda: Agenda) {
    if (window.confirm("Você realmente quer remarcar a consulta?")) {
      this.agendaService.updateAgenda(id, agenda).subscribe((data: {}) => {
        window.alert("Atualizado com sucesso");
        window.location.reload();
      });
    }
  }

  onEdit(item: any) {
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
