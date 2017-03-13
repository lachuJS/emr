/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthLogFormService } from './health-log-form.service';

describe('HealthLogFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthLogFormService]
    });
  });

  it('should ...', inject([HealthLogFormService], (service: HealthLogFormService) => {
    expect(service).toBeTruthy();
  }));
});
