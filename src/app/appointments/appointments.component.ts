import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DoctorComponent } from './doctor/doctor.component';

import { Doctor } from './doctor/doctor';
import { Appointment } from "./appointment";

import { AppointmentsService } from './appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  doctor: Doctor;
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
    //get doctor info
    this.appointmentsService.getDoctor()
    .then((doctor: Doctor) => {
      this.doctor = doctor; //set property doctor
    })
    .catch((err) => {console.log(err)})
    //get appointments of doctor
    this.appointmentsService.getAppointments()
    .then((appointments: Array<Appointment>) => {
      this.appointments = appointments; //set property appointments
    })
    .catch(err => {console.log(err)})
  }

}
