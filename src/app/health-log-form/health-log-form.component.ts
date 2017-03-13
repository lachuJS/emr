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

  constructor(
    private fb: FormBuilder,
    private healthLogFormService: HealthLogFormService
  ) {
    if(this.healthLogId===undefined){
      this.createForm();
    }
  }
  createForm(){
    //create form model with empty default/empty values
    this.healthLogForm = this.fb.group({
      chiefComplaints: this.fb.array([
        ['',Validators.required],
      ]),
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
      prescription: this.fb.array([
        ['',Validators.required]
      ])
    });
  }
  createEditForm(healthLog: HealthLogForm){
    this.healthLogForm = this.fb.group({
      chiefComplaints: this.fb.array(healthLog.chiefComplaints),
      examination: healthLog.examination,
      vitals: this.fb.group({
        pr: healthLog.vitals.pr,
        bp: healthLog.vitals.bp,
        rr: healthLog.vitals.rr,
        temp: healthLog.vitals.temp
      }),
      systemicExamination: this.fb.group({
        cvs: healthLog.systemicExamination.cvs,
        rs: healthLog.systemicExamination.rs,
        cns: healthLog.systemicExamination.cns,
        pa: healthLog.systemicExamination.pa
      }),
      le: healthLog.le,
      finalDiagnosis: healthLog.finalDiagnosis,
      nextFollowUp: healthLog.nextFollowUp,
      prescription: this.fb.array(healthLog.prescription)
    });
  }
  addControl(formArray: Array<any>): void{
    formArray.push('');
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
        this.healthLogForm.reset();
      }
      //code...
    })
    .catch(err => console.log(err));
  }
  ngOnInit() {
    //consultation follow up
    if(this.healthLogId === null){
      this.healthLogFormService.getLastHealthLog()
      .then((healthLog: HealthLogForm) => {
        this.createEditForm(healthLog);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else{
      this.healthLogFormService.getHealthLog(this.healthLogId)
      .then((healthLog: HealthLogForm) => {
        this.createEditForm(healthLog);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
