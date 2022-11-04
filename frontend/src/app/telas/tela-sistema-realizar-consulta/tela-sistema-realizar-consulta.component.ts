import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-realizar-consulta',
  templateUrl: './tela-sistema-realizar-consulta.component.html',
  styleUrls: ['./tela-sistema-realizar-consulta.component.css']
})
export class TelaSistemaRealizarConsultaComponent implements OnInit {


  usersArray = [
    {
      "id": 1,
      "nome": "Vinicius Alves",
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
      "nome": "Alice Não Sei o Sobrenome",
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
      "nome": "João Alves Lima",
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
      "nome": "Tadeu Cardoso Santos",
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
      "nome": "Kassio Matheus",
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
      "nome": "Giovane Santos Barroso",
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
      "nome": "Nathalia Britanny Peixoto",
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
      "nome": "José Alencar de Araripe",
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
      "nome": "Marcos Ferreira Rocha",
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
      "nome": "Carlos Santana Matos",
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
      "nome": "Vinicius Souza Alves",
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
      "nome": "Vinicius Cardoso Santana",
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
      "nome": "Ana Souza Alves",
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
      "nome": "Anna Matos Silveira",
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
      "nome": "Bruno Alves Orochi",
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
  ];


  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

}
