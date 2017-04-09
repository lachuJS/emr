import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PatientService } from '../patient.service';

import { HealthLogForm } from '../patient-health-log-form/patient-health-log-form.data-model';

export interface Track {
    bp: boolean,
    pr: boolean,
    rr: boolean,
    temp: boolean,
    cvs: boolean,
    rs: boolean,
    cns: boolean,
    pa: boolean,
    finalDiagnosis: boolean
}

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  history: Array<HealthLogForm>;
  //default tracked data
  track: Track;

  rebuildQueryParams(){
    let updatedTrack = '';
    Object.getOwnPropertyNames(this.track).map((datum) => {
      if(this.track[datum]){//if track.datum is true
        updatedTrack = updatedTrack + datum + ',';
      }
    });
    updatedTrack = updatedTrack.slice(0,-1) //slice the last comma
    //apply updated queryParams
    this.router.navigate(['./'],{ relativeTo: this.activatedRoute, queryParams: { track: updatedTrack } });
  }

  //naive method
  shouldBeTracked (healthLog: HealthLogForm) {
    //bp
    if(this.track.bp && healthLog.vitals.bp) {
      return true
    }
    else if(this.track.rr && healthLog.vitals.rr){
      return true;
    }
    else if(this.track.pr && healthLog.vitals.pr){
      return true;
    }
    else if(this.track.temp && healthLog.vitals.temp){
      return true;
    }
    else if(this.track.cvs && healthLog.systemicExamination.cvs){
      return true;
    }
    else if(this.track.rs && healthLog.systemicExamination.rs){
      return true;
    }
    else if(this.track.cns && healthLog.systemicExamination.cns){
      return true;
    }
    else if(this.track.pa && healthLog.systemicExamination.pa){
      return true;
    }
    else if(this.track.finalDiagnosis && healthLog.finalDiagnosis){
      return true;
    }
    else{ //nothing is this.tracked and nothing exists
      return false;
    }
  }
  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.track = {
      bp: false,
      pr: false,
      rr: false,
      temp: false,
      cvs: false,
      rs: false,
      cns: false,
      pa: false,
      finalDiagnosis: false
    }
  }
  ngOnInit() {
    this.patientService.getHistory()
    .then((history: Array<HealthLogForm>) => {
      this.history = history;
    })
    .catch((err) => { console.log(err)  });
    //get queryParams
    this.activatedRoute.queryParams.subscribe((query) => {
      //get track values from url query params
      if(query['track'] && query['track'] != "") { //exits and not empty
        query['track'].split(',').map((datum) => {
          this.track[datum] = true;
        });
      }
      else{ //doesnt exist;
        this.track = {
          bp: false,
          pr: false,
          rr: false,
          temp: false,
          cvs: false,
          rs: false,
          cns: false,
          pa: false,
          finalDiagnosis: false
        };
      }
    });
  }

}
