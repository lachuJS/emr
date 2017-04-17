import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Appointment } from './patients-appointment/appointment';
import { Pinned } from "./patients-pinned/pinned";

@Injectable()
export class PatientsService {
  appointmentsCount = new BehaviorSubject<number>(undefined);
  pinnedCount = new BehaviorSubject<number>(undefined);
  constructor() { }

  getPatients(): Promise<Pinned[]>{
    let patients= [
      {
        hid: 2,
        name: 'lachu',
        admittedOn: '2000-01-01'
      },
      {
        hid : 223,
        name: 'raj',
        admittedOn: '2000-01-01'
      }
    ];
    this.pinnedCount.next(patients.length);
    return Promise.resolve(patients);
  }
  getAppointments(): Promise<Appointment[]> {
    let appointments = [
      {
        aid:1,
        patient:{
          name: 'Lakshmi Narayananan S V',
          patientId:1,
        },
        dateTimeCreated: '2000-01-01'
      },
      {
        aid:2,
        patient:{
          name:'Some Name',
          patientId:1,
        },
        dateTimeCreated: '2000-01-01'
      }
    ];
    //set appointmentsCount
    this.appointmentsCount.next(appointments.length);
    return Promise.resolve(appointments);
  }
}
