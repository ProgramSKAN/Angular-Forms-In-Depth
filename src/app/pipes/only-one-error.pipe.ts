import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'onlyOneError',
  pure: true,//pure:true (default) > the pipe only recomputes its output only if input changes
})
export class OnlyOneErrorPipe implements PipeTransform {
  //transform(value: any, ...args:string[]): any {

  transform(allErrors: any, errorsPriority: string[]): any {

    if (!allErrors) {
      return null;
    }

    const onlyOneError: any = {};

    for (let error of errorsPriority) {
      if (allErrors[error]) {
        onlyOneError[error] = allErrors[error];
        break;
      }
    }

    return onlyOneError;
  }

}
