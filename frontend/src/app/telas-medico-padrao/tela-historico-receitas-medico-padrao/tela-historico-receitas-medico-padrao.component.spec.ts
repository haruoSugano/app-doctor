import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHistoricoReceitasMedicoPadraoComponent } from './tela-historico-receitas-medico-padrao.component';

describe('TelaHistoricoReceitasMedicoPadraoComponent', () => {
  let component: TelaHistoricoReceitasMedicoPadraoComponent;
  let fixture: ComponentFixture<TelaHistoricoReceitasMedicoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHistoricoReceitasMedicoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHistoricoReceitasMedicoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
