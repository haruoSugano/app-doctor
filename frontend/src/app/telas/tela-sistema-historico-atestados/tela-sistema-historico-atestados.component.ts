import { Component, OnInit } from '@angular/core';
import { AtestadoService } from 'src/services/atestado.service';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-historico-atestados',
  templateUrl: './tela-sistema-historico-atestados.component.html',
  styleUrls: ['./tela-sistema-historico-atestados.component.css']
})
export class TelaSistemaHistoricoAtestadosComponent implements OnInit {
  Atestado: any = [{}];

  constructor(
    public authService: AuthService,
    public atestadoService: AtestadoService
    ) {}

  ngOnInit(): void {
    this.loadAtestado();
  }

  loadAtestado() {
    return this.atestadoService.getAllAtestados().subscribe((data: {}) => {
      this.Atestado = data;
    })
  }

  openPdf(url: string) {
    window.open(url);
  }

  onEdit(item: any) {
    this.Atestado.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  logout() {
    this.authService.doLogout();
  }

}
