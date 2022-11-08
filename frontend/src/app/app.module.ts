import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpRequestInterceptor } from "./shared/helpers/http.interceptor";
import { FileUploadModule} from "ng2-file-upload";
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TelaLoginComponent } from './telas/tela-login/tela-login.component';
import { TelaSistemaComponent } from './telas/tela-sistema/tela-sistema.component';
import { TelaSistemaCadastroMedicoComponent } from './telas/tela-sistema-cadastro-medico/tela-sistema-cadastro-medico.component';
import { TelaSistemaCadastroPacienteComponent } from './telas/tela-sistema-cadastro-paciente/tela-sistema-cadastro-paciente.component';
import { TelaSistemaRealizarConsultaComponent } from './telas/tela-sistema-realizar-consulta/tela-sistema-realizar-consulta.component';
import { TelaSistemaPesquisarMedicoComponent } from './telas/tela-sistema-pesquisar-medico/tela-sistema-pesquisar-medico.component';
import { TelaSistemaPesquisarPacienteComponent } from './telas/tela-sistema-pesquisar-paciente/tela-sistema-pesquisar-paciente.component';
import { TelaSistemaUsuariosMedicosComponent } from './telas/tela-sistema-usuarios-medicos/tela-sistema-usuarios-medicos.component';
import { TelaSistemaUsuariosPacientesComponent } from './telas/tela-sistema-usuarios-pacientes/tela-sistema-usuarios-pacientes.component';

//telas recuperação de senha
import { TelaEnviarEmailComponent } from './telas-recuperar-senha/tela-enviar-email/tela-enviar-email.component';
import { TelaNovaSenhaComponent } from './telas-recuperar-senha/tela-nova-senha/tela-nova-senha.component';
import { TelaSistemaPacienteComponent } from './telas-pacientes/tela-sistema-paciente/tela-sistema-paciente.component';
import { TelaSistemaPacienteHistoricoConsultasComponent } from './telas-pacientes/tela-sistema-paciente-historico-consultas/tela-sistema-paciente-historico-consultas.component';
import { TelaSistemaAgendamentosHistoricoComponent } from './telas/tela-sistema-agendamentos-historico/tela-sistema-agendamentos-historico.component';
import { TelaSistemaAgendamentosNovosComponent } from './telas/tela-sistema-agendamentos-novos/tela-sistema-agendamentos-novos.component';
import { TelaSistemaAgendamentosPendentesComponent } from './telas/tela-sistema-agendamentos-pendentes/tela-sistema-agendamentos-pendentes.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaSistemaComponent,
    TelaSistemaCadastroMedicoComponent,
    TelaSistemaCadastroPacienteComponent,
    TelaSistemaRealizarConsultaComponent,
    TelaSistemaPesquisarMedicoComponent,
    TelaSistemaPesquisarPacienteComponent,
    TelaSistemaUsuariosMedicosComponent,
    TelaSistemaUsuariosPacientesComponent,
    TelaEnviarEmailComponent,
    TelaNovaSenhaComponent,
    TelaSistemaPacienteComponent,
    TelaSistemaPacienteHistoricoConsultasComponent,
    TelaSistemaAgendamentosHistoricoComponent,
    TelaSistemaAgendamentosNovosComponent,
    TelaSistemaAgendamentosPendentesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    Ng2SearchPipeModule,
    OrderModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
