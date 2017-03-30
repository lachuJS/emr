import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultationComponent } from './consultation/consultation.component';

import { Appointment } from './dashboard/appointment/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAppointment: Appointment;

  constructor(){}
  //sets selectedAppointment
  selectAppointment(appointment: Appointment) {
    this.selectedAppointment = appointment;
  }
  goHome() {
    //if in consultation
    if(this.selectedAppointment){
      //unset selectedAppointment
      //prompt are you sure
      this.selectedAppointment = undefined;
    }
    //other route configs
    //code...
  }

}
