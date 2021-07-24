import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';


@Directive({
  selector: "[passwordStrength]",
  //it not a normal angular directive, its form alidation directive. So register as formField directive in DI.
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthDirective,
    multi: true
  }]
  /**using multi:true tel angular that th eprovider is a multi prvider.
   * With multi providers, we can provide multiple values for a single token in DI.
   * If you are registring multiple provider for the same TOKEN then always use multi:true to avoid first provider from not injected
   */
})
export class PasswordStrengthDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return createPasswordStrengthValidator()(control);
  }


}
