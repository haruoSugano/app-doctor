import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-agendamentos-novos',
  templateUrl: './tela-sistema-agendamentos-novos.component.html',
  styleUrls: ['./tela-sistema-agendamentos-novos.component.css']
})
export class TelaSistemaAgendamentosNovosComponent implements OnInit {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

}
