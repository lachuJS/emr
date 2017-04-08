import { Injectable } from '@angular/core';

import { PatientListing } from "./patient-listing";

@Injectable()
export class PatientsService {

  constructor() { }

  getPatients(): Promise<PatientListing[]>{
    return Promise.resolve([
      {
        hid: 2,
        name: 'lachu',
        finalDiagnosis: 'surgery'
      },
      {
        hid : 223,
        name: 'raj',
        finalDiagnosis: 'mental illness'
      }
    ])
  }
}
