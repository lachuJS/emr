import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Track } from '../patient-track/track';

@Component({
  selector: 'app-patient-track-action',
  templateUrl: './patient-track-action.component.html',
  styleUrls: ['./patient-track-action.component.css']
})
export class PatientTrackActionComponent implements OnInit {
  track: Track;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.track = new Track();
    //show all initially
    this.track.checkAll();
    this.rebuildQueryParams();
  }
  selectAll() {
    this.track.checkAll();
    this.rebuildQueryParams();
  }
  unselectAll() {
    this.track.clear();
    this.rebuildQueryParams();
  }
  rebuildQueryParams(){
    this.router.navigate(['./'],{ relativeTo: this.activatedRoute ,queryParams : this.track.buildQueryParams() });
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query) => {
      this.track.setQueryParams(query);
    });
  }

}
