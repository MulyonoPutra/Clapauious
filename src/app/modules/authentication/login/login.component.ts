import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/core/interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loggedInValue!: Login;

  emailForm!: FormGroup;
  phoneNumberForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initEmailForms();
    this.initPhoneNumberForms();
  }

  initEmailForms(): void {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  initPhoneNumberForms(): void {
    this.phoneNumberForm = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginWithEmail(form: any): void {
    this.loggedInValue = form.value;
  }

  loginWithPhoneNumber(form: any): void {
    console.log(form)
  }

}
