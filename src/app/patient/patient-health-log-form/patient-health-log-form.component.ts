import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { HealthLogForm } from './patient-health-log-form.data-model';
import { Examination } from './patient-health-log-form.data-model';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-health-log-form',
  templateUrl: './patient-health-log-form.component.html',
  styleUrls: ['./patient-health-log-form.component.css']
})
export class PatientHealthLogFormComponent implements OnInit {
  healthLogForm: FormGroup;

  get chiefComplaints():  FormArray {
    return this.healthLogForm.get('chiefComplaints') as FormArray;
  }
  get prescription(): FormArray {
    return this.healthLogForm.get('prescription') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
  ) {}

  createForm(){
    //create form model with empty default/empty values
    this.healthLogForm = this.fb.group({
      chiefComplaints : this.fb.array([]),
      examination: 'concious',
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
      finalDiagnosis: '',
      presentingIllness: '',
      nextFollowUp: '',
      investigations: '',
      prescription: this.fb.array([])
    });
    this.addPrescriptionItem();
    this.addChiefComplaint();
  }
  //edit form to main healthlog of appointment
  createEditForm(healthLog: HealthLogForm) {
    this.healthLogForm = this.fb.group({
      chiefComplaints : this.fb.array(healthLog.chiefComplaints.map((chiefComplaint) => {
        return this.fb.group(chiefComplaint);
      })),
      examination : healthLog.examination,
      vitals : this.fb.group(healthLog.vitals),
      systemicExamination : this.fb.group(healthLog.systemicExamination),
      le : healthLog.le,
      finalDiagnosis : healthLog.finalDiagnosis,
      presentingIllness : healthLog.presentingIllness,
      nextFollowUp : healthLog.nextFollowUp,
      investigations : healthLog.investigations,
      prescription : this.fb.array(healthLog.prescription.map((prescriptionItem) => {
        return this.fb.group(prescriptionItem)
      }))
    });
  }
  //add remove buttons
  addPrescriptionItem(){
    this.prescription.push(
      this.fb.group({
        item: undefined,
        breakfast: undefined,
        lunch: undefined,
        dinner: undefined,
        beforeMeal: undefined
      })
    );
  }
  addChiefComplaint(){
    this.chiefComplaints.push(
      this.fb.group({
        complaint: undefined,
        duration: undefined
      })
    );
  }
  removePrescriptionItem(index: number){
    if(this.prescription.length > 1) {
      this.prescription.removeAt(index);
    }
  }
  removeChiefComplaint(index: number){
    if(this.chiefComplaints.length > 1) {
      this.chiefComplaints.removeAt(index);
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
      chiefComplaints: formModel.chiefComplaints.map((chiefComplaint) => {
        if(chiefComplaint.complaint || chiefComplaint.duration){
          return Object.assign({},chiefComplaint); //to avoid empty fields
        }
      }),
      examination: formModel.examination as Examination,
      vitals: Object.assign({},formModel.vitals),
      systemicExamination: Object.assign({},formModel.systemicExamination),
      le: formModel.le as string,
      finalDiagnosis: formModel.finalDiagnosis as string,
      presentingIllness : formModel.presentingIllness as boolean,
      nextFollowUp: formModel.nextFollowUp as string,
      investigations : formModel.investigations as string,
      prescription: formModel.prescription.map((prescriptionItem) => {
        if(prescriptionItem.item) {
          return Object.assign({},prescriptionItem); //to avoid empty fields
        }
      })
    }
  }
  submitForm() {
    const healthLog = this.prepareForm();
    this.patientService.postHealthLog(healthLog)
    .then((insertId: number) => {
      if(insertId){
        console.log(healthLog); //__remove__
        this.healthLogForm.markAsPristine(); //disables save until form is dirty
      }
      //code...
    })
    .catch(err => console.log(err));
  }
  ngOnInit() {
    this.patientService.getHealthLog()
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
