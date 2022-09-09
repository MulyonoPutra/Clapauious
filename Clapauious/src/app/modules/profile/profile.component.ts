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
import { ProfilePayload, Profiles } from '../../core/interface/profile';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadProfileDialogComponent } from 'src/app/components/molecules/upload-profile-dialog/upload-profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  isList:   number = 0;
  isMenu:   boolean = false;
  isSearch: boolean = false;

  profileForms!: UntypedFormGroup;
  profile!: ProfilePayload;

  imageData!: string;
  profiles!: Profiles;

  host = 'http://localhost:5000/';

  constructor(
    private fb: UntypedFormBuilder,
    private tokenService: AuthService,
    private userService: UserService,
    private snackbar: MessagesService,
    private errorService: ErrorService,
    private authService: AuthService,
    private router: Router,
    public  dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.findUserById();
  }

  initForms(): void {
    this.profileForms = this.fb.group({
      name:     ['', Validators.required],
      images:   [''],
      phone:    [''],
      email:    ['', Validators.required],
      address:  ['', Validators.required],
      state:    ['', Validators.required],
      city:     ['', Validators.required],
      zipCode:  ['', Validators.required],
      country:  ['', Validators.required],
      description: [''],
    });
  }

  get formCtrlValue() {
    return {
      name:         this.profileForms.get('name')?.value,
      images:       this.profileForms.get('images')?.value,
      phone:        this.profileForms.get('phone')?.value,
      email:        this.profileForms.get('email')?.value,
      address:      this.profileForms.get('address')?.value,
      state:        this.profileForms.get('state')?.value,
      city:         this.profileForms.get('city')?.value,
      zipCode:      this.profileForms.get('zipCode')?.value,
      country:      this.profileForms.get('country')?.value,
      description:  this.profileForms.get('description')?.value,
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
      name:        this.profile.name,
      email:       this.profile.email,
      phone:       this.profile.phone,
      images:      this.profile.images,
      address:     this.profile.address,
      city:        this.profile.city,
      state:       this.profile.state,
      country:     this.profile.country,
      zipCode:     this.profile.zipCode,
      description: this.profile.description,
    });
  }

  changeFile(event: any) {
    const file = event.target.files[0]!;
    this.profileForms.patchValue({ images: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
        console.log(this.imageData)
      };

      reader.readAsDataURL(file);

    }
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
    });
  }

  updated() {
    const userId = this.profile._id;

    const profiles = {
      name:        this.profileForms.get('name')?.value,
      email:       this.profileForms.get('email')?.value,
      phone:       this.profileForms.get('phone')?.value,
      images:      this.profileForms.get('images')?.value,
      address:     this.profileForms.get('address')?.value,
      city:        this.profileForms.get('city')?.value,
      state:       this.profileForms.get('state')?.value,
      country:     this.profileForms.get('country')?.value,
      zipCode:     this.profileForms.get('zipCode')?.value,
      description: this.profileForms.get('description')?.value,
    };

    this.userService
      .updated(
        userId,
        profiles.name,
        profiles.email,
        profiles.images,
        profiles.phone,
        profiles.address,
        profiles.city,
        profiles.state,
        profiles.country,
        profiles.zipCode,
        profiles.description
      )
      .subscribe({
        next: () => {
          this.snackbar.success('Update successfully..', 1500);
          setTimeout(() => {
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          }, 1100);
        },
        error: (error) => {
          this.errorService.getErrorMessage(error);
        },
      });
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
    if (value !== '') {
      return this.host + value;
    }
    return value;
  }
}
