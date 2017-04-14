import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Investigations } from './investigations';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-investigations-form',
  templateUrl: './patient-investigations-form.component.html',
  styleUrls: ['./patient-investigations-form.component.css']
})
export class PatientInvestigationsFormComponent implements OnInit {
  investigationsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {
    this.createForm();
  }
  createForm(){
    this.investigationsForm = this.fb.group(new Investigations());
  }
  captureForm() {
    const formModel = this.investigationsForm.value;
    return new Investigations(formModel.data);
  }
  saveForm() {
    const investigations = this.captureForm();
    this.patientService.postInvestigations(investigations)
    .then((status: boolean) => {
      console.log(investigations);
    })
    .catch((err) => { console.log(err); })
  }
  ngOnInit() {
  }

}
