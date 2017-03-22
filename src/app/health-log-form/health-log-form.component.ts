import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { HealthLogForm } from './health-log-form.data-model';
import { Examination } from './health-log-form.data-model';

import { HealthLogFormService } from './health-log-form.service';

@Component({
  selector: 'app-health-log-form',
  templateUrl: './health-log-form.component.html',
  styleUrls: ['./health-log-form.component.css']
})
export class HealthLogFormComponent implements OnInit {
  @Input() healthLogId: number;
  healthLogForm: FormGroup;

  get chiefComplaints():  FormArray {
    return this.healthLogForm.get('chiefComplaints') as FormArray;
  }
  get prescription(): FormArray {
    return this.healthLogForm.get('prescription') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private healthLogFormService: HealthLogFormService
  ) {
    this.createForm();
  }

  createForm(){
    //create form model with empty default/empty values
    this.healthLogForm = this.fb.group({
      chiefComplaints: this.fb.array([]),
      examination: ['concious',Validators.required],
      vitals: this.fb.group({
        pr: undefined,
        bp: undefined,
        rr: undefined,
        temp: undefined
      }),
      systemicExamination: this.fb.group({
        cvs: undefined,
        rs: undefined,
        cns: undefined,
        pa: undefined
      }),
      le: '',
      finalDiagnosis: ['',Validators.required],
      nextFollowUp: '',
      prescription: this.fb.array([])
    });
    this.addPrescriptionItem();
    this.addChiefComplaint();
  }
  addPrescriptionItem(){
    this.prescription.push(this.fb.control('',Validators.required));
  }
  addChiefComplaint(){
    this.chiefComplaints.push(this.fb.control('',Validators.required));
  }
  validateForm(){
    //return true for disabled save button
    if(!this.healthLogForm.pristine && this.healthLogForm.valid){
      return false;
    }
    return true;
  }
  prepareForm(){
    //captures form model
    const formModel = this.healthLogForm.value;
    return {
      chiefComplaints: formModel.chiefComplaints.slice(0),
      examination: formModel.examination as Examination,
      vitals: Object.assign({},formModel.vitals),
      systemicExamination: Object.assign({},formModel.systemicExamination),
      le: formModel.le as string,
      finalDiagnosis: formModel.finalDiagnosis as string,
      nextFollowUp: formModel.nextFollowUp as string,
      prescription: formModel.prescription.slice(0)
    }
  }
  submitForm() {
    const healthLog = this.prepareForm();
    this.healthLogFormService.postHealthLog(healthLog)
    .then((status: boolean) => {
      if(status){
        this.healthLogForm.markAsPristine(); //disables save until form is dirty
      }
      //code...
    })
    .catch(err => console.log(err));
  }
  ngOnInit() {
    //consultation follow up
    //load healthlogs from previous consultations
    if(this.healthLogId) {
      //code...
    }
    //form for current consultation
  }
}
