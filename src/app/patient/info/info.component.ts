import { Component, OnInit, Input } from '@angular/core';

import { PatientService } from '../patient.service';
import { Info } from './info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info: Info;

  constructor(
    private patientService: PatientService
  ) {}

  ngOnInit() {
      this.patientService.getInfo()
      .then((info: Info) => {
        this.info = info;
      })
      .catch((err) => { console.log(err); });
  }
}
