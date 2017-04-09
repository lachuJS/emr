import { Injectable } from '@angular/core';

import { Appointment } from './appointment';

@Injectable()
export class AppointmentsService {

  constructor() { }
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
