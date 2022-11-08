import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRealizarConsultaMedicoPadraoComponent } from './tela-realizar-consulta-medico-padrao.component';

describe('TelaRealizarConsultaMedicoPadraoComponent', () => {
  let component: TelaRealizarConsultaMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaRealizarConsultaMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaRealizarConsultaMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaRealizarConsultaMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
