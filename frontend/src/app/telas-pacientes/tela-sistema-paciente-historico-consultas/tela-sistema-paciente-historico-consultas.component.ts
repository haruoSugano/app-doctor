import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-paciente-historico-consultas',
  templateUrl: './tela-sistema-paciente-historico-consultas.component.html',
  styleUrls: ['./tela-sistema-paciente-historico-consultas.component.css']
})

export class TelaSistemaPacienteHistoricoConsultasComponent implements OnInit {

  usersArray = [
    {
      "id": 1,
      "dataConsulta": "01/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 2,
      "dataConsulta": "05/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 3,
      "dataConsulta": "10/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 4,
      "dataConsulta": "14/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 5,
      "dataConsulta": "17/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 6,
      "dataConsulta": "20/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 7,
      "dataConsulta": "24/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 8,
      "dataConsulta": "26/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 9,
      "dataConsulta": "28/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
      "isEdit": false
    },
    {
      "id": 10,
      "dataConsulta": "30/11/2022",
      "horarioConsulta": "18:54",
      "medicoResponsavel": "Dr. Vinicius Alves",
      "crm": "123456",
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
