import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tela-sistema-meu-perfil',
  templateUrl: './tela-sistema-meu-perfil.component.html',
  styleUrls: ['./tela-sistema-meu-perfil.component.css']
})
export class TelaSistemaMeuPerfilComponent implements OnInit {

  userDados = [
    {
      "nome_completo": "Vinicius de Souza Alves",
      "data_nascimento": "23/02/2001",
      "crm": "123456",
      "telefone": "(11) 91234-5678",
      "endereco":"Rua App Doctor",
      "numero":"00",
      "cidade":"São Paulo",
      "estado":"SP",
      "cep": "01234-567",
      "isEdit": false
    }
  ]

    userUsuario = [
      {
        "usuario": "admin@appdoctor.com",
        "senha": "Appdoctor@123",
        "isEdit": false
      }

  ]


  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    debugger;
    this.userDados.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }


  removeUser(index): void{
    this.userDados.splice(index, 1)
  }

}


