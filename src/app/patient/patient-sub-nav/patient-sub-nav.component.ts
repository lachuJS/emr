import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Track } from '../patient-track/track';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-sub-nav',
  templateUrl: './patient-sub-nav.component.html',
  styleUrls: ['./patient-sub-nav.component.css']
})
export class PatientSubNavComponent implements OnInit {
  track: Track;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.track = new Track();
  }
  selectAll() {
    this.track.checkAll();
    this.rebuildQueryParams();
  }
  rebuildQueryParams(){
    this.router.navigate(['./track'],{ relativeTo: this.activatedRoute ,queryParams : this.track.buildQueryParams() });
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query) => {
      this.track.setQueryParams(query);
    });
  }
}
