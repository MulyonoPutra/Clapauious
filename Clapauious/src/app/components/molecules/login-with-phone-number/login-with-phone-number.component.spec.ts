import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithPhoneNumberComponent } from './login-with-phone-number.component';

describe('LoginWithPhoneNumberComponent', () => {
  let component: LoginWithPhoneNumberComponent;
  let fixture: ComponentFixture<LoginWithPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithPhoneNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
