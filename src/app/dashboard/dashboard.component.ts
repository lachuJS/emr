import { Component, OnInit } from '@angular/core';

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
    //get appointments of doctor
    this.dashboardService.getAppointments()
    .then((appointments: Array<Appointment>) => {
      this.appointments = appointments;
    })
    .catch(err => {console.log(err)})
  }

}
