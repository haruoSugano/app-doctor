import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSistemaComponent } from './tela-sistema.component';

describe('TelaSistemaComponent', () => {
  let component: TelaSistemaComponent;
  let fixture: ComponentFixture<TelaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
