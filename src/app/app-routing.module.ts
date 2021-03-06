import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';

const routes: Routes = [
  {path: 'listagem', component: UsuarioListagemComponent},
  {path: '', redirectTo: '/listagem', pathMatch: 'full'},
  //{path: '**', redirectTo: '/listagem', pathMatch: 'full'}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
