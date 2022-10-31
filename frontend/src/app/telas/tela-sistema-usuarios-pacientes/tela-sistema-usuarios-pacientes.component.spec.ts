import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaUsuariosPacientesComponent } from './tela-sistema-usuarios-pacientes.component';

describe('TelaSistemaUsuariosPacientesComponent', () => {
  let component: TelaSistemaUsuariosPacientesComponent;
  let fixture: ComponentFixture<TelaSistemaUsuariosPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaUsuariosPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaUsuariosPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
