import { Component, OnInit, Input } from '@angular/core';

import { PatientComponent } from './patient/patient.component';
import { HealthLogComponent } from './health-log/health-log.component';
import { HealthLogFormComponent } from './health-log-form/health-log-form.component';
import { HistoryComponent } from './history/history.component';

import { ConsultationService } from './consultation.service';

import { Appointment } from '../dashboard/appointment/appointment';
import { HealthLogForm } from './health-log-form/health-log-form.data-model';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  @Input() appointment: Appointment;
  patientHistory: History;
  lastHealthLog: HealthLogForm;
  constructor(
    private consultationService: ConsultationService
  ) {}

  loadPatientHistory() {
    //get patient history
    this.consultationService.getPatientHistory(this.appointment.patient.hid)
    .then((history: History) => {
      this.patientHistory = history;
    })
    .catch((err) => {
      console.log(err);
    });
  }
  loadLastHealthLog() {
    //get prev healthlog
    this.consultationService.getLastHealthLog()
    .then((healthLog: HealthLogForm) => {
      this.lastHealthLog = healthLog;
    })
    .catch((err) => { console.log(err) });
  }
  ngOnInit() {}
}
