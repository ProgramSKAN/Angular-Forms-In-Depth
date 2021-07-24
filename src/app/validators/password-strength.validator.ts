import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//this can directly used in reactive forms
//but for emplate form, write a directive on top of this
export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}
