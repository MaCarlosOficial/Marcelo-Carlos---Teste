import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cliqueLogin() {
    this.router.navigate(['/login']);
  }

  cliqueHome() {
    this.router.navigate(['']);
  }

}
