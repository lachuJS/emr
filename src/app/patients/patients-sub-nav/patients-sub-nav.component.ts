import { Component, OnInit } from '@angular/core';

import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients-sub-nav',
  templateUrl: './patients-sub-nav.component.html',
  styleUrls: ['./patients-sub-nav.component.css']
})
export class PatientsSubNavComponent implements OnInit {
  appointmentsCount: number;
  pinnedCount: number;
  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit() {
    //badges
    this.patientsService.appointmentsCount.subscribe((value: number) => {
      this.appointmentsCount = value;
    });
    this.patientsService.pinnedCount.subscribe((value: number) => {
      this.pinnedCount = value;
    });
  }

}
