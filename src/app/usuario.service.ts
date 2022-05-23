import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {} //inicializando obj do tipo httpclient 

  getAll():Observable<Usuario[]>{ //função para retornar todos os "dados"
    const url = 'https://reqres.in/api/users?per_page=100'
    return this.http.get<Usuario[]>(url).pipe(
      map((retorno: any) => retorno.data)
    );
  }

  getById(id: number):Observable<Usuario>{ //função para retornar todos os "dados"
    const url = `https://reqres.in/api/users?/${id}`
    return this.http.get<Usuario>(url).pipe(
      map((retorno: any) => retorno.data)
    );
  }



}
