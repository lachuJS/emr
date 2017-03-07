import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderify'
})
export class GenderifyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value==true ? 'male' : 'female';
  }

}
