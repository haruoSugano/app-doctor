import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-realizar-consulta-medico-padrao',
  templateUrl: './tela-realizar-consulta-medico-padrao.component.html',
  styleUrls: ['./tela-realizar-consulta-medico-padrao.component.css']
})
export class TelaRealizarConsultaMedicoPadraoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.doLogout();
  }

}
