import { Component, OnInit, Input } from '@angular/core';

import { PatientComponent } from '../patient/patient.component';
import { HealthLogFormComponent } from '../health-log-form/health-log-form.component';
import { HistoryComponent } from '../history/history.component';

import { Consultation } from './consultation';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  @Input() consultation: Consultation;
  healthLogForm: number;
  constructor() {}

  ngOnInit() {
    this.healthLogForm = this.consultation.followUp ? this.consultation.aid : null;
  }
}
