import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesFormComponent } from './error-messages-form.component';

describe('ErrorMessagesFormComponent', () => {
  let component: ErrorMessagesFormComponent;
  let fixture: ComponentFixture<ErrorMessagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
