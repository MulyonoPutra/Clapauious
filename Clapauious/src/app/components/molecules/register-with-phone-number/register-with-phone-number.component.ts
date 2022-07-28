import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register-with-phone-number',
  templateUrl: './register-with-phone-number.component.html',
  styleUrls: ['../../../modules/authentication/login/login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterWithPhoneNumberComponent implements OnInit {

  hide = true;

  @Input() formGroup!: FormGroup;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.registerPhoneNumberCtrl();
  }

  onSubmit() {
    this.submitted.emit(this.formGroup);
  }

  private registerPhoneNumberCtrl() {
    this.formGroup.addControl('username', new FormControl());
    this.formGroup.addControl('phone', new FormControl());
    this.formGroup.addControl('password', new FormControl());
  }
}
