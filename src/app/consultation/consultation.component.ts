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

  historyFlag: boolean;
  patientHistory: History;

  pastHealthLogs: Array<HealthLogForm>

  constructor(
    private consultationService: ConsultationService
  ) {
    this.historyFlag = false;
  }

  toggleHistory() {
    //getPatientHistory if not already
    if(!this.patientHistory){
      this.consultationService.getPatientHistory(this.appointment.patient.hid)
      .then((history: History) => {
        this.patientHistory = history;
        this.historyFlag = !this.historyFlag;
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else{ //already fetched patient history
      this.historyFlag = !this.historyFlag;
    }
  }
  loadPastHealthLogs() {
    this.consultationService.getHealthLogs(this.appointment.patient.hid)
    .then((healthLogs: Array<HealthLogForm>) => {
      if(this.pastHealthLogs){ //already got pastHealthLogs
        this.pastHealthLogs = this.pastHealthLogs.concat(healthLogs);
      }
      else{ //clicked for first time
        this.pastHealthLogs = healthLogs;
      }
    })
    .catch((err) => { console.log(err) });
  }
  ngOnInit() {}
}
