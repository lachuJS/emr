import { Component, OnInit,Input } from '@angular/core';

import { Err } from './err';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() err: Err;
  constructor() { }

  ngOnInit() {}

}
