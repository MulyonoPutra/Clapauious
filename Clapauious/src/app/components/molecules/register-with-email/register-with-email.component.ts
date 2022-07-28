import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'register-with-email',
  templateUrl: './register-with-email.component.html',
  styleUrls: ['../../../modules/authentication/login/login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterWithEmailComponent implements OnInit {

  hide = true;
  @Input() formGroup!: UntypedFormGroup;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() disable: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.registerEmailCtrl();
  }

  onSubmit() {
    this.submitted.emit(this.formGroup);
  }

  private registerEmailCtrl() {
    this.formGroup?.addControl('name', new FormControl());
    this.formGroup?.addControl('email', new FormControl());
    this.formGroup?.addControl('password', new FormControl());
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }
}
