import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})

export class TelaLoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      senha: [''],
    });
  }

  ngOnInit() { }

  onSubmit() {
    const user = this.signinForm.value;
    if (user.email && user.senha) {
      this.authService.signIn(user);
      window.alert("Realizado login com sucesso!");
    } else {
      window.alert("É necessário preencher os campos")
    }
  }
}
