import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Prescription, DosageInstruction } from './prescription';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-prescription-form',
  templateUrl: './patient-prescription-form.component.html',
  styleUrls: ['./patient-prescription-form.component.css']
})
export class PatientPrescriptionFormComponent implements OnInit {
  prescriptionForm: FormGroup;
  get prescription() {
    return this.prescriptionForm.get('prescription') as FormArray;
  }
  constructor(
    private patientService: PatientService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.prescriptionForm = this.fb.group({
      prescription : this.fb.array([])
    })
    this.addPrescription();
  }
  addPrescription() {
    this.prescription.push(this.fb.group({
      drug: undefined,
      quantity: undefined,
      dosageInstruction: this.fb.group(new DosageInstruction())
    }));
  }
  removePrescription(index: number) {
    this.prescription.removeAt(index);
  }
  captureForm() {
    const formModel = this.prescriptionForm.value;
    return formModel.prescription.map((each) => {
      return new Prescription(each);
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
