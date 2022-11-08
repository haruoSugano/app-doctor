import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-agendamentos-novos-medico-padrao',
  templateUrl: './tela-agendamentos-novos-medico-padrao.component.html',
  styleUrls: ['./tela-agendamentos-novos-medico-padrao.component.css']
})
export class TelaAgendamentosNovosMedicoPadraoComponent implements OnInit {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

}
