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
import { MatDialog } from '@angular/material/dialog';
import { UploadProfileDialogComponent } from 'src/app/components/molecules/upload-profile-dialog/upload-profile-dialog.component';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.findUserById();
    console.log(this.profileForms.get('images')?.value);

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

  openDialog() {
    const dialogRef = this.dialog.open(UploadProfileDialogComponent, {
      data: this.profileForms.value,
    });

    dialogRef.afterClosed().subscribe((base64) => {
      this.profileForms.controls['images'].setValue(base64);
    });
  }

  get imagesPreview() {
    const value = this.profileForms.get('images')?.value;
    if(value === ''){
      return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
    }
    return 'http://localhost:5000/' + value;
  }
}
