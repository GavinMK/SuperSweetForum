import { Directive } from '@angular/core';
import {UserService} from '../users/user.service';
import {FormControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import {map, tap} from 'rxjs/operators';

export function checkAvailability(userService: UserService){
  return(c : FormControl) => {
    return userService.getUserByName(c.value).pipe(
      map(response =>  !response.length ? null :  { userTaken : true })
    )
  }
}
@Directive({
  selector: '[appUsernameValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator{

  private validate_: Function;

  constructor(private userService: UserService) {
    this.validate_ = checkAvailability(userService);
  }

  validate(c: FormControl): ValidationErrors{
    return this.validate_(c);
  }

}
