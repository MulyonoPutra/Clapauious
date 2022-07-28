import { Injectable } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
import { MainConstants as Constant } from '../constants/main.constants';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  public static getValidatorErrorMessage(validatorName: string, validatorValue: any) {
    let config: any = {
      required: 'Required',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
    };

    return config[validatorName];
  }

  static contentValidator(control: any) {
    if (control.value < 100) {
      return null;
    } else {
      return { minimumContentLength: true };
    }
  }

  static emailValidator(control: any) {
    if (control.value.match(Constant.EMAIL_REGEX)) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control: any) {
    if (control.value.match(Constant.PASSWORD_REGEX)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static confirmPasswordValidator(
    controlName: string,
    matchingControlName: string
  ) {
    return (formGroup: UntypedFormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.confirmPasswordValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
