import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaCadastroMedicoComponent } from './tela-sistema-cadastro-medico.component';

describe('TelaSistemaCadastroMedicoComponent', () => {
  let component: TelaSistemaCadastroMedicoComponent;
  let fixture: ComponentFixture<TelaSistemaCadastroMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaCadastroMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaCadastroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
