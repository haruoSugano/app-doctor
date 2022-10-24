import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaPesquisarPacienteComponent } from './tela-sistema-pesquisar-paciente.component';

describe('TelaSistemaPesquisarPacienteComponent', () => {
  let component: TelaSistemaPesquisarPacienteComponent;
  let fixture: ComponentFixture<TelaSistemaPesquisarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaPesquisarPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaPesquisarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
