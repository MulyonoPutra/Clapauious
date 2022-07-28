import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-with-phone-number',
  templateUrl: './login-with-phone-number.component.html',
  styleUrls: ['../../../modules/authentication/login/login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginWithPhoneNumberComponent implements OnInit {
  hide = true;

  @Input() formGroup!: FormGroup;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.emailPhoneNumberFormCtrl();
  }

  onSubmit() {
    this.submitted.emit(this.formGroup);
  }

  private emailPhoneNumberFormCtrl() {
    this.formGroup.addControl('phone', new FormControl());
    this.formGroup.addControl('password', new FormControl());
  }

}
