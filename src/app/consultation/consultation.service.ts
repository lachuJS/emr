import { Injectable } from '@angular/core';

import { HealthLogForm } from './health-log-form/health-log-form.data-model';

@Injectable()
export class ConsultationService {

  constructor() { }
  getPatientHistory(hid: number): Promise<History> {
    //return promise.resolve(history: History)
    //mock data
    return Promise.resolve({
      dm: null,
      htn: null,
      ba: null,
      thyroid: true,
      seizures: null,
      presentingIllness: 'lorem'
    });
  }
  getLastHealthLog(): Promise<HealthLogForm> {
    return Promise.resolve({
        chiefComplaints: ['lorem'],
        examination: 'concious',
        //form builder replaces undefined with null values
        vitals: {
          pr:1,
          bp:1,
          rr:1,
          temp:1
        },
        systemicExamination: {
          cvs:1,
          rs:1,
          cns:null,
          pa:1
        },
        le:'lazy brown fox jumped',
        finalDiagnosis:'lrem ipsum',
        nextFollowUp: '1995-08-17',
        prescription: ['lorem 25mg'],
        dateCreated: '1990-08-01'
      });
  }
  postHealthLog(healthLog: HealthLogForm): Promise<boolean> {
    //check response code for 201 created
    return Promise.resolve(true);
    //if err
    //call error handler
  }
}
