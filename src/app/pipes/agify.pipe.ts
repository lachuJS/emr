/*
  Usage:
    date-string | agify
  Example:
    "1995-08-17" | agify

    formats to: 21
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agify'
})
export class AgifyPipe implements PipeTransform {

  transform(value: any): number {
    let birthday = new Date( value );
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
