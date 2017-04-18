import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Prescription, DosageInstruction } from './prescription';
import { TillDatePipe } from '../../pipes/till-date.pipe';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-prescription-form',
  templateUrl: './patient-prescription-form.component.html',
  styleUrls: ['./patient-prescription-form.component.css']
})
export class PatientPrescriptionFormComponent implements OnInit {
  prescriptionForm: FormGroup;
  tillDatePipe: TillDatePipe = new TillDatePipe();
  get prescriptions() {
    return this.prescriptionForm.get('prescriptions') as FormArray;
  }
  constructor(
    private patientService: PatientService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.prescriptionForm = this.fb.group({
      prescriptions : this.fb.array([])
    })
    this.addPrescription();
  }
  addPrescription() {
    this.prescriptions.push(this.fb.group({
      drug: undefined,
      quantity: undefined,
      dosageInstruction: this.fb.group({
        morning : null,
        afternoon: null,
        night: null,
        beforeFood: null,
        numberDays: null, //tillDate in prescription interface
        vernacularNote: null
      })
    }));
  }
  removePrescription(index: number) {
    this.prescriptions.removeAt(index);
  }
  captureForm() {
    const formModel = this.prescriptionForm.value;
    return formModel.prescriptions.map((prescription) => {
      return {
        drug : prescription.drug,
        quantity : prescription.quantity,
        dosageInstruction : {
          morning : prescription.dosageInstruction.morning,
          afternoon : prescription.dosageInstruction.afternoon,
          night : prescription.dosageInstruction.night,
          beforeFood : prescription.dosageInstruction.beforeFood,
          tillDate : this.tillDatePipe.transform(prescription.dosageInstruction.numberDays)
        }
      };
    })
  }
  saveForm() {
    const prescriptions = this.captureForm();
    this.patientService.postPrescriptions(prescriptions)
    .then((status: boolean) => {
      console.log(prescriptions);
    })
    .catch((err) => { console.log(err) });
  }
  ngOnInit() {
  }

}
