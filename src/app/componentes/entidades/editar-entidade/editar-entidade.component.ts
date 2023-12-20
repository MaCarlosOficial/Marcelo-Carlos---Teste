import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../entidades.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ContratoEntidade } from '../entidades';

@Component({
  selector: 'app-editar-entidade',
  templateUrl: './editar-entidade.component.html',
  styleUrls: ['./editar-entidade.component.css']
})
export class EditarEntidadeComponent implements OnInit {

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
  editar_entidade() {
    this.service.editar(this.entidade).subscribe(() => {
      this.router.navigate(['/listar-entidades'])
    })
  }
  cancelar_edicao() {
      this.router.navigate(['/listar-entidades'])
    }      
}
