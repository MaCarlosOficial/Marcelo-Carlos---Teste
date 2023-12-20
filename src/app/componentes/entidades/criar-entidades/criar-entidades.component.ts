import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../entidades.service';
import { Router } from '@angular/router';
import { ContratoEntidade } from '../entidades';

@Component({
  selector: 'app-criar-entidades',
  templateUrl: './criar-entidades.component.html',
  styleUrls: ['./criar-entidades.component.css']
})
export class CriarEntidadesComponent implements OnInit {

  entidade : ContratoEntidade ={
    id: 0,
    nome: '',
    regiao: '',
    especialidade: '',
    ativa: ''
  }

  constructor(
    private service:EntidadesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gravar_entidade () {
    this.service.criar(this.entidade).subscribe(() => {alert('Entidade gravada com sucesso...')
    this.router.navigate(["listar-entidades"])})
  }

  cancelar_entidade() {
    this.router.navigate(["listar-entidades"])
  } 
 
}
