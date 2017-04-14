import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PatientService } from '../patient.service';

import { HealthLogForm } from '../patient-health-log-form.data-model';
import { Track } from './track';

@Component({
  selector: 'app-patient-track',
  templateUrl: './patient-track.component.html',
  styleUrls: ['./patient-track.component.css']
})
export class PatientTrackComponent implements OnInit {
  history: Array<HealthLogForm>;
  //default tracked data
  track: Track;

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
    private activatedRoute: ActivatedRoute
  ) {
    this.track = new Track();
  }
  ngOnInit() {
    this.patientService.getHistory()
    .then((history: Array<HealthLogForm>) => {
      this.history = history;
    })
    .catch((err) => { console.log(err)  });
    //subscribe to route and set track
    this.activatedRoute.queryParams.subscribe((query) => {
      this.track.setQueryParams(query);
    });
  }

}
