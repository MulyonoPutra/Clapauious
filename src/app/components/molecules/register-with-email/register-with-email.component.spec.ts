import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithEmailComponent } from './register-with-email.component';

describe('RegisterWithEmailComponent', () => {
  let component: RegisterWithEmailComponent;
  let fixture: ComponentFixture<RegisterWithEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWithEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
