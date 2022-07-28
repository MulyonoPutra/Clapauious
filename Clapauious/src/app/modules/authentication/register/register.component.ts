import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register, RegisterPhoneNumber } from 'src/app/core/interface/register';
import { AuthService } from 'src/app/core/service/auth.service';
import { ErrorService } from 'src/app/core/service/error.service';
import { MessagesService } from 'src/app/core/service/messages.service';
import { RegisterService } from 'src/app/core/service/register.service';
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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MessagesService,
    private errorService: ErrorService,
    private registerService: RegisterService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initEmailForms();
    this.initPhoneNumberForms();
  }

  initEmailForms(): void {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      }
    )
  }

  initPhoneNumberForms(): void {
    this.phoneNumberForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  registerWithEmail(form: any): void {
    this.registerValue = form.value;
    console.log(`register with Email` + this.registerValue);
    this.registerService.register(this.registerValue).subscribe(
      {
        next: (response: any) => {
          this.authService.setId(response._id)
          this.authService.setToken(response.token);
          this.authService.setUsername(response.name);
          this.snackbar.success('Login successfully..', 1100);
          setTimeout(() => {
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          }, 1100);
        },
        error: (error) => {
          this.errorService.getErrorMessage(error);
        }
      }
    )
  }

  registerWithPhoneNumber(form: any): void {
    this.registerPhoneNumberValue = form.value;
    console.log(`register with Phone` + this.registerPhoneNumberValue);
  }


}
