import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaRealizarConsultaComponent } from './tela-sistema-realizar-consulta.component';

describe('TelaSistemaRealizarConsultaComponent', () => {
  let component: TelaSistemaRealizarConsultaComponent;
  let fixture: ComponentFixture<TelaSistemaRealizarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaRealizarConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaRealizarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
