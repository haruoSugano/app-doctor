import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nome: [''],
      email: [''],
      senha: [''],
      confirmarSenha: [''],
    });
  }

  ngOnInit() { }

  submitForm() {
    let formData: any = new FormData();

    formData.append('nome', this.form.get('nome').value);
    formData.append('email', this.form.get('email').value);
    formData.append('senha', this.form.get('senha').value);
    formData.append('confirmarSenha', this.form.get('confirmarSenha').value);

    this.http.post("http://localhost:3000/api/usuarios", formData)
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      });
  }
}

