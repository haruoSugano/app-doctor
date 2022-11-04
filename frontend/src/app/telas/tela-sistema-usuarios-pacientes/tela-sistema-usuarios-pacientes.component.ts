import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-usuarios-pacientes',
  templateUrl: './tela-sistema-usuarios-pacientes.component.html',
  styleUrls: ['./tela-sistema-usuarios-pacientes.component.css']
})


export class TelaSistemaUsuariosPacientesComponent implements OnInit {

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
      "cpf": "123.456.789.01",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 2,
      "cpf": "123.456.789.02",
      "usuario": "Ana Matos@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 3,
      "cpf": "123.456.789.03",
      "usuario": "Vinicius.alves@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 4,
      "cpf": "123.456.789.04",
      "usuario": "Vinicius.souza@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 5,
      "cpf": "123.456.789.05",
      "usuario": "Carlos@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 6,
      "cpf": "123.456.789.06",
      "usuario": "Junior@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 7,
      "cpf": "123.456.789.07",
      "usuario": "Giovanna@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 8,
      "cpf": "123.456.789.08",
      "usuario": "Ana@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 9,
      "cpf": "123.456.789.09",
      "usuario": "Nicole@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 10,
      "cpf": "123.456.789.10",
      "usuario": "Tadeu@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 11,
      "cpf": "123.456.789.11",
      "usuario": "Kassio@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 12,
      "cpf": "123.456.789.12",
      "usuario": "Jose@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 13,
      "cpf": "123.456.789.12",
      "usuario": "Giovane@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 14,
      "cpf": "123.456.789.14",
      "usuario": "Nathalia@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 15,
      "cpf": "123.456.789.15",
      "usuario": "Hellio@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 16,
      "cpf": "123.456.789.16",
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

  removeUser(index): void{
    this.usersArray.splice(index, 1)
  }
}

