import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAgendamentosPendentesMedicoPadraoComponent } from './tela-agendamentos-pendentes-medico-padrao.component';

describe('TelaAgendamentosPendentesMedicoPadraoComponent', () => {
  let component: TelaAgendamentosPendentesMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaAgendamentosPendentesMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAgendamentosPendentesMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAgendamentosPendentesMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
