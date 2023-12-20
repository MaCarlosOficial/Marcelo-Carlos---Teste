import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ContratoLogin } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() requestLogin: ContratoLogin = {    
    login: '',
    senha: ''
  };

  constructor(
    private router: Router,
    private service: LoginService
    ) { }

  ngOnInit(): void {
   }   

  login_entrar () {
    if (this.requestLogin.login == '') {
      alert('E-mail/Login é Obrigatório')
    }
    else { 
      if (this.requestLogin.senha == ''){
        alert('Campo senha é obrigatório')
      } 
      else {
        this.router.navigate(["listar-entidades"])
      }
    }
  }  

}
