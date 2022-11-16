import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-tela-enviar-email',
  templateUrl: './tela-enviar-email.component.html',
  styleUrls: ['./tela-enviar-email.component.css']
})

export class TelaEnviarEmailComponent implements OnInit {
  @Input() form = {
    email: ""
  }

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public usuarioService: UsuarioService,
    public router: Router
  ) {}

  ngOnInit() { }

  sendMail() {
    const mail = this.form;
    this.usuarioService.sendMail(mail).subscribe((data: {}) => { })

    this.router.navigateByUrl('/');
  }
}
