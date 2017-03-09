import { Component, OnInit, Input } from '@angular/core';

import { DiagnosedComponent } from './diagnosed/diagnosed.component';
import { VitalsComponent } from './vitals/vitals.component';
import { SystemicExaminationComponent } from './systemic-examination/systemic-examination.component';

import {Diagnosis} from './diagnosis';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  constructor() {}

  @Input() diagnosis: Diagnosis;

  ngOnInit() {
  }

}
