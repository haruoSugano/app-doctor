import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-tela-nova-senha',
  templateUrl: './tela-nova-senha.component.html',
  styleUrls: ['./tela-nova-senha.component.css']
})

export class TelaNovaSenhaComponent implements OnInit {
  @Input() userForm: any = {
    senha: "",
    confirmarSenha: ""
  }

  id: string = "";

  constructor(
    public authService: AuthService,
    public usuarioService: UsuarioService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["_id"];
  }

  passwordUpdate() {
    const password = this.userForm;
    this.usuarioService.passwordUpdate(this.id, password).subscribe((data: {}) => { })
    window.alert("Sua senha foi atualizado com sucesso!");

    this.router.navigateByUrl('/');
  }
}
