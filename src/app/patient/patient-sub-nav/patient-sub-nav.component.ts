import { Component, OnInit } from '@angular/core';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-sub-nav',
  templateUrl: './patient-sub-nav.component.html',
  styleUrls: ['./patient-sub-nav.component.css']
})
export class PatientSubNavComponent implements OnInit {
  patientPinned: boolean;
  constructor(
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
    //subscribe to patientPinned
    this.patientService.pinned.subscribe((value: boolean) => {
      console.log(value);
      this.patientPinned = value;
    });
  }
}
