import { Component, OnInit, Input } from '@angular/core';

import { Prescription } from './prescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor() { }

  @Input() prescription: Prescription;

  ngOnInit() {
  }

}
