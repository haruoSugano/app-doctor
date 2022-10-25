import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema',
  templateUrl: './tela-sistema.component.html',
  styleUrls: ['./tela-sistema.component.css']
})
export class TelaSistemaComponent implements OnInit {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
  ngOnInit() {
  }

}
