import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Appointment } from "./appointment";

import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients-appointment',
  templateUrl: './patients-appointment.component.html',
  styleUrls: ['./patients-appointment.component.css']
})
export class PatientsAppointmentComponent implements OnInit {
  //appointments list
  appointments: Array<Appointment>;
  //badge
  get appointmentsCount():number {
    return this.appointments.length;
  }

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) {}

  goToPatient(patientId: number) {
    this.router.navigate(['/patient',patientId]);
  }
  ngOnInit() {
    //get appointments of doctor
    this.patientsService.getAppointments()
    .then((appointments: Array<Appointment>) => {
      this.appointments = appointments; //set property appointments
    })
    .catch(err => {console.log(err)})
  }

}
