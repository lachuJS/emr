import { Component, OnInit, Input } from '@angular/core';

import { HealthLogService } from './health-log.service';

import { HealthLogForm } from '../health-log-form/health-log-form.data-model';

@Component({
  selector: 'app-health-log',
  templateUrl: './health-log.component.html',
  styleUrls: ['./health-log.component.css']
})
export class HealthLogComponent implements OnInit {
  @Input() appointmentId;
  healthLogs: Array<HealthLogForm>;
  constructor(
    private healthLogService: HealthLogService
  ) { }

  ngOnInit() {
    if(this.appointmentId){
      this.healthLogService.getHealthLogs(this.appointmentId)
      .then((healthLogs) => {
        this.healthLogs = healthLogs;
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }

}
