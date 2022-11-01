import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-paciente',
  templateUrl: './tela-sistema-paciente.component.html',
  styleUrls: ['./tela-sistema-paciente.component.css']
})

export class TelaSistemaPacienteComponent implements OnInit {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
  ngOnInit() {
  }

}
