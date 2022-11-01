import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaPacienteComponent } from './tela-sistema-paciente.component';

describe('TelaSistemaPacienteComponent', () => {
  let component: TelaSistemaPacienteComponent;
  let fixture: ComponentFixture<TelaSistemaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
