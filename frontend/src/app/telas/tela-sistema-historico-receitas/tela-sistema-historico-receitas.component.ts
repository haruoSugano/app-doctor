import { Component, OnInit } from '@angular/core';
import { ReceituarioService } from 'src/services/receituario.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-historico-receitas',
  templateUrl: './tela-sistema-historico-receitas.component.html',
  styleUrls: ['./tela-sistema-historico-receitas.component.css']
})
export class TelaSistemaHistoricoReceitasComponent implements OnInit {
  Receituario: any = [{}];

  constructor(
    public authService: AuthService,
    public receituarioService: ReceituarioService
    ) {}

  ngOnInit(): void {
    this.loadReceituario();
  }

  loadReceituario() {
    const email = localStorage.getItem("email");
    return this.receituarioService.getReceituarios(email).subscribe((data: {}) => {
      this.Receituario = data;
    })
  }

  openPdf(url: string) {
    window.open(url);
  }

  onEdit(item: any) {
    this.Receituario.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  logout() {
    this.authService.doLogout();
  }

}
