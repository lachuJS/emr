import { Component, OnInit, Input } from '@angular/core';

import { PatientService } from '../../patient.service';

import { PrescriptionLog } from '../log';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  @Input() prescriptionLog: PrescriptionLog;
  constructor() {
  }
  ngOnInit() {
    console.log(this.prescriptionLog);
    
  }
}
