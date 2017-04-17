import { Component, OnInit } from '@angular/core';

import { PatientService } from '../patient.service';

import { LogType, DiagnosisLog, PrescriptionLog } from './log';

@Component({
  selector: 'app-patient-health-timeline',
  templateUrl: './patient-health-timeline.component.html',
  styleUrls: ['./patient-health-timeline.component.css']
})
export class PatientHealthTimelineComponent implements OnInit {
  logs: any[];
  logType: any = LogType;
  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.patientService.getLogs()
    .then((logs: any[]) => {
      this.logs = logs;
    })
    .catch((err) => { console.log(err) });
  }
}
