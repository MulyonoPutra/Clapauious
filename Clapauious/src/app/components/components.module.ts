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
import { ErrorMessagesFormComponent } from './atoms/error-messages-form/error-messages-form.component';

import { ValidationService } from '../core/service/validation.service';
import { ErrorMessagesModule } from './atoms/error-messages-form/error.messages.module';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { PricingComponent } from './atoms/pricing/pricing.component';
import { UploadProfileDialogComponent } from './molecules/upload-profile-dialog/upload-profile-dialog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CardAnimationsComponent } from './molecules/card-animations/card-animations.component';
import { CardResponsiveComponent } from './molecules/card-responsive/card-responsive.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBackgroundComponent,
    LoginWithEmailComponent,
    LoginWithPhoneNumberComponent,
    RegisterWithEmailComponent,
    RegisterWithPhoneNumberComponent,
    SpinnerComponent,
    PricingComponent,
    UploadProfileDialogComponent,
    CardAnimationsComponent,
    CardResponsiveComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
    CoreModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBackgroundComponent,
    LoginWithEmailComponent,
    LoginWithPhoneNumberComponent,
    RegisterWithEmailComponent,
    RegisterWithPhoneNumberComponent,
    SpinnerComponent,
    PricingComponent,
    UploadProfileDialogComponent,
    CardAnimationsComponent,
    CardResponsiveComponent, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ValidationService]
})
export class ComponentsModule {}
