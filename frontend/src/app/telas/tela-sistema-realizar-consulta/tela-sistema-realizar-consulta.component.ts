import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { PacienteService } from 'src/services/paciente.service';
import { ReceituarioService } from 'src/services/receituario.service';


@Component({
  selector: 'app-tela-sistema-realizar-consulta',
  templateUrl: './tela-sistema-realizar-consulta.component.html',
  styleUrls: ['./tela-sistema-realizar-consulta.component.css']
})
export class TelaSistemaRealizarConsultaComponent implements OnInit {
  @Input() receituarioForm: any = {
    medico_id: "",
    paciente_id: "",
    agenda_id: "",
    descricao: "",
  }

  @Input() agendaForm: any = {
    status_agendamento: "CONCLUIDO",
  }

  agenda: any = [{}];
  Receituario: any = [{}];

  constructor(
    public authService: AuthService,
    public pacienteService: PacienteService,
    public medicoService: MedicoService,
    public agendaService: AgendaService,
    public receituarioService: ReceituarioService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let idAgendamento: number = +params['idAgendamento'];

      if (idAgendamento) {
        this.receituarioForm.agenda_id = idAgendamento;
        this.agendaService.getAgenda(idAgendamento).subscribe((data: {}) => {
          this.agenda = data;
          this.receituarioForm.medico_id = this.agenda["medico_id"];
          this.receituarioForm.paciente_id = this.agenda["paciente_id"];
        })
      }
    })
  }

  addReceituario() {
    const receituario = this.receituarioForm;
    const status = this.agendaForm;
    console.log(receituario)
    if (window.confirm("Você deseja gerar o pdf?")) {
      this.receituarioService.createReceituario(receituario).subscribe((data: {}) => { })
      this.agendaService.updateAgendaStatus(receituario.agenda_id, status).subscribe((data: {}) => { });
      alert("Receituario gerado com sucesso!");
    }

    this.router.navigateByUrl('agendamentos-pendentes');
  }

  logout() {
    this.authService.doLogout();
  }
}
