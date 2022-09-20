import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  /* { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: TelaCadastroComponent }
  , */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
