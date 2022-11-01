import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEnviarEmailComponent } from './tela-enviar-email.component';

describe('TelaEnviarEmailComponent', () => {
  let component: TelaEnviarEmailComponent;
  let fixture: ComponentFixture<TelaEnviarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEnviarEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEnviarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
