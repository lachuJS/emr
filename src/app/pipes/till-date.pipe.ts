import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tillDate'
})
export class TillDatePipe implements PipeTransform {

  transform(days: number, args?: any): any {
    let todayDate = new Date();
    days = typeof days == 'string' ? +days : days;
    //add days
    todayDate.setDate(todayDate.getDate() + days);
    return todayDate.toISOString();
  }

}
