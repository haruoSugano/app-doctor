import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaUsuariosPacientesMedicoPadraoComponent } from './tela-usuarios-pacientes-medico-padrao.component';

describe('TelaUsuariosPacientesMedicoPadraoComponent', () => {
  let component: TelaUsuariosPacientesMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaUsuariosPacientesMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaUsuariosPacientesMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaUsuariosPacientesMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
