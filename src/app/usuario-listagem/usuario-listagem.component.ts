import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  usuarioSelecionado?: Usuario; //armazena os selecionados


  constructor(
    private servico: UsuarioService,
    private router: Router /*para trocar de pagina*/ 
    ) { }

  ngOnInit(): void {
    this.servico.getAll().subscribe({
      next: retorno => this.tabela_usuarios=retorno,
    })
  }

  onRowSelect(event: any): void{
    console.log(this.usuarioSelecionado)  
    this.router.navigate(['/detalhe', this.usuarioSelecionado?.id]) //ao clicar, é redirecionado para a pagina detalhe//

  }

}
