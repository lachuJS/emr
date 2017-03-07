/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AgifyPipe } from './agify.pipe';

describe('AgifyPipe', () => {
  it('create an instance', () => {
    const pipe = new AgifyPipe();
    expect(pipe).toBeTruthy();
  });
  it('should agify the date',()=>{
    const pipe = new AgifyPipe();
    expect(pipe.transform('17/08/1995')).toEqual(21);
  })
});
