import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-cadastro-medico',
  templateUrl: './tela-sistema-cadastro-medico.component.html',
  styleUrls: ['./tela-sistema-cadastro-medico.component.css']
})

export class TelaSistemaCadastroMedicoComponent implements OnInit {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
  
  ngOnInit(): void {
  }

}
