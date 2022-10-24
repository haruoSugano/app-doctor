import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-pesquisar-medico',
  templateUrl: './tela-sistema-pesquisar-medico.component.html',
  styleUrls: ['./tela-sistema-pesquisar-medico.component.css']
})
export class TelaSistemaPesquisarMedicoComponent implements OnInit {
  usersArray = [
    {
      "id": 1,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 2,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 3,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 4,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 5,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 6,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 7,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 8,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 9,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 10,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 11,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 12,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 13,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 14,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 15,
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },
  ]

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }
  
  onEdit(item: any) {
    debugger;
    this.usersArray.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

}
