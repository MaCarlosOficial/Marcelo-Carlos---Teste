import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../entidades.service';
import { ContratoEntidade } from '../entidades';

@Component({
  selector: 'app-excluir-entidade',
  templateUrl: './excluir-entidade.component.html',
  styleUrls: ['./excluir-entidade.component.css']
})
export class ExcluirEntidadeComponent implements OnInit {

  entidade : ContratoEntidade ={
    id: 0,
    nome: '',
    regiao: '',
    especialidade: '',
    ativa: ''
  }

  constructor(
    private service: EntidadesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((entidade) => {
      this.entidade = entidade
    })
  }

  excluirEntidade() {
    if(this.entidade.id) {
      this.service.excluir(this.entidade.id).subscribe(() => {
        this.router.navigate(['/listar-entidades'])
      })
    }
  }

  cancelarExclusao() {
    this.router.navigate(['/listar-entidades'])
  }

}
