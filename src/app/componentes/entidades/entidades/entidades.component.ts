import { ContratoEntidade } from '../entidades';
import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  @Input() entidades: ContratoEntidade = {
    id: 0,
    nome: "Teste",
    regiao: "São Paulo",
    especialidade: "Laboratorios",
    ativa: "sim"
  }

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
