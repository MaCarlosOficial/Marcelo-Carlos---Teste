import { ContratoEntidade } from '../entidades';
import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../entidades.service';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  styleUrls: ['./listar-entidades.component.css']
})
export class ListarEntidadesComponent implements OnInit {

  listaEntidades: ContratoEntidade[] = [];

  constructor(private service:EntidadesService
    ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaEntidades) => {this.listaEntidades = listaEntidades})
  }
}
