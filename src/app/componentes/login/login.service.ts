import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratoLogin } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = "http://localhost:3000/login"

  constructor(private http:HttpClient) { }

  doLogin(requestLogin: ContratoLogin): Observable<ContratoLogin> {
    return this.http.post<ContratoLogin>(this.API, requestLogin)
  }

}
