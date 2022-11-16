import { Component, OnInit } from '@angular/core';
import { ReceituarioService } from 'src/services/receituario.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-paciente-historico-consultas',
  templateUrl: './tela-sistema-paciente-historico-consultas.component.html',
  styleUrls: ['./tela-sistema-paciente-historico-consultas.component.css']
})

export class TelaSistemaPacienteHistoricoConsultasComponent implements OnInit {
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
