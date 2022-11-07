import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { Router } from '@angular/router';
import { mimeTypeValidator } from '../../shared/validators/mime-type.validator';

@Component({
  selector: 'app-tela-sistema-cadastro-medico',
  templateUrl: './tela-sistema-cadastro-medico.component.html',
  styleUrls: ['./tela-sistema-cadastro-medico.component.css']
})

export class TelaSistemaCadastroMedicoComponent implements OnInit {
  form: FormGroup;
  priview: String;

  constructor(
    public authService: AuthService,
    public medicoService: MedicoService,
    public router: Router,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [""],
      email: [""],
      data_nascimento: [""],
      crm: [""],
      telefone: [""],
      endereco: [""],
      numero: [""],
      cidade: [""],
      estado: [""],
      cep: [""],
      assinatura: [null]
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      data_nascimento: new FormControl(null, {
        validators: [Validators.required]
      }),
      crm: new FormControl(null, {
        validators: [Validators.required]
      }),
      telefone: new FormControl(null, {
        validators: [Validators.required]
      }),
      endereco: new FormControl(null, {
        validators: [Validators.required]
      }),
      numero: new FormControl(null, {
        validators: [Validators.required]
      }),
      cidade: new FormControl(null, {
        validators: [Validators.required]
      }),
      estado: new FormControl(null, {
        validators: [Validators.required]
      }),
      cep: new FormControl(null, {
        validators: [Validators.required]
      }),
      assinatura: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeTypeValidator]
      }),
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      "assinatura": file
    });
    this.form.get("assinatura").updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.priview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  addMedico() {
    this.medicoService.createMedico(this.form.value).subscribe((data) => {
      this.router.navigate(["/cadastrar-medico"]);

      this.form = this.fb.group({
        name: [""],
        email: [""],
        data_nascimento: [""],
        crm: [""],
        telefone: [""],
        endereco: [""],
        numero: [""],
        cidade: [""],
        estado: [""],
        cep: [""],
        assinatura: [null]
      });
    });

    alert("Medico cadastrado com sucesso!");
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }

}
