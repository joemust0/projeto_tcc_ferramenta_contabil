import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './componets/lancamentos/lancamentos.component';
import { BalancoComponent } from './componets/balanco/balanco.component';
import { MainComponent } from './componets/main/main.component';
import { LoginComponent } from './componets/login/login.component';
import { CadUsuarioComponent } from './componets/cad-usuario/cad-usuario.component';

const routes: Routes = [
{path: '', component:MainComponent};
{path: 'login', component:LoginComponent};
{path: 'cadastroUser', component:CadUsuarioComponent};
{path: 'balanço', component:BalancoComponent};
{path: 'lançamento', component:LancamentosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
