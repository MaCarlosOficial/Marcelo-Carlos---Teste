import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratoEntidade } from './entidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  private readonly API = "http://localhost:3000/entidades"

  constructor(private http:HttpClient) { }

  listar(): Observable<ContratoEntidade[]> {
    return this.http.get<ContratoEntidade[]>(this.API)
  }

  criar(entidade: ContratoEntidade): Observable<ContratoEntidade> {
    return this.http.post<ContratoEntidade>(this.API, entidade)
  }

  editar(entidade: ContratoEntidade): Observable<ContratoEntidade> {
    const url = `${this.API}/${entidade.id}`
    return this.http.put<ContratoEntidade>(url, entidade )
  }

  excluir(id: number): Observable<ContratoEntidade> {
    const url = `${this.API}/${id}`
    return this.http.delete<ContratoEntidade>(url)
  }

  buscarPorId(id: number): Observable<ContratoEntidade> {
    const url = `${this.API}/${id}`
    return this.http.get<ContratoEntidade>(url)
  }

}
