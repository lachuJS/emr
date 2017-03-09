/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ExaminationPipe } from './examination.pipe';

describe('ExaminationPipe', () => {
  const pipe
  beforeEach(() => {
    pipe = new ExaminationPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should say concious if true',() => {
    expect(pipe.transform(true)).toEqual('concious');
  });
  it('should say oriented if false', () => {
    expect(pipe.transform(false)).toEqual('oriented');
  })
});
