import { Component, OnInit, Input } from '@angular/core';

import { HistoryComponent } from '../history/history.component';
import { PatientComponent } from '../patient/patient.component';

import { Patient } from '../patient/patient';

@Component({
  selector: 'app-health-log',
  templateUrl: './health-log.component.html',
  styleUrls: ['./health-log.component.css']
})
export class HealthLogComponent implements OnInit {
  @Input() patient: Patient;
  
  constructor() {}
  ngOnInit() {}
}
