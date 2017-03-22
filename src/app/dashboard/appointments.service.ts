import { Injectable } from '@angular/core';

import { Appointment } from '../appointment/appointment';

@Injectable()
export class AppointmentsService {

  constructor() { }
  getAppointments(): Promise<Appointment[]> {
    return Promise.resolve([
      {
        aid:1,
        patient:{
          name: 'lorem',
          hid:1,
          gender: true,
          dob: '1995-08-17',
        },
        followUp: true
      },
      {
        aid:2,
        patient:{
          name:'ipsum',
          hid:1,
          gender: false,
          dob:'1995-08-18'
        },
        followUp: false
      }
    ]);
  }

}
