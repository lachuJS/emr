import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientPinned: boolean;
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}
  get buttonState() {
    return this.patientPinned == true ? 'unpin patient' : 'pin patient';
  }

  updatePin(){
    this.patientService.updatePin()
    .catch(err => { console.log(err); });
  }
  ngOnInit() {
    //get routeParam patientId and set service patientId property
    this.route.params.forEach((params: Params) => {
      let patientId = +params['patientId'];
      this.patientService.patientId = patientId;
    });
    //subscribe to patientPinned
    this.patientService.pinned.subscribe((value: boolean) => {
      this.patientPinned = value;
    });
  }
}
