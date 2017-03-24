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
  ngOnInit() {}
}
