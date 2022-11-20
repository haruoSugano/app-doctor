import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AgendaService } from 'src/services/agenda.service';
import { AuthService } from 'src/services/auth.service';
import { MedicoService } from 'src/services/medico.service';
import { PacienteService } from 'src/services/paciente.service';
import { ReceituarioService } from 'src/services/receituario.service';
import { AtestadoService } from 'src/services/atestado.service';

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

  @Input() atestadoForm: any = {
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
    public atestadoService: AtestadoService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let idAgendamento: number = +params['idAgendamento'];

      if (idAgendamento) {
        this.receituarioForm.agenda_id = idAgendamento;
        this.atestadoForm.agenda_id = idAgendamento;
        this.agendaService.getAgenda(idAgendamento).subscribe((data: {}) => {
          this.agenda = data;
          this.receituarioForm.medico_id = this.agenda["medico_id"];
          this.receituarioForm.paciente_id = this.agenda["paciente_id"];
          this.atestadoForm.medico_id = this.agenda["medico_id"];
          this.atestadoForm.paciente_id = this.agenda["paciente_id"];
        });
      }
    })
  }

  addReceituario() {
    const receituario = this.receituarioForm;
    const status = this.agendaForm;
    if (receituario.descricao) {
      if (window.confirm("Você deseja gerar o receituario?")) {
        this.receituarioService.createReceituario(receituario).subscribe();
        alert("Receituario gerado com sucesso!");
      }

      if (window.confirm("Confirme se o paciente foi atendido")) {
        this.agendaService.updateAgendaStatus(receituario.agenda_id, status).subscribe();
        alert("Registro realizado como CONCLUIDO");
      }

      this.router.navigateByUrl('agendamentos-pendentes');
    } else {
      alert("Necessário preencher o campo de descrição do receituário");
    }
  }

  addAtestado() {
    const atestado = this.atestadoForm;
    if (atestado.descricao) {
      if (window.confirm("Você deseja gerar o atestado médico?")) {
        this.atestadoService.createAtestado(atestado).subscribe();
        alert("Atestado gerado com sucesso!");
      }
    } else {
      alert("Necessário preencher o campo de descrição ao atestado");
    }
  }

  finalizarConsulta() {
    const receituario = this.receituarioForm;
    const status = this.agendaForm;
    if (window.confirm("Confirme se o paciente foi atendido")) {
      this.agendaService.updateAgendaStatus(receituario.agenda_id, status).subscribe();
      alert("Registro realizado como CONCLUIDO");
    }
    if (window.confirm("Você realmente quer finalizar a consulta?")) {
      this.router.navigateByUrl("agendamentos-pendentes");
    }
  }

  logout() {
    this.authService.doLogout();
  }
}
