import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';
import { Usuario } from "src/app/shared/models/usuario";
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-usuarios-medicos',
  templateUrl: './tela-sistema-usuarios-medicos.component.html',
  styleUrls: ['./tela-sistema-usuarios-medicos.component.css']
})


export class TelaSistemaUsuariosMedicosComponent implements OnInit {
  @Input() usuarioForm = {
    senha: "",
  };

  Usuario: any = [{}];
  filter: string;
  key: string = 'email';
  reverse: boolean = false;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loadMedicosUsers();
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  loadMedicosUsers() {
    this.usuarioService.getUsuariosMedicos().subscribe((data: {}) => {
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

  logout() {
    this.authService.doLogout();
  }

  onEdit(item: any) {
    this.Usuario.medicos.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

}
