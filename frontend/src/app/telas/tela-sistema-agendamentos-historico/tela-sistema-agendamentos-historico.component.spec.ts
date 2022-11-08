import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaAgendamentosHistoricoComponent } from './tela-sistema-agendamentos-historico.component';

describe('TelaSistemaAgendamentosHistoricoComponent', () => {
  let component: TelaSistemaAgendamentosHistoricoComponent;
  let fixture: ComponentFixture<TelaSistemaAgendamentosHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaAgendamentosHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaAgendamentosHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
