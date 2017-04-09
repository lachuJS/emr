import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
    private patientsService: PatientsService,
    private router: Router
  ) { }

  goToPatient(patientId: number) {
    this.router.navigate(['/patient',patientId]);
  }
  ngOnInit() {
    this.patientsService.getPatients()
    .then((patients: Array<PatientListing>) => {
      this.patients = patients;
    })
    .catch((err) => { console.log(err) });
  }

}
