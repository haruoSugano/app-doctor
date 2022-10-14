import { Component, OnInit } from '@angular/core';

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
      "dataNascimento": "23/02/2001",
      "crm": "123456789",
      "telefone": "(11) 96671-0114",
      "username": "Vinicius@clinica.com",
      "endereco": "Rua Arroio Grande",
      "numero": "19",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "04253-050",
      "senha": "Vinicius@123",
      "isEdit": false
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "isEdit": false
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "isEdit": false
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "isEdit": false
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "isEdit": false
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "isEdit": false
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210.067.6132",
      "website": "elvis.io",
      "isEdit": false
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "isEdit": false
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "isEdit": false
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "isEdit": false
    }
  ]

  constructor() { }

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
