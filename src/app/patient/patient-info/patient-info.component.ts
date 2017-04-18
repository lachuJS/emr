import { Component, OnInit, Input } from '@angular/core';

import { PatientService } from '../patient.service';

import { Info } from './patient-info';
import { PresentingIllness } from '../patient-health-log-form.data-model';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  info: Info;
  activeMedications: Array<any>;

  constructor(
    private patientService: PatientService
  ) {}

  ngOnInit() {
    //personal
    this.patientService.getInfo()
    .then((info: Info) => {
      this.info = info;
    })
    .catch((err) => { console.log(err); });
    //presenting illness
    this.patientService.getActiveMedications()
    .then((medications: Array<any>) => {
      console.log(medications);
      this.activeMedications = medications;
    })
    .catch((err) => { console.log(err) });
  }
}
