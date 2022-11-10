import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';
import { Usuario } from "src/app/shared/models/usuario";
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-usuarios-pacientes',
  templateUrl: './tela-sistema-usuarios-pacientes.component.html',
  styleUrls: ['./tela-sistema-usuarios-pacientes.component.css']
})

export class TelaSistemaUsuariosPacientesComponent implements OnInit {
  @Input() usuarioForm = {
    email: "",
    senha: "",
  };

  Usuario: any = [{}];
  filter: string;
  key: string = 'email';
  reverse: boolean = false;

  constructor(
    public authService: AuthService,
    private usuarioService: UsuarioService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loadPacienteUser();
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  logout() {
    this.authService.doLogout();
  }

  loadPacienteUser() {
    this.usuarioService.getUsuariosPacientes().subscribe((data: {}) => {
      this.Usuario = data;
    });
  }

  updateUsuario(id: string, usuario: Usuario) {
    usuario.senha = this.usuarioForm.senha;
    if (window.confirm("Você realmente quer atualizar os dados deste paciente?")) {
      this.usuarioService.updateUsuario(id, usuario).subscribe(data => {
        window.alert("Atualizado com sucesso");
        window.location.reload();
      });
    }
  }

  onEdit(item: any) {
    this.Usuario.pacientes.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
}
