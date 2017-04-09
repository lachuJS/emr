import { Component, OnInit } from '@angular/core';

import { HealthLogForm } from '../patient-health-log-form/patient-health-log-form.data-model';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-health-logs',
  templateUrl: './patient-health-logs.component.html',
  styleUrls: ['./patient-health-logs.component.css']
})
export class PatientHealthLogsComponent implements OnInit {
  healthLogs: Array<HealthLogForm>;

  constructor(
    private patientService: PatientService
  ) {}
  //returns boolean for ngIf
  //for formGroups and formArray
  vitalsExists(healthLog: HealthLogForm) {
    let vitals = healthLog.vitals;
    if (vitals && (vitals.pr || vitals.bp || vitals.rr || vitals.temp)) {
      return true;
    }
    return false;
  }
  systemicExaminationExists(healthLog: HealthLogForm){
    let se = healthLog.systemicExamination;
    if(se && (se.cvs || se.rs || se.cns || se.pa)){
      return true;
    }
    return false;
  }
  //check if array exists anf length>0
  chiefComplaintsExists(healthLog: HealthLogForm) {
    let chiefComplaints = healthLog.chiefComplaints;
    if(chiefComplaints && chiefComplaints.length > 0){
      return true;
    }
    return false;
  }
  prescriptionExists(healthLog: HealthLogForm) {
    console.log(healthLog.prescription);
    let prescription = healthLog.prescription;
    if(prescription && prescription.length > 0){
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.patientService.getHealthLogs()
    .then((healthLogs: Array<HealthLogForm>) => {
      this.healthLogs = healthLogs;
    })
    .catch((err) => { console.log(err) });
  }
}
