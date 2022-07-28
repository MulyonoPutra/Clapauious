import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModule } from 'src/app/components/atoms/error-messages-form/error.messages.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ErrorMessagesFormComponent } from 'src/app/components/atoms/error-messages-form/error-messages-form.component';
import { ValidationService } from 'src/app/core/service/validation.service';


@NgModule({
  declarations: [
    PaymentComponent,ErrorMessagesFormComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MaterialModule, FormsModule,
    ReactiveFormsModule, ComponentsModule
  ],
  providers: [ValidationService]
})
export class PaymentModule { }
