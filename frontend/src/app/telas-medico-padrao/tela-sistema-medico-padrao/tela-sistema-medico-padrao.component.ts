import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-medico-padrao',
  templateUrl: './tela-sistema-medico-padrao.component.html',
  styleUrls: ['./tela-sistema-medico-padrao.component.css']
})
export class TelaSistemaMedicoPadraoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.doLogout();
  }
  ngOnInit() {
  }
}


