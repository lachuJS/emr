import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultationComponent } from './consultation/consultation.component';

import { Appointment } from './dashboard/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
}
