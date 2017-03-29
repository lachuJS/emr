import { Injectable } from '@angular/core';

import { Doctor } from './doctor/doctor';
import { Appointment } from './appointment/appointment';

@Injectable()
export class DashboardService {

  constructor() { }
  getDoctor(): Promise<Doctor> {
    return Promise.resolve({
      name: 'doctor name (or) room number',
      info: 'Peadatrics ward. Dr.doctor and Dr.dexter'
    });
  }
  getAppointments(): Promise<Appointment[]> {
    return Promise.resolve([
      {
        aid:1,
        patient:{
          name: 'Patient Name',
          hid:1,
          gender: true,
          dob: '1995-08-17',
          location: 'a-block, kumaran towers, thindal, erode'
        },
        dateTimeCreated: '2000-01-01'
      },
      {
        aid:2,
        patient:{
          name:'Some Name',
          hid:1,
          gender: false,
          dob:'1995-08-18',
          location: 'pallipalayam,erode'
        },
        dateTimeCreated: '2000-01-01'
      }
    ]);
  }

}
