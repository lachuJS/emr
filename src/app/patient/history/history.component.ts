import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PatientService } from '../patient.service';

import { HealthLogForm } from '../health-log-form/health-log-form.data-model';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: Array<HealthLogForm>;

  //default tracked data
  track = {
    bp : true,
    rr : true,
    pr : true,
    temp : true,
    cvs :  true,
    rs : true,
    cns : true,
    pa : true,
    finalDiagnosis : true
  }

  //naive method
  shouldBeTracked (healthLog: HealthLogForm) {
    //bp
    if(this.track['bp'] && healthLog.vitals.bp) {
      return true
    }
    else if(this.track['rr'] && healthLog.vitals.rr){
      return true;
    }
    else if(this.track['pr'] && healthLog.vitals.pr){
      return true;
    }
    else if(this.track['temp'] && healthLog.vitals.temp){
      return true;
    }
    else if(this.track['cvs'] && healthLog.systemicExamination.cvs){
      return true;
    }
    else if(this.track['rs'] && healthLog.systemicExamination.rs){
      return true;
    }
    else if(this.track['cns'] && healthLog.systemicExamination.cns){
      return true;
    }
    else if(this.track['pa'] && healthLog.systemicExamination.pa){
      return true;
    }
    else if(this.track['finalDiagnosis'] && healthLog.finalDiagnosis){
      return true;
    }
    else{ //nothing is this.tracked and nothing exists
      return false;
    }
  }
  constructor(
    private patientService: PatientService
  ) {}
  ngOnInit() {
    this.patientService.getHistory()
    .then((history: Array<HealthLogForm>) => {
      this.history = history;
    })
    .catch((err) => { console.log(err)  });
  }

}
