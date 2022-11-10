import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from 'src/services/agenda.service';
import { Agenda } from 'src/app/shared/models/agenda';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-agendamentos-pendentes',
  templateUrl: './tela-sistema-agendamentos-pendentes.component.html',
  styleUrls: ['./tela-sistema-agendamentos-pendentes.component.css']
})
export class TelaSistemaAgendamentosPendentesComponent implements OnInit {
  Agendas: any = [{}];
  paciente: {};
  filter: string;
  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;

  constructor(
    public authService: AuthService,
    public agendaService: AgendaService,
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
    })
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

