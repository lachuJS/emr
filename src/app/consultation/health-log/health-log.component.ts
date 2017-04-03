import { Component, OnInit, Input } from '@angular/core';

import { HealthLogForm } from '../health-log-form/health-log-form.data-model';

@Component({
  selector: 'app-health-log',
  templateUrl: './health-log.component.html',
  styleUrls: ['./health-log.component.css']
})
export class HealthLogComponent implements OnInit {
  @Input() healthLogs: Array<HealthLogForm>;

  constructor() {}
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

  ngOnInit() {}
}
