import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-usuarios-pacientes',
  templateUrl: './tela-sistema-usuarios-pacientes.component.html',
  styleUrls: ['./tela-sistema-usuarios-pacientes.component.css']
})


export class TelaSistemaUsuariosPacientesComponent implements OnInit {

  usersArray = [
    {
      "id": 1,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 2,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 3,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 4,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 5,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 6,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 7,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 8,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 9,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 10,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 11,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 12,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 13,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 14,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 15,
      "cpf": "123.456.789.00",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 16,
      "cpf": "123.456.789.00",
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

