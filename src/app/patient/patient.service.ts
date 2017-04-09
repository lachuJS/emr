import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Info } from './patient-info/patient-info';
import { HealthLogForm } from './patient-health-log-form/patient-health-log-form.data-model';
import { PresentingIllness } from './patient-health-log-form/patient-health-log-form.data-model';

@Injectable()
export class PatientService {

  patientId: number;
  //pinned BehaviorSubject
  pinned = new BehaviorSubject<boolean>(undefined);

  constructor() { }

  //info
  getInfo(): Promise<Info> {
    let info = {
      patientId: 12,
      name: 'Lakshmi Narayanan S V',
      dob: '1995-08-17',
      gender: true,
      location: 'erode',
      pinned: true
    }
    //set pin
    this.pinned.next(info.pinned);
    //get personal, and pin flag from patient table
    return Promise.resolve(info);
  }
  getPresentingIllness(): Promise<PresentingIllness> {
    return Promise.resolve({
      healthLogId: 1,
      finalDiagnosis: 'hypertension',
      medications: ['drugA-25mg']
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
          presentingIllness : false,
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
            presentingIllness : false,
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
  getHealthLogs(): Promise<HealthLogForm[]> {
    return Promise.resolve([
      {
          id:1,
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
          presentingIllness : false,
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
            id:2,
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
            presentingIllness : false,
            nextFollowUp: '1995-08-17',
            investigations: 'lab data',
            prescription: [],
          dateCreated: '1990-08-01'
        }
    ]);
  }
  updatePin(): Promise<boolean>{
    //send http request to set pin of this.patientId of patient table true
    //return status
    this.pinned.next(!this.pinned.value);
    return Promise.resolve(true);
  }

}
