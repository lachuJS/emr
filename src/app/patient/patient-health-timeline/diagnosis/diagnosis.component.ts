import { Component, OnInit, Input } from '@angular/core';

import { DiagnosisLog } from '../log';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  @Input() diagnosisLog: DiagnosisLog;
  constructor() {}

  ngOnInit() {}

}
