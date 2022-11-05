import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-tela-sistema-usuarios-medicos',
  templateUrl: './tela-sistema-usuarios-medicos.component.html',
  styleUrls: ['./tela-sistema-usuarios-medicos.component.css']
})


export class TelaSistemaUsuariosMedicosComponent implements OnInit {

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
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 3,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 4,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 5,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 6,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 7,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 8,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 9,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 10,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 11,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 12,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 13,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 14,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 15,
      "crm": "123456",
      "usuario": "Vinicius@appdoctor.com",
      "senha": "Appdoctor@123",
      "isEdit": false
    },

    {
      "id": 16,
      "crm": "123456",
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
