import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { ErrorService } from 'src/app/core/service/error.service';
import { MessagesService } from 'src/app/core/service/messages.service';
import { UserService } from 'src/app/core/service/user.service';
import { ProfilePayload } from '../../core/interface/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;

  profileForms!: UntypedFormGroup;
  profile!: ProfilePayload;

  constructor(
    private fb: UntypedFormBuilder,
    private tokenService: AuthService,
    private userService: UserService,
    private snackbar: MessagesService,
    private errorService: ErrorService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.findUserById();
  }

  get names() {
    return this.profileForms?.controls?.name.errors as FormControl;
  }

  initForms(): void {
    this.profileForms = this.fb.group({
      name: ['', Validators.required],
      images: [''],
      phone: ['', [Validators.required]],
      email: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      description: [''],
    });
  }

  get formCtrlValue() {
    return {
      name: this.profileForms.get('name')?.value,
      images: this.profileForms.get('images')?.value,
      phone: this.profileForms.get('phone')?.value,
      email: this.profileForms.get('email')?.value,
      address: this.profileForms.get('address')?.value,
      state: this.profileForms.get('state')?.value,
      city: this.profileForms.get('city')?.value,
      zipCode: this.profileForms.get('zipCode')?.value,
      country: this.profileForms.get('country')?.value,
      description: this.profileForms.get('description')?.value,
    };
  }

  findUserById(): void {
    if (this.tokenService.loadToken()) {
      const userId = this.tokenService.getId();
      this.userService.findUserById(userId).subscribe({
        next: (response) => {
          this.profile = {
            _id: response._id,
            name: response.name,
            email: response.email,
            phone: response.phone,
            images: response.images,
            address: response.address,
            city: response.city,
            state: response.state,
            country: response.country,
            zipCode: response.zipCode,
            description: response.description,
          };

          this.prepopulate();
        },
        error: (error) => {
          this.errorService.getErrorMessage(error);
        },
      });
    }
  }

  private prepopulate(): void {
    this.profileForms.patchValue({
      name: this.profile.name,
      email: this.profile.email,
      phone: this.profile.phone,
      images: this.profile.images,
      address: this.profile.address,
      city: this.profile.city,
      state: this.profile.state,
      country: this.profile.country,
      zipCode: this.profile.zipCode,
      description: this.profile.description,
    });
  }

  update() {
    const userId = this.profile._id;
    this.userService.update(userId, this.formCtrlValue).subscribe({
     next: () => {
      this.snackbar.success('Update successfully..', 1500);
     },
     error: (error) => {
      this.errorService.getErrorMessage(error);
    },
    })
  }
}
