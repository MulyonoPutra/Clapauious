import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModule } from 'src/app/components/atoms/error-messages-form/error.messages.module';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MaterialModule, FormsModule,
    ReactiveFormsModule, ErrorMessagesModule
  ]
})
export class PaymentModule { }
