import { Injectable } from '@angular/core';

import { Doctor } from './doctor/doctor';
import { Appointment } from './appointment';

@Injectable()
export class AppointmentsService {

  constructor() { }
  getDoctor(): Promise<Doctor> {
    return Promise.resolve({
      name: 'Room 201',
      info: 'Peadatrics ward. Dr.doctor and Dr.dexter'
    });
  }
  getAppointments(): Promise<Appointment[]> {
    return Promise.resolve([
      {
        aid:1,
        patient:{
          name: 'Lakshmi Narayananan S V',
          hid:1,
        },
        dateTimeCreated: '2000-01-01'
      },
      {
        aid:2,
        patient:{
          name:'Some Name',
          hid:1,
        },
        dateTimeCreated: '2000-01-01'
      }
    ]);
  }

}
