import { Component, OnInit, Input } from '@angular/core';

import { Vital } from './vital';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  constructor() { }

  @Input() vital: Vital;

  ngOnInit() {
  }

}
