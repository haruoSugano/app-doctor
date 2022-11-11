import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaMeuPerfilComponent } from './tela-sistema-meu-perfil.component';

describe('TelaSistemaMeuPerfilComponent', () => {
  let component: TelaSistemaMeuPerfilComponent;
  let fixture: ComponentFixture<TelaSistemaMeuPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaMeuPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaMeuPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
