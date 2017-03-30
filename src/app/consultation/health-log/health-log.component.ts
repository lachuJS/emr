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
  vitals(healthLog: HealthLogForm) {
    let vitals = healthLog.vitals;
    if (vitals && (vitals.pr || vitals.bp || vitals.rr || vitals.temp)) {
      return true;
    }
    return false;
  }
  systemicExamination(healthLog: HealthLogForm){
    let se = healthLog.systemicExamination;
    if(se && (se.cvs || se.rs || se.cns || se.pa)){
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
