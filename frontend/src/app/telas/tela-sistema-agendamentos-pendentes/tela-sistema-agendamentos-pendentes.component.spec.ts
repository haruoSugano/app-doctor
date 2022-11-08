import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaAgendamentosPendentesComponent } from './tela-sistema-agendamentos-pendentes.component';

describe('TelaSistemaAgendamentosPendentesComponent', () => {
  let component: TelaSistemaAgendamentosPendentesComponent;
  let fixture: ComponentFixture<TelaSistemaAgendamentosPendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaAgendamentosPendentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaAgendamentosPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
