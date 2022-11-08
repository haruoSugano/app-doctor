import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAgendamentosHistoricoMedicoPadraoComponent } from './tela-agendamentos-historico-medico-padrao.component';

describe('TelaAgendamentosHistoricoMedicoPadraoComponent', () => {
  let component: TelaAgendamentosHistoricoMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaAgendamentosHistoricoMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAgendamentosHistoricoMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAgendamentosHistoricoMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
