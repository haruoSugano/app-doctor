import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAgendamentosNovosMedicoPadraoComponent } from './tela-agendamentos-novos-medico-padrao.component';

describe('TelaAgendamentosNovosMedicoPadraoComponent', () => {
  let component: TelaAgendamentosNovosMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaAgendamentosNovosMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAgendamentosNovosMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAgendamentosNovosMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
