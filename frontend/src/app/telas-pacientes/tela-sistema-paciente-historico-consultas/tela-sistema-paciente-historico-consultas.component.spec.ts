import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaSistemaPacienteHistoricoConsultasComponent } from './tela-sistema-paciente-historico-consultas.component';

describe('TelaSistemaPacienteHistoricoConsultasComponent', () => {
  let component: TelaSistemaPacienteHistoricoConsultasComponent;
  let fixture: ComponentFixture<TelaSistemaPacienteHistoricoConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaPacienteHistoricoConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaPacienteHistoricoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
