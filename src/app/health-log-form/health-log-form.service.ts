import { Injectable } from '@angular/core';

import { HealthLogForm } from './health-log-form.data-model';

@Injectable()
export class HealthLogFormService {

  constructor() { }
  postHealthLog(healthLog: HealthLogForm): Promise<boolean> {}
  getHealthLog(healthLogId: number): Promise<HealthLogForm> {}
  getLastHealthLog(): Promise<HealthLogForm> {}

}
