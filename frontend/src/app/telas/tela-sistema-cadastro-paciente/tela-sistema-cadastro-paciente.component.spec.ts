import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaCadastroPacienteComponent } from './tela-sistema-cadastro-paciente.component';

describe('TelaSistemaCadastroPacienteComponent', () => {
  let component: TelaSistemaCadastroPacienteComponent;
  let fixture: ComponentFixture<TelaSistemaCadastroPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaCadastroPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaCadastroPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
