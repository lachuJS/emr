import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { HealthLogForm } from './health-log-form.data-model';
import { Examination } from './health-log-form.data-model';

import { ConsultationService } from '../consultation.service';

@Component({
  selector: 'app-health-log-form',
  templateUrl: './health-log-form.component.html',
  styleUrls: ['./health-log-form.component.css']
})
export class HealthLogFormComponent implements OnInit {
  @Input() aid: number;
  healthLogForm: FormGroup;
  todayDate:Date;

  //flags to show/hide formgroups
  vitalsFlag:boolean;
  systemicExaminationFlag: boolean;
  leFlag: boolean;

  toggleVitals(){
    this.vitalsFlag = !this.vitalsFlag;
  }
  toggleSystemicExamination(){
    this.systemicExaminationFlag = !this.systemicExaminationFlag;
  }
  toggleLe(){
    this.leFlag = !this.leFlag;
  }

  get chiefComplaints():  FormArray {
    return this.healthLogForm.get('chiefComplaints') as FormArray;
  }
  get prescription(): FormArray {
    return this.healthLogForm.get('prescription') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private consultationService: ConsultationService
  ) {
    //healthLog date
    this.todayDate = new Date();
    this.vitalsFlag = false;
    this.systemicExaminationFlag = false;
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
  //edit form to main healthlog of appointment
  createEditForm(healthLog: HealthLogForm) {
    this.healthLogForm = this.fb.group({
      chiefComplaints : this.fb.array(healthLog.chiefComplaints),
      examination : healthLog.examination,
      vitals : this.fb.group(healthLog.vitals),
      systemicExamination : this.fb.group(healthLog.systemicExamination),
      le : healthLog.le,
      finalDiagnosis : healthLog.finalDiagnosis,
      nextFollowUp : healthLog.nextFollowUp,
      prescription : this.fb.array(healthLog.prescription)
    });
  }
  //add remove buttons
  addPrescriptionItem(){
    this.prescription.push(this.fb.control('',Validators.required));
  }
  addChiefComplaint(){
    this.chiefComplaints.push(this.fb.control('',Validators.required));
  }
  removePrescriptionItem(){
    if(this.prescription.length > 1) {
      this.prescription.removeAt(this.prescription.length-1);
    }
  }
  removeChiefComplaint(){
    if(this.chiefComplaints.length > 1) {
      this.chiefComplaints.removeAt(this.chiefComplaints.length-1);
    }
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
    this.consultationService.postHealthLog(healthLog)
    .then((status: boolean) => {
      if(status){
        this.healthLogForm.markAsPristine(); //disables save until form is dirty
      }
      //code...
    })
    .catch(err => console.log(err));
  }
  ngOnInit() {
    this.consultationService.getHealthLog(this.aid)
    .then((healthLog: HealthLogForm) => {
      //if healthLog exists for the appointment already
      if (healthLog) {
        this.createEditForm(healthLog);
      }
      else{ //empty form otherwise
        this.createForm();
      }
    })
    .catch((err) => { console.log(err) });
  }
}
