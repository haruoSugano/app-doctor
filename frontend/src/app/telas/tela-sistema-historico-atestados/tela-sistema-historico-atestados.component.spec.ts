import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaHistoricoAtestadosComponent } from './tela-sistema-historico-atestados.component';

describe('TelaSistemaHistoricoAtestadosComponent', () => {
  let component: TelaSistemaHistoricoAtestadosComponent;
  let fixture: ComponentFixture<TelaSistemaHistoricoAtestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaHistoricoAtestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaHistoricoAtestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
