import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaUsuariosMedicosComponent } from './tela-sistema-usuarios-medicos.component';

describe('TelaSistemaUsuariosMedicosComponent', () => {
  let component: TelaSistemaUsuariosMedicosComponent;
  let fixture: ComponentFixture<TelaSistemaUsuariosMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaUsuariosMedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaUsuariosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
