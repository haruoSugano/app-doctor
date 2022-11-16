import { Component, OnInit, AfterContentChecked, HostListener } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema',
  templateUrl: './tela-sistema.component.html',
  styleUrls: ['./tela-sistema.component.css']
})
export class TelaSistemaComponent implements OnInit {
  constructor(public authService: AuthService) { }

  dropDown(id: string) {
    document.getElementById(id).classList.toggle("show");
  }

  logout() {
    this.authService.doLogout();
  }
  ngOnInit() {
  }

}
