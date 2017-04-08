import { Component, OnInit } from '@angular/core';

import { PatientsService } from './patients.service';

import { PatientListing } from './patient-listing';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Array<PatientListing>;
  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit() {
    this.patientsService.getPatients()
    .then((patients: Array<PatientListing>) => {
      this.patients = patients;
    })
    .catch((err) => { console.log(err) });
  }

}
