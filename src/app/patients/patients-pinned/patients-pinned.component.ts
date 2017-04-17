import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PatientsService } from '../patients.service';

import { Pinned } from './pinned';

@Component({
  selector: 'app-patients-pinned',
  templateUrl: './patients-pinned.component.html',
  styleUrls: ['./patients-pinned.component.css']
})
export class PatientsPinnedComponent implements OnInit {
  patients: Array<Pinned>;
  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) { }

  goToPatient(patientId: number) {
    this.router.navigate(['/patient',patientId]);
  }
  ngOnInit() {
    this.patientsService.getPatients()
    .then((patients: Array<Pinned>) => {
      this.patients = patients;
    })
    .catch((err) => { console.log(err) });
  }

}
