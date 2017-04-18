import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-sub-nav',
  templateUrl: './patient-sub-nav.component.html',
  styleUrls: ['./patient-sub-nav.component.css']
})
export class PatientSubNavComponent implements OnInit {
  logDate: Date = new Date();
  constructor() { }
  ngOnInit() { }
}
