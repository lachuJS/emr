import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { HealthLogComponent } from './health-log/health-log.component';
import { HealthLogFormComponent } from './health-log-form/health-log-form.component';

import { ConsultationService } from './consultation.service';

import { Patient } from './patient/patient';
import { HealthLogForm } from './health-log-form/health-log-form.data-model';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  patientInfo: Patient;
  today = new Date();

  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute
  ) {}

  loadPatientInfo(aid: number) {
    this.consultationService.getPatientInfo(aid)
    .then((patient: Patient) => {
      this.patientInfo = patient;
    })
    .catch((err) => { console.log(err) });
  }
  ngOnInit() {
    //get routeParam patientId
    this.route.params.forEach((params: Params) => {
      let aid = +params['aid'];
      this.loadPatientInfo(aid);
    })
  }
}
