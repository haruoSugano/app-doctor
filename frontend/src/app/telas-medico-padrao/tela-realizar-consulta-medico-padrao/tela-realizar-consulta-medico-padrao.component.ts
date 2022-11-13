import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { PacienteService } from 'src/services/paciente.service';
import { ReceituarioService } from 'src/services/receituario.service';

@Component({
  selector: 'app-tela-realizar-consulta-medico-padrao',
  templateUrl: './tela-realizar-consulta-medico-padrao.component.html',
  styleUrls: ['./tela-realizar-consulta-medico-padrao.component.css']
})
export class TelaRealizarConsultaMedicoPadraoComponent implements OnInit {
  @Input() receituarioForm: any = {
    medico_id: "",
    paciente_id: "",
    agenda_id: "",
    descricao: "",
  }

  @Input() agendaForm: any = {
    status_agendamento: "CONCLUIDO",
  }

  paciente: any = [{}];
  medico: any = [{}];
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
      let idPaciente: number = +params['idPaciente'];
      let idMedico: number = +params['idPaciente'];
      let idAgendamento: number = +params['idAgendamento'];

      if (idPaciente && idMedico && idAgendamento) {
        this.receituarioForm.paciente_id = idPaciente;
        this.receituarioForm.medico_id = idMedico;
        this.receituarioForm.agenda_id = idAgendamento;

        this.pacienteService.getPaciente(idPaciente).subscribe((data: {}) => {
          this.paciente = data;
        });

        this.medicoService.getMedico(idMedico).subscribe((data: {}) => {
          this.medico = data;
        });

        this.agendaService.getAgenda(idAgendamento).subscribe((data: {}) => {
          this.agenda = data;
        })
      }
    })
  }

  addReceituario() {
    const receituario = this.receituarioForm;
    const status = this.agendaForm;
    if (window.confirm("Você deseja gerar o pdf?")) {
      this.receituarioService.createReceituario(receituario).subscribe((data: {}) => { })
      // this.agendaService.updateAgendaStatus(receituario.agenda_id, status).subscribe((data: {}) => { });
    }

    alert("Receituario gerado com sucesso!");
    this.router.navigateByUrl('agendamentos-pendentes-medico-padrao');
  }

  logout() {
    this.authService.doLogout();
  }
}
