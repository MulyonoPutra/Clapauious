import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfileDialogComponent } from './upload-profile-dialog.component';

describe('UploadProfileDialogComponent', () => {
  let component: UploadProfileDialogComponent;
  let fixture: ComponentFixture<UploadProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProfileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
