import { Component, OnInit, Input } from '@angular/core';

import { DoctorService } from './doctor.service';

import { Doctor } from './doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctor: Doctor;

  constructor(
    private doctorService: DoctorService
  ) {}
  ngOnInit() {
    this.doctorService.getDoctor()
    .then((doctor: Doctor) => {
      this.doctor = doctor;
    })
    .catch((err) => { console.log(err) });
  }
}
