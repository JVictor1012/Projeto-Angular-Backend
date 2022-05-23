import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  usuarioSelecionado?: Usuario["id"];

  id = 0;

  usuario?: Usuario;

  constructor(private servico: UsuarioService,private activateRoute: ActivatedRoute /* responsável por permitir ler a info de uma rota */) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id') ? parseInt(this.activateRoute.snapshot.paramMap.get('id')!): 0

    this.servico.getById(this.id).subscribe({
      next: (usuarioRetorno: Usuario) => this.usuario = usuarioRetorno
    })
;
  }

}
