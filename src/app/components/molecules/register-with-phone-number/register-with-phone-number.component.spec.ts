import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithPhoneNumberComponent } from './register-with-phone-number.component';

describe('RegisterWithPhoneNumberComponent', () => {
  let component: RegisterWithPhoneNumberComponent;
  let fixture: ComponentFixture<RegisterWithPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWithPhoneNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWithPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
