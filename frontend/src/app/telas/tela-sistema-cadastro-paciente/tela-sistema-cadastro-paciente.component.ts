import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-cadastro-paciente',
  templateUrl: './tela-sistema-cadastro-paciente.component.html',
  styleUrls: ['./tela-sistema-cadastro-paciente.component.css']
})


export class TelaSistemaCadastroPacienteComponent implements OnInit {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

}
