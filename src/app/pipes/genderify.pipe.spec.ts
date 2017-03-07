/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GenderifyPipe } from './genderify.pipe';

describe('GenderifyPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new GenderifyPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should display male if true',() => {
    expect(pipe.transform(true)).toEqual('male');
  });
  it('should display female if false',()=>{
    expect(pipe.transform(false)).toEqual('female');
  })
});
