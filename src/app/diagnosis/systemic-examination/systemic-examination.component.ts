import { Component, OnInit, Input } from '@angular/core';

import { SystemicExamination } from './systemic-examination';

@Component({
  selector: 'app-systemic-examination',
  templateUrl: './systemic-examination.component.html',
  styleUrls: ['./systemic-examination.component.css']
})
export class SystemicExaminationComponent implements OnInit {

  constructor() { }

  @Input() systemicExamination: SystemicExamination;

  ngOnInit() {
  }

}
