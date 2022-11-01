import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-nova-senha',
  templateUrl: './tela-nova-senha.component.html',
  styleUrls: ['./tela-nova-senha.component.css']
})

export class TelaNovaSenhaComponent implements OnInit {
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
    this.authService.signIn(this.signinForm.value);
  }
}
