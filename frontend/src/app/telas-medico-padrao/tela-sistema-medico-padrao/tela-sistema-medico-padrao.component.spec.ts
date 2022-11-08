import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaMedicoPadraoComponent } from './tela-sistema-medico-padrao.component';

describe('TelaSistemaMedicoPadraoComponent', () => {
  let component: TelaSistemaMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaSistemaMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
