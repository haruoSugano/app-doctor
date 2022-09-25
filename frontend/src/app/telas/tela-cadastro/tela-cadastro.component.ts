import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  @Input() usuarioForm = {
    nome: "",
    senha: "",
    confirmarSenha: "",
    email: "",
    isAdmin: false,
    isMedico: false
  };

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void { }

  createUsuario() {
    const usuario = this.usuarioForm;

    if (usuario.nome && usuario.email && usuario.senha && usuario.confirmarSenha) {
      this.usuarioService.createUsuario(usuario).subscribe((data: {}) => {
        this.router.navigate(['/usuarios']);
      });

      this.usuarioForm = {
        nome: "",
        senha: "",
        confirmarSenha: "",
        email: "",
        isAdmin: false,
        isMedico: false
      };
      alert("Usuário cadastrado com sucesso");

      this.router.navigate(["/usuarios"]);
    }

    return alert("É necessário preencher todos os campos");
  }
}

