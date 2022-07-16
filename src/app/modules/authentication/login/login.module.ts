import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  CommonModule,
    LoginRoutingModule, MaterialModule, ComponentsModule, ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginModule { }
