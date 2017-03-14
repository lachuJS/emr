import { Component, OnInit } from '@angular/core';

import { Appointment } from '../appointment/appointment';

import { AppointmentsService } from './appointments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments: Array<Appointment>;
  constructor(
    private appointmentsService: AppointmentsService
  ) { }

  ngOnInit() {
    this.appointmentsService.getAppointments()
    .then((appointments: Array<Appointment>) => {
      this.appointments = appointments;
    })
    .catch(err => {console.log(err)})
  }

}
