import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  tabela_usuarios: Usuario[] = [];
  //retorno: any;

  constructor(private servico: UsuarioService) { }

  ngOnInit(): void {
    this.servico.getAll().subscribe({
      next: retorno => this.tabela_usuarios=retorno,
    })
  }

}
