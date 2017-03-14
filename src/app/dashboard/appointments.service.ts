import { Injectable } from '@angular/core';

import { Appointment } from '../appointment/appointment';

@Injectable()
export class AppointmentsService {

  constructor() { }
  getAppointments(): Promise<Appointment[]> {}

}
