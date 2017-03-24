import { Injectable } from '@angular/core';

import { HealthLogForm } from "../health-log-form/health-log-form.data-model";

@Injectable()
export class HealthLogService {

  constructor() { }
  getHealthLogs(appointmentId): Promise<HealthLogForm[]> {
    return Promise.resolve([
      {
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
          cns:1,
          pa:1
        },
        le:'lazy brown fox jumped',
        finalDiagnosis:'lrem ipsum',
        nextFollowUp: '1995-08-17',
        prescription: ['lorem 25mg']
      },
      {
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
          cns:1,
          pa:1
        },
        le:'lazy brown fox jumped',
        finalDiagnosis:'lrem ipsum',
        nextFollowUp: '1995-08-17',
        prescription: ['lorem 25mg']
      }
    ]);
  }
}
