import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaNovaSenhaComponent } from './tela-nova-senha.component';

describe('TelaNovaSenhaComponent', () => {
  let component: TelaNovaSenhaComponent;
  let fixture: ComponentFixture<TelaNovaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaNovaSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
