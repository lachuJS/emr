import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examination'
})
export class ExaminationPipe implements PipeTransform {

  transform(value: boolean): any {
    return value==true ? 'concious' : 'oriented';
  }

}
