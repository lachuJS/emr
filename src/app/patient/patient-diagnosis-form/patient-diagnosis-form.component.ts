import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { PatientService } from '../patient.service';

import { ChiefComplaint } from './diagnosis';
import { Examination } from './diagnosis';
import { Vitals } from './diagnosis';
import { SystemicExamination } from './diagnosis';
import { Diagnosis } from './diagnosis';

@Component({
  selector: 'app-patient-diagnosis-form',
  templateUrl: './patient-diagnosis-form.component.html',
  styleUrls: ['./patient-diagnosis-form.component.css']
})
export class PatientDiagnosisFormComponent implements OnInit {
  diagnosisForm: FormGroup;
  get chiefComplaints() {
    return this.diagnosisForm.get('chiefComplaints') as FormArray;
  }
  constructor(
    private patientService: PatientService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm () {
    this.diagnosisForm = this.fb.group({
      chiefComplaints : this.fb.array([]),
      examination : 'concious',
      vitals : this.fb.group(new Vitals()),
      systemicExamination : this.fb.group(new SystemicExamination()),
      le : '',
      finalDiagnosis : '',
      followUpDate : new Date()
    });
    this.addChiefComplaint();
  }
  addChiefComplaint() {
    this.chiefComplaints.push(this.fb.group(new ChiefComplaint()));
  }
  removeChiefComplaint(index: number) {
    if(this.chiefComplaints.length > 1) {
      this.chiefComplaints.removeAt(index);
    }
  }
  captureForm() {
    const formModel = this.diagnosisForm.value;
    return new Diagnosis({
      chiefComplaints: formModel.chiefComplaints.slice(0),
      examination : formModel.examination as Examination,
      vitals : Object.assign({},formModel.vitals),
      systemicExamination : Object.assign({},formModel.systemicExamination),
      le : formModel.le as string,
      finalDiagnosis : formModel.finalDiagnosis as string,
      followUpDate : formModel.followUpDate as string
    });
  }
  saveForm() {
    let diagnosis = this.captureForm();
    this.patientService.postDiagnosis(diagnosis)
    .then((status: boolean) => {
      if (status) {
        console.log(diagnosis);
      }
    })
    .catch((err) => { console.log(err) });
  }
  ngOnInit() {}

}
