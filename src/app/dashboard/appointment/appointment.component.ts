import { Component, OnInit, Input } from '@angular/core';

import { Appointment } from './appointment';
import { ConsultationComponent } from '../../consultation/consultation.component'; 

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @Input() appointment: Appointment;
  consultation: boolean;
  constructor() {
    this.closeConsultation();
  }

  openConsultation() {
    this.consultation = true;
  }
  closeConsultation() {
    this.consultation = false;
  }
  ngOnInit() {
  }

}
