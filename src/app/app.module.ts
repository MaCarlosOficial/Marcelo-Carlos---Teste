import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './componentes/login/login.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { ListarEntidadesComponent } from './componentes/entidades/listar-entidades/listar-entidades.component';
import { EntidadesComponent } from './componentes/entidades/entidades/entidades.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarEntidadesComponent } from './componentes/entidades/criar-entidades/criar-entidades.component';
import { ExcluirEntidadeComponent } from './componentes/entidades/excluir-entidade/excluir-entidade.component';
import { EditarEntidadeComponent } from './componentes/entidades/editar-entidade/editar-entidade.component';
import { Validators , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabecalhoComponent,
    ListarEntidadesComponent,
    EntidadesComponent,
    CriarEntidadesComponent,
    ExcluirEntidadeComponent,
    EditarEntidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
