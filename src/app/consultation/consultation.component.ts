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
  appointmentHealthLogs: Array<HealthLogForm>;
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
  loadAppointmentHealthLogs() {
    //get prev healthlogs if followUp appointment
    if(this.appointment.followUp) {
      this.consultationService.getAppointmentHealthLogs(this.appointment.aid)
      .then((healthLogs: Array<HealthLogForm>) => {
        this.appointmentHealthLogs = healthLogs;
      })
      .catch((err) => { console.log(err) });
    }
  }
  ngOnInit() {}
}
