import { Component, OnInit, Input } from '@angular/core';

import { Diagnosed } from './diagnosed';

@Component({
  selector: 'app-diagnosed',
  templateUrl: './diagnosed.component.html',
  styleUrls: ['./diagnosed.component.css']
})
export class DiagnosedComponent implements OnInit {

  constructor() { }

  @Input() diagnosed: Diagnosed;

  ngOnInit() {
  }

}
