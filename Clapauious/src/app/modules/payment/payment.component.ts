import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../core/service/validation.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

interface Expiration {
  date: string;
  year: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  paymentForms!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.paymentForms = this.fb.group({
      cardName: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get formCtrlValue() {
    return {
      cardName: this.paymentForms.get('cardName')?.value,
    };
  }

  get cardNameValue() {
      return this.paymentForms.get('cardName')?.value;
  }

  submit() {
    if (this.paymentForms.invalid) {
      for (const control of Object.keys(this.paymentForms.controls)) {
        this.paymentForms.controls[control].markAsTouched();
      }
      return;
    }
    console.log(this.formCtrlValue);
  }

  exp: Expiration[] = [
    { date: '01 - January', year: '2020' },
    { date: '02 - February', year: '2021' },
    { date: '03 - March', year: '2022' },
    { date: '04 - April', year: '2023' },
    { date: '05 - May', year: '2024' },
    { date: '06 - June', year: '2025' },
    { date: '07 - July', year: '2026' },
    { date: '08 - August', year: '2027' },
    { date: '09 - September', year: '2028' },
    { date: '09 - September', year: '2029' },
    { date: '11 - November', year: '2030' },
    { date: '12 - December', year: '2031' },
  ];
}
