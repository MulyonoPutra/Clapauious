import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/interface/login';
import { AuthService } from 'src/app/core/service/auth.service';
import { ErrorService } from 'src/app/core/service/error.service';
import { LoginService } from 'src/app/core/service/login.service';
import { MessagesService } from 'src/app/core/service/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loggedInValue!: Login;
  isLoggedIn: boolean = false;
  isLoggedInFailure: boolean = false;

  emailForm!: FormGroup;
  phoneNumberForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private snackbar: MessagesService,
    private errorService: ErrorService,
    private router: Router,
    ) { }

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
    this.loginService.login(this.loggedInValue).subscribe(
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
          this.isLoggedIn = false;
          this.isLoggedInFailure = true;
          this.errorService.getErrorMessage(error);
        }
      }
    )
  }

  loginWithPhoneNumber(form: any): void {
    console.log(form)
  }



}
