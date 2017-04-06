import { Injectable } from '@angular/core';

import { Info } from './info/info';
import { HealthLogForm } from './health-log-form/health-log-form.data-model';

@Injectable()
export class PatientService {

  patientId: number;
  info: Info;
  history: Array<HealthLogForm>;

  constructor() { }

  getInfo(): Promise<Info> {
    return Promise.resolve({
      patientId: 12,
      name: 'Lakshmi Narayanan S V',
      dob: '1995-08-17',
      gender: true,
      location: 'erode'
    });
  }
  getHistory(): Promise<HealthLogForm[]> {
    return Promise.resolve([
      {
          chiefComplaints: [
            {
              complaint: 'fever',
              duration :2 //days
            }
          ],
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
          investigations: 'lab data',
          prescription:[
            {
              item: 'crocin',
              breakfast: true,
              lunch: false,
              dinner: true,
              beforeMeal: true
            },
            {
              item: 'cetrizin',
              dinner: true
            }
          ],
          dateCreated: '1990-08-01'
        },
        {
            chiefComplaints: [],
            examination: 'concious',
            //form builder replaces undefined with null values
            vitals: {
              pr:undefined,
              bp:undefined,
              rr:undefined,
              temp:undefined
            },
            systemicExamination: {
              cvs:1,
              rs:1,
              cns:null,
              pa:1
            },
            le:undefined,
            finalDiagnosis:'lrem ipsum',
            nextFollowUp: '1995-08-17',
            investigations: 'lab data',
            prescription: [],
          dateCreated: '1990-08-01'
        }
    ]);
  }
  getHealthLog(): Promise<HealthLogForm> {
    return Promise.resolve({
        chiefComplaints: [
          {
            complaint: 'fever',
            duration: 2 //days
          },
          {
            complaint: 'nausea',
            duration: 3 //days
          }
      ],
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
        investigations: 'lab data',
        prescription: [
          {
            item: 'crocin',
            breakfast: true,
            lunch: false,
            dinner: true,
            beforeMeal: false
          },
          {
            item: 'cetrizin',
            breakfast: false,
            lunch: false,
            dinner: true,
            beforeMeal: false
          }
        ],
        dateCreated: '1990-08-01'
      });
  }
  postHealthLog(healthLog: HealthLogForm): Promise<number> {
    return Promise.resolve(2); //returns insertId of form
  }

}
