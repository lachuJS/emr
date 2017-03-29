import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() consultation = new EventEmitter();
  get appointmentsCount():number {
    return this.appointments.length;
  }
  get appointmentsShow():boolean {
    return this.appointments.length != 0;
  }

  constructor(
    private dashboardService: DashboardService
  ) { }
  openConsultation(appointment: Appointment){
    this.consultation.emit(appointment);
  }
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
