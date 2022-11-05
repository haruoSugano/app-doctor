import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaPesquisarMedicoComponent } from './tela-sistema-pesquisar-medico.component';

describe('TelaSistemaPesquisarMedicoComponent', () => {
  let component: TelaSistemaPesquisarMedicoComponent;
  let fixture: ComponentFixture<TelaSistemaPesquisarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaPesquisarMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaPesquisarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
