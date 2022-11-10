//telas medico padrao imports
import { TelaSistemaMedicoPadraoComponent } from './telas-medico-padrao/tela-sistema-medico-padrao/tela-sistema-medico-padrao.component';
import { TelaAgendamentosPendentesMedicoPadraoComponent } from './telas-medico-padrao/tela-agendamentos-pendentes-medico-padrao/tela-agendamentos-pendentes-medico-padrao.component';
import { TelaAgendamentosNovosMedicoPadraoComponent } from './telas-medico-padrao/tela-agendamentos-novos-medico-padrao/tela-agendamentos-novos-medico-padrao.component';
import { TelaAgendamentosHistoricoMedicoPadraoComponent } from './telas-medico-padrao/tela-agendamentos-historico-medico-padrao/tela-agendamentos-historico-medico-padrao.component';
import { TelaUsuariosPacientesMedicoPadraoComponent } from './telas-medico-padrao/tela-usuarios-pacientes-medico-padrao/tela-usuarios-pacientes-medico-padrao.component';
import { TelaRealizarConsultaMedicoPadraoComponent } from './telas-medico-padrao/tela-realizar-consulta-medico-padrao/tela-realizar-consulta-medico-padrao.component';
import { TelaPesquisarPacienteMedicoPadraoComponent } from './telas-medico-padrao/tela-pesquisar-paciente-medico-padrao/tela-pesquisar-paciente-medico-padrao.component';
import { TelaCadastrarPacienteMedicoPadraoComponent } from './telas-medico-padrao/tela-cadastrar-paciente-medico-padrao/tela-cadastrar-paciente-medico-padrao.component';


//telas sistema (admin) imports
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';
import { TelaSistemaCadastroMedicoComponent } from './telas/tela-sistema-cadastro-medico/tela-sistema-cadastro-medico.component';
import { TelaSistemaCadastroPacienteComponent } from './telas/tela-sistema-cadastro-paciente/tela-sistema-cadastro-paciente.component';
import { TelaSistemaPesquisarMedicoComponent } from './telas/tela-sistema-pesquisar-medico/tela-sistema-pesquisar-medico.component';
import { TelaSistemaPesquisarPacienteComponent } from './telas/tela-sistema-pesquisar-paciente/tela-sistema-pesquisar-paciente.component';
import { TelaSistemaRealizarConsultaComponent } from './telas/tela-sistema-realizar-consulta/tela-sistema-realizar-consulta.component';
import { TelaSistemaComponent } from './telas/tela-sistema/tela-sistema.component';
import { TelaSistemaUsuariosMedicosComponent } from './telas/tela-sistema-usuarios-medicos/tela-sistema-usuarios-medicos.component';
import { TelaSistemaUsuariosPacientesComponent } from './telas/tela-sistema-usuarios-pacientes/tela-sistema-usuarios-pacientes.component';
import { TelaSistemaAgendamentosPendentesComponent } from './telas/tela-sistema-agendamentos-pendentes/tela-sistema-agendamentos-pendentes.component';
import { TelaSistemaAgendamentosNovosComponent } from './telas/tela-sistema-agendamentos-novos/tela-sistema-agendamentos-novos.component';
import { TelaSistemaAgendamentosHistoricoComponent } from './telas/tela-sistema-agendamentos-historico/tela-sistema-agendamentos-historico.component';

//telas recuperação de senha
import { TelaEnviarEmailComponent } from './telas-recuperar-senha/tela-enviar-email/tela-enviar-email.component';
import { TelaNovaSenhaComponent } from './telas-recuperar-senha/tela-nova-senha/tela-nova-senha.component';

//telas pacientes imports
import { TelaSistemaPacienteComponent } from './telas-pacientes/tela-sistema-paciente/tela-sistema-paciente.component';
import { TelaSistemaPacienteHistoricoConsultasComponent } from './telas-pacientes/tela-sistema-paciente-historico-consultas/tela-sistema-paciente-historico-consultas.component';


const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'home', component: TelaSistemaComponent},
  { path: 'cadastrar-medico', component: TelaSistemaCadastroMedicoComponent, },
  { path: 'pesquisar-medico', component: TelaSistemaPesquisarMedicoComponent, },
  { path: 'cadastrar-paciente', component: TelaSistemaCadastroPacienteComponent, },
  { path: 'pesquisar-paciente', component: TelaSistemaPesquisarPacienteComponent, },
  { path: 'realizar-consulta', component: TelaSistemaRealizarConsultaComponent,  },
  { path: 'usuarios-medicos', component: TelaSistemaUsuariosMedicosComponent, },
  { path: 'usuarios-pacientes', component: TelaSistemaUsuariosPacientesComponent, },

  //telas agendamentos
  { path: 'agendamentos-pendentes', component: TelaSistemaAgendamentosPendentesComponent},
  { path: 'agendamentos-novos', component: TelaSistemaAgendamentosNovosComponent},
  { path: 'agendamentos-historico', component: TelaSistemaAgendamentosHistoricoComponent},

  //telas para recuperar senha:
  { path: 'recuperar-senha-envio-email', component: TelaEnviarEmailComponent},
  { path: 'recuperar-senha-nova-senha', component: TelaNovaSenhaComponent},

  //telas pacientes:
  { path: 'home/pacientes', component: TelaSistemaPacienteComponent,},
  { path: 'historico-consultas', component: TelaSistemaPacienteHistoricoConsultasComponent,},

  //telas medico padrao
  { path: 'home/medico', component: TelaSistemaMedicoPadraoComponent,},
  { path: 'cadastrar-paciente-medico-padrao', component: TelaCadastrarPacienteMedicoPadraoComponent,},
  { path: 'pesquisar-paciente-medico-padrao', component: TelaPesquisarPacienteMedicoPadraoComponent,},
  { path: 'realizar-consulta-medico-padrao', component: TelaRealizarConsultaMedicoPadraoComponent,},
  { path: 'usuarios-pacientes-medico-padrao', component: TelaUsuariosPacientesMedicoPadraoComponent,},
  { path: 'agendamentos-historico-medico-padrao', component: TelaAgendamentosHistoricoMedicoPadraoComponent,},
  { path: 'agendamentos-novos-medico-padrao', component: TelaAgendamentosNovosMedicoPadraoComponent,},
  { path: 'agendamentos-pendentes-medico-padrao', component: TelaAgendamentosPendentesMedicoPadraoComponent,},


  {path: '', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router, private route: ActivatedRoute) { }
}
