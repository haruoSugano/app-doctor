import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-usuarios-medicos',
  templateUrl: './tela-sistema-usuarios-medicos.component.html',
  styleUrls: ['./tela-sistema-usuarios-medicos.component.css']
})


export class TelaSistemaUsuariosMedicosComponent implements OnInit {

  filter: string;

  key: string = 'usuario'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  usersArray = [
    {
      "id": 1,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 2,
      "crm": "288365",
      "usuario": "Anna@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 3,
      "crm": "190864",
      "usuario": "Vitor@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 4,
      "crm": "127645",
      "usuario": "Nicole@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 5,
      "crm": "085387",
      "usuario": "Maria@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 6,
      "crm": "283678",
      "usuario": "Guilherme@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 7,
      "crm": "026389",
      "usuario": "Caitilin@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 8,
      "crm": "483927",
      "usuario": "Junior.campos@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 9,
      "crm": "392847",
      "usuario": "Vinicius.alves@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 10,
      "crm": "973827",
      "usuario": "Vinicius.souza@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 11,
      "crm": "193746",
      "usuario": "Helio@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 12,
      "crm": "019387",
      "usuario": "José@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 13,
      "crm": "493827",
      "usuario": "Nathalia@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 14,
      "crm": "193746",
      "usuario": "Giovane@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 15,
      "crm": "193847",
      "usuario": "Ana@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 16,
      "crm": "973625",
      "usuario": "Alice@appdoctor.com",
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
