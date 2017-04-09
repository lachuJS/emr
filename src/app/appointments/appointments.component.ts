import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Appointment } from "./appointment";

import { AppointmentsService } from './appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  //appointments list
  appointments: Array<Appointment>;
  //badge
  get appointmentsCount():number {
    return this.appointments.length;
  }

  constructor(
    private appointmentsService: AppointmentsService
  ) {}

  removeAppointment(index: number) {
    this.appointments.splice(index,1);
  }
  ngOnInit() {
    //get appointments of doctor
    this.appointmentsService.getAppointments()
    .then((appointments: Array<Appointment>) => {
      this.appointments = appointments; //set property appointments
    })
    .catch(err => {console.log(err)})
  }

}
