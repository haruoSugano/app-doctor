import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Paciente } from 'src/app/shared/models/paciente';
import { AuthService } from 'src/services/auth.service';
import { PacienteService } from 'src/services/paciente.service';


@Component({
  selector: 'app-tela-sistema-realizar-consulta',
  templateUrl: './tela-sistema-realizar-consulta.component.html',
  styleUrls: ['./tela-sistema-realizar-consulta.component.css']
})
export class TelaSistemaRealizarConsultaComponent implements OnInit {

  paciente: any;

  constructor(
    public authService: AuthService,
    public pacienteService: PacienteService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let id: number = +params['id'];

      if (id) {
        this.pacienteService.getPaciente(id).subscribe((data: {}) => {
          this.paciente = data;
        })
      }
    })
  }

  logout() {
    this.authService.doLogout();
  }
}
