import { Component, OnInit, Input } from '@angular/core';

import { PatientService } from '../patient.service';

import { Info } from './info';
import { PresentingIllness } from '../health-log-form/health-log-form.data-model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info: Info;
  presentingIllness: PresentingIllness;

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
    this.patientService.getPresentingIllness()
    .then((presentingIllness: PresentingIllness) => {
      this.presentingIllness = presentingIllness;
    })
    .catch((err) => { console.log(err) });
  }
}
