import { Component, OnInit } from '@angular/core';
import { AtestadoService } from 'src/services/atestado.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-historico-atestados-medico-padrao',
  templateUrl: './tela-historico-atestados-medico-padrao.component.html',
  styleUrls: ['./tela-historico-atestados-medico-padrao.component.css']
})
export class TelaHistoricoAtestadosMedicoPadraoComponent implements OnInit {
  Atestado: any = [{}];

  constructor(
    public authService: AuthService,
    public atestadoService: AtestadoService,
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
