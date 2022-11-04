import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-pesquisar-paciente',
  templateUrl: './tela-sistema-pesquisar-paciente.component.html',
  styleUrls: ['./tela-sistema-pesquisar-paciente.component.css']
})

export class TelaSistemaPesquisarPacienteComponent implements OnInit {
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
      "nome": "Vinicius Alves",
      "dataNascimento": "28/04/1993",
      "cpf": "203.843.291-48",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },
    {
      "id": 2,
      "nome": "Helio Haruo",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 3,
      "nome": "Alice",
      "dataNascimento": "28/04/1994",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 4,
      "nome": "João",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 5,
      "nome": "Tadeu",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 6,
      "nome": "Kassio",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 7,
      "nome": "Giovane",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 8,
      "nome": "Nathalia",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 9,
      "nome": "José",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 10,
      "nome": "Marcos",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 11,
      "nome": "Carlos",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 12,
      "nome": "Vinicius Souza",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 13,
      "nome": "Vinicius Cardoso",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 14,
      "nome": "Ana Souza",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 15,
      "nome": "Anna Matos",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
      "cep": "12345-678",
      "isEdit": false
    },

    {
      "id": 16,
      "nome": "Bruno Alves",
      "dataNascimento": "28/04/1993",
      "cpf": "503.213.388-47",
      "telefone": "(11) 97417-01928",
      "endereco": "Rua App Doctor",
      "numero": "00",
      "estado": "SP",
      "cidade": "São Paulo",
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

  removeUser(index): void{
    this.usersArray.splice(index, 1)
  }

}
