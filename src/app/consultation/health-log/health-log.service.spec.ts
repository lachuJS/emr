/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthLogService } from './health-log.service';

describe('HealthLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthLogService]
    });
  });

  it('should ...', inject([HealthLogService], (service: HealthLogService) => {
    expect(service).toBeTruthy();
  }));
});
