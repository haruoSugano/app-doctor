import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPesquisarPacienteMedicoPadraoComponent } from './tela-pesquisar-paciente-medico-padrao.component';

describe('TelaPesquisarPacienteMedicoPadraoComponent', () => {
  let component: TelaPesquisarPacienteMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaPesquisarPacienteMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPesquisarPacienteMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPesquisarPacienteMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
