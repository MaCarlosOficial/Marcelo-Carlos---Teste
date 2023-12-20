import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirEntidadeComponent } from './excluir-entidade.component';

describe('ExcluirEntidadeComponent', () => {
  let component: ExcluirEntidadeComponent;
  let fixture: ComponentFixture<ExcluirEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirEntidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
