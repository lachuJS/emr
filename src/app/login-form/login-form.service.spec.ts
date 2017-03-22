/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginFormService } from './login-form.service';

describe('LoginFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormService]
    });
  });

  it('should ...', inject([LoginFormService], (service: LoginFormService) => {
    expect(service).toBeTruthy();
  }));
});
