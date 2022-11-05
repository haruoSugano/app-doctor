import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-realizar-consulta',
  templateUrl: './tela-sistema-realizar-consulta.component.html',
  styleUrls: ['./tela-sistema-realizar-consulta.component.css']
})
export class TelaSistemaRealizarConsultaComponent implements OnInit {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

}
