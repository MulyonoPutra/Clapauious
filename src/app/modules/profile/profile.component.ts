import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;

  profileForms!:  UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.profileForms = this.fb.group({
      username: ['', Validators.required],
      profilePicture: [''],
      phone: ['', [Validators.required]],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      description: [''],
    })
  }

  get formCtrlValue() {
    return {
      username: this.profileForms.get('username')?.value,
      profilePicture: this.profileForms.get('profilePicture')?.value,
      phone: this.profileForms.get('phone')?.value,
      email: this.profileForms.get('email')?.value,
      address: this.profileForms.get('address')?.value,
      city: this.profileForms.get('city')?.value,
      zipCode: this.profileForms.get('city')?.value,
      country: this.profileForms.get('country')?.value,
      description: this.profileForms.get('description')?.value,
    };
  }

  update() {
    console.log(this.formCtrlValue)
  }

}
