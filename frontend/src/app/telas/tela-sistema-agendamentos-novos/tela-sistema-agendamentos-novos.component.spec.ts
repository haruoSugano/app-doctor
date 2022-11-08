import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaAgendamentosNovosComponent } from './tela-sistema-agendamentos-novos.component';

describe('TelaSistemaAgendamentosNovosComponent', () => {
  let component: TelaSistemaAgendamentosNovosComponent;
  let fixture: ComponentFixture<TelaSistemaAgendamentosNovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaAgendamentosNovosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaAgendamentosNovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
