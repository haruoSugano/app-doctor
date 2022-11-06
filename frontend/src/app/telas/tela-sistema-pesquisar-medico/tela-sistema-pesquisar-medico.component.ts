import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeTypeValidator } from '../../shared/validators/mime-type.validator';
import { Medico } from 'src/app/shared/models/medico';


@Component({
  selector: 'app-tela-sistema-pesquisar-medico',
  templateUrl: './tela-sistema-pesquisar-medico.component.html',
  styleUrls: ['./tela-sistema-pesquisar-medico.component.css']
})
export class TelaSistemaPesquisarMedicoComponent implements OnInit {
  Medico: any = [{}];
  form: FormGroup;
  priview: any = [{}];
  image: any = [];
  filter: string;
  key: string = 'email';
  reverse: boolean = false;

  constructor(
    public authService: AuthService,
    public medicoService: MedicoService,
    public router: Router,
    public fb: FormBuilder
  ) {
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
      file: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeTypeValidator]
      }),
    });
    this.loadMedico();
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  logout() {
    this.authService.doLogout();
  }

  loadMedico() {
    return this.medicoService.getMedicos().subscribe((data: {}) => {
      this.Medico = data;
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      "file": file
    });
    this.form.get("file").updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.priview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  deleteMedico(id: any) {
    if (window.confirm("Você realmente quer deletar este medico?")) {
      this.medicoService.deleteMedico(id).subscribe((data) => {
        this.loadMedico();
      });
    }
  }

  updateMedico(id: any, medico: Medico) {
    const data = this.form.value.file ? this.form.value : medico;
    if (window.confirm("Você realmente quer atualizar os dados do medico?")) {
      this.medicoService.updateMedico(id, data).subscribe(data => {
        window.location.reload();
      });
    }
  }

  onEdit(item: any) {
    this.Medico.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
}
