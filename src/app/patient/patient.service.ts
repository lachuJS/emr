import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Info } from './patient-info/patient-info';
import { HealthLogForm } from './patient-health-log-form.data-model';
import { PresentingIllness } from './patient-health-log-form.data-model';

import { LogType,DiagnosisLog,PrescriptionLog } from './patient-health-timeline/log';
import { Diagnosis,Examination } from './patient-diagnosis-form/diagnosis';
import { Prescription } from './patient-prescription-form/prescription';
import { Investigations } from './patient-investigations-form/investigations';

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
  updatePin(): Promise<boolean>{
    //send http request to set pin of this.patientId of patient table true
    //return status
    this.pinned.next(!this.pinned.value);
    return Promise.resolve(true);
  }
  postDiagnosis(diagnosis: Diagnosis): Promise<boolean>{
    //post diagnosis
    return Promise.resolve(true);
  }
  postPrescriptions(prescriptions: Array<Prescription>): Promise<boolean>{
    return Promise.resolve(true);
  }
  postInvestigations(investigations: Investigations): Promise<boolean> {
    return Promise.resolve(true);
  }
  getLogs(): Promise<any[]> {
    return Promise.resolve([
      {
      id: 12,
      type: LogType.diagnosis,
      dateTime: new Date().toString(),
      chiefComplaints: [{complaint:'cold',duration:2}],
      examination: Examination['concious'],
      vitals: {bp:100,rr:100,pr:100,temp:100},
      systemicExamination:{cvs:100,cns:100,rs:100,pa:100},
      le:'lorem ipsum again again lazy brown cat jumped',
      finalDiagnosis: 'flu',
      followUpDate: '2018-01-01',
    },
    {
      id:123,
      type: LogType.prescription,
      dateTime: new Date().toString(),
      prescriptions : [
        {
          drug : 'crocin',
          quantity : 1,
          dosageInstruction: {
            morning : true,
            afternoon : true,
            night: true,
            beforeFood : false,
            numberDays : 3,
            vernacularNote : 'to be taken with cold water'
          }
        }
      ]
    },
    {
    id: 12,
    type: LogType.diagnosis,
    dateTime: new Date().toString(),
    chiefComplaints: [{complaint:'cold',duration:2}],
    examination: Examination['concious'],
    vitals: {bp:100,rr:100,pr:100,temp:100},
    systemicExamination:{cvs:100,cns:100,rs:100,pa:100},
    le:'lorem ipsum again again lazy brown cat jumped',
    finalDiagnosis: 'flu',
    followUpDate: '2018-01-01',
    }
  ]);
  }
  //get track data for BP
  getBpTrack(): Promise<any[][]>{
    return Promise.resolve(
      [ ['1995-08-12','80','110'],
        ['1996-03-12','76','140'],
        ['1997-09-12','65','90'],
        ['2001-06-12','80','110'],
        ['2002-01-12','50','150'],
        ['2005-05-12','80','160'],
        ['2016-02-12','76','180'] ]
    );
  }
  //get active medications
  getActiveMedications(): Promise<any[]> {
    //query prescriptions (drug, tillDate) where tillDate >= curDate()
    return Promise.resolve([
      {
        drug : 'crocin',
        tillDate : '2018-01-01',
      },
      {
        drug : 'metacin',
        tillDate : '2017-12-12'
      }
    ]);
  }
}
