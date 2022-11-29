import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaHistoricoReceitasComponent } from './tela-sistema-historico-receitas.component';

describe('TelaSistemaHistoricoReceitasComponent', () => {
  let component: TelaSistemaHistoricoReceitasComponent;
  let fixture: ComponentFixture<TelaSistemaHistoricoReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaHistoricoReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaHistoricoReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
