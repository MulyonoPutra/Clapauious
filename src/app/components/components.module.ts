import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBackgroundComponent } from './atoms/side-background/side-background.component';
import { MaterialModule } from '../shared/material.module';
import { LoginWithEmailComponent } from './molecules/login-with-email/login-with-email.component';
import { LoginWithPhoneNumberComponent } from './molecules/login-with-phone-number/login-with-phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBackgroundComponent,
    LoginWithEmailComponent,
    LoginWithPhoneNumberComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBackgroundComponent,
    LoginWithEmailComponent,
    LoginWithPhoneNumberComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
