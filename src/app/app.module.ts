import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancamentosComponent } from './componets/lancamentos/lancamentos.component';
import { BalancoComponent } from './componets/balanco/balanco.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { MainComponent } from './componets/main/main.component';
import { LoginComponent } from './componets/login/login.component';
import { CadUsuarioComponent } from './componets/cad-usuario/cad-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    BalancoComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    CadUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
