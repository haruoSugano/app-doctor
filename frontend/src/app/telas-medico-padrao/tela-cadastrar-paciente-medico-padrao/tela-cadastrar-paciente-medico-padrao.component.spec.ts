import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastrarPacienteMedicoPadraoComponent } from './tela-cadastrar-paciente-medico-padrao.component';

describe('TelaCadastrarPacienteMedicoPadraoComponent', () => {
  let component: TelaCadastrarPacienteMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaCadastrarPacienteMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCadastrarPacienteMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCadastrarPacienteMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
