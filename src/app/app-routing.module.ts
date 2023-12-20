import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListarEntidadesComponent } from './componentes/entidades/listar-entidades/listar-entidades.component';
import { CriarEntidadesComponent } from './componentes/entidades/criar-entidades/criar-entidades.component';
import { ExcluirEntidadeComponent } from './componentes/entidades/excluir-entidade/excluir-entidade.component';
import { EditarEntidadeComponent } from './componentes/entidades/editar-entidade/editar-entidade.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'listar-entidades',
    component: ListarEntidadesComponent
  },
  {
    path: 'criar-entidades',
    component: CriarEntidadesComponent
  },
  {
    path: 'entidades/excluir-entidade/:id',
    component: ExcluirEntidadeComponent
  },
  {
    path: 'entidades/editar-entidade/:id',
    component: EditarEntidadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
