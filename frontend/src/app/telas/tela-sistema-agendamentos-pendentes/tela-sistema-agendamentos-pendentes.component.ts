import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-agendamentos-pendentes',
  templateUrl: './tela-sistema-agendamentos-pendentes.component.html',
  styleUrls: ['./tela-sistema-agendamentos-pendentes.component.css']
})
export class TelaSistemaAgendamentosPendentesComponent implements OnInit {
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
      "dataConsulta": "28/09/2000",
      "horarioConsulta": "13:20",
      "idMedico": "001",
      "idPaciente": "203.843.291-40",
      "isEdit": false
    },
    {
      "id": 2,
      "dataConsulta": "28/09/2001",
      "horarioConsulta": "13:20",
      "idMedico": "001",
      "idPaciente": "203.843.291-41",
      "isEdit": false
    },
    {
      "id": 3,
      "dataConsulta": "28/09/2002",
      "horarioConsulta": "13:20",
      "idMedico": "002",
      "idPaciente": "203.843.291-42",
      "isEdit": false
    },
    {
      "id": 4,
      "dataConsulta": "28/09/2003",
      "horarioConsulta": "13:20",
      "idMedico": "005",
      "idPaciente": "203.843.291-43",
      "isEdit": false
    },
    {
      "id": 5,
      "dataConsulta": "28/09/2004",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-44",
      "isEdit": false
    },
    {
      "id": 6,
      "dataConsulta": "28/09/2005",
      "horarioConsulta": "13:20",
      "idMedico": "009",
      "idPaciente": "203.843.291-45",
      "isEdit": false
    },
    {
      "id": 7,
      "dataConsulta": "28/09/2006",
      "horarioConsulta": "13:20",
      "idMedico": "006",
      "idPaciente": "203.843.291-46",
      "isEdit": false
    },
    {
      "id": 8,
      "dataConsulta": "28/09/2007",
      "horarioConsulta": "13:20",
      "idMedico": "002",
      "idPaciente": "203.843.291-47",
      "isEdit": false
    },
    {
      "id": 9,
      "dataConsulta": "28/09/2008",
      "horarioConsulta": "13:20",
      "idMedico": "005",
      "idPaciente": "203.843.291-48",
      "isEdit": false
    },
    {
      "id": 10,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
      "isEdit": false
    },
    {
      "id": 11,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
      "isEdit": false
    },
    {
      "id": 10,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
      "isEdit": false
    },
    {
      "id": 12,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
      "isEdit": false
    },
    {
      "id": 13,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
      "isEdit": false
    },
    {
      "id": 14,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
      "isEdit": false
    },
    {
      "id": 15,
      "dataConsulta": "28/09/2009",
      "horarioConsulta": "13:20",
      "idMedico": "007",
      "idPaciente": "203.843.291-49",
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

