import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['../../../modules/authentication/login/login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginWithEmailComponent implements OnInit {
  hide = true;

  @Input() formGroup!: FormGroup;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.emailPasswordFormCtrl();
  }

  onSubmit() {
    this.submitted.emit(this.formGroup);
  }

  private emailPasswordFormCtrl() {
    this.formGroup.addControl('email', new FormControl());
    this.formGroup.addControl('password', new FormControl());
  }

}
