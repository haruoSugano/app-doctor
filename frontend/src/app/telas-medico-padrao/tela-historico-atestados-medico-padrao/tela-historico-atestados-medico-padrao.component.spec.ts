import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHistoricoAtestadosMedicoPadraoComponent } from './tela-historico-atestados-medico-padrao.component';

describe('TelaHistoricoAtestadosMedicoPadraoComponent', () => {
  let component: TelaHistoricoAtestadosMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaHistoricoAtestadosMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHistoricoAtestadosMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHistoricoAtestadosMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
