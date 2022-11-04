import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-pesquisar-medico',
  templateUrl: './tela-sistema-pesquisar-medico.component.html',
  styleUrls: ['./tela-sistema-pesquisar-medico.component.css'],
})

export class TelaSistemaPesquisarMedicoComponent implements OnInit {
  filter: string;

  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  usersArray = [
    {
      "id": 1,
      "nome": "Vinicius Souza",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 2,
      "nome": "Alice",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 3,
      "nome": "Helio",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 4,
      "nome": "Nathalia",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 5,
      "nome": "Giovane",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 6,
      "nome": "José",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 7,
      "nome": "Kassio",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 8,
      "nome": "João",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 9,
      "nome": "Tadeu",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 10,
      "nome": "Nicole",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 11,
      "nome": "Ana",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 12,
      "nome": "Maria",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 13,
      "nome": "Marcos",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 14,
      "nome": "Junior",
      "dataNascimento": "28/04/1993",
      "crm": "123456789",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "12345-678",
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
