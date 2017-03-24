import { Injectable } from '@angular/core';

import { HealthLogForm } from './health-log-form.data-model';

@Injectable()
export class HealthLogFormService {

  constructor() { }
  postHealthLog(healthLog: HealthLogForm): Promise<boolean> {
    //check response code for 201 created
    return Promise.resolve(true);
    //if err
    //call error handler
  }
  getHealthLog(healthLogId: number): Promise<HealthLogForm> {
    //return array of forms but one for now...
    //code...
    return Promise.resolve({
      chiefComplaints: ['fever','nausea'],
      examination: 'concious',
      finalDiagnosis: ['flu'],
      prescription: ['pacimol']
    })
  }

}
