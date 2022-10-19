import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';
import { TelaSistemaCadastroMedicoComponent } from './telas/tela-sistema-cadastro-medico/tela-sistema-cadastro-medico.component';
import { TelaSistemaCadastroPacienteComponent } from './telas/tela-sistema-cadastro-paciente/tela-sistema-cadastro-paciente.component';
import { TelaSistemaPesquisarMedicoComponent } from './telas/tela-sistema-pesquisar-medico/tela-sistema-pesquisar-medico.component';
import { TelaSistemaRealizarConsultaComponent } from './telas/tela-sistema-realizar-consulta/tela-sistema-realizar-consulta.component';
import { TelaSistemaComponent } from './telas/tela-sistema/tela-sistema.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'home', component: TelaSistemaComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-medico', component: TelaSistemaCadastroMedicoComponent, canActivate: [AuthGuard] },
  { path: 'pesquisar-medico', component: TelaSistemaPesquisarMedicoComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-paciente', component: TelaSistemaCadastroPacienteComponent, canActivate: [AuthGuard] },
  { path: 'realizar-consulta', component: TelaSistemaRealizarConsultaComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private route: ActivatedRoute) { }
}
