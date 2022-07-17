import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Register, RegisterPhoneNumber } from 'src/app/core/interface/register';
import { ValidationService } from 'src/app/core/service/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerValue!: Register;
  registerPhoneNumberValue!: RegisterPhoneNumber

  emailForm!: FormGroup;
  phoneNumberForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initEmailForms();
    this.initPhoneNumberForms();
  }

  initEmailForms(): void {
    this.emailForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
    }
    )
  }

  initPhoneNumberForms(): void {
    this.phoneNumberForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  registerWithEmail(form: any): void {
    this.registerValue = form.value;
    console.log(`register with Email` + this.registerValue);
  }

  registerWithPhoneNumber(form: any): void {
    this.registerPhoneNumberValue = form.value;
    console.log(`register with Phone` + this.registerPhoneNumberValue);
  }


}
