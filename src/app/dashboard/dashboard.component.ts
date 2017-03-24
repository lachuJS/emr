import { Component, OnInit } from '@angular/core';

import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { Doctor } from './doctor/doctor';
import { Appointment } from './appointment/appointment';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  doctor: Doctor;
  appointments: Array<Appointment>;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    //get doctor info
    this.dashboardService.getDoctor()
    .then((doctor: Doctor) => {
      this.doctor = doctor; //set property doctor
    })
    .catch((err) => {console.log(err)})
    //get appointments of doctor
    this.dashboardService.getAppointments()
    .then((appointments: Array<Appointment>) => {
      this.appointments = appointments; //set property appointments
    })
    .catch(err => {console.log(err)})
  }

}
