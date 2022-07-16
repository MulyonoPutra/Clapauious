import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBackgroundComponent } from './atoms/side-background/side-background.component';
import { MaterialModule } from '../shared/material.module';
import { LoginWithEmailComponent } from './molecules/login-with-email/login-with-email.component';
import { LoginWithPhoneNumberComponent } from './molecules/login-with-phone-number/login-with-phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterWithEmailComponent } from './molecules/register-with-email/register-with-email.component';
import { RegisterWithPhoneNumberComponent } from './molecules/register-with-phone-number/register-with-phone-number.component';
import { ErrorMessagesFormComponent } from './error-messages-form/error-messages-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBackgroundComponent,
    LoginWithEmailComponent,
    LoginWithPhoneNumberComponent,
    RegisterWithEmailComponent,
    RegisterWithPhoneNumberComponent,
    ErrorMessagesFormComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBackgroundComponent,
    LoginWithEmailComponent,
    LoginWithPhoneNumberComponent,
    RegisterWithEmailComponent,
    RegisterWithPhoneNumberComponent,
    ErrorMessagesFormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
