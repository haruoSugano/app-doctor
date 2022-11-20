import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { UsuarioService } from 'src/services/usuario.service';
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
    public usuarioService: UsuarioService,
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
      assinatura: [null],
      senha: [""],
      confirmSenha: [""],
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
      senha: new FormControl(null, {
        validators: [Validators.required]
      }),
      confirmarSenha: new FormControl(null, {
        validators: [Validators.required]
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
    const medico = this.form.value;

    if (medico.name && medico.email && medico.data_nascimento && medico.crm &&
      medico.telefone && medico.endereco && medico.numero &&
      medico.cidade && medico.estado && medico.cep && medico.assinatura) {
        this.medicoService.createMedico(medico).subscribe((data) => {
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
        window.location.reload();
      } else {
        alert("Necessário preencher todos os campos para realizar o cadastro.");
      }
  }

  addUser() {
    const usuario = {
      email: this.form.value.email,
      senha: this.form.value.senha,
      confirmarSenha: this.form.value.confirmarSenha,
      isMedico: true,
      isAdmin: false
    };

    if (usuario.email && usuario.senha && usuario.confirmarSenha && usuario.isAdmin && usuario.isMedico) {
      this.usuarioService.createUsuario(usuario).subscribe((data: {}) => { })
      alert("Usuario cadastrado com sucesso!");
    } else {
      alert("É Necessário preencher todos os campos");
    }
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }

}
