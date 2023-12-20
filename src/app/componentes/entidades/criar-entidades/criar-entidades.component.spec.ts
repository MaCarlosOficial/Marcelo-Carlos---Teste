import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEntidadesComponent } from './criar-entidades.component';

describe('CriarEntidadesComponent', () => {
  let component: CriarEntidadesComponent;
  let fixture: ComponentFixture<CriarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEntidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
