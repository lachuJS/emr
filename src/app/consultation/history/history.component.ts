import { Component, OnInit, Input } from '@angular/core';

import { History } from './history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() history: History;

  constructor() {}
  ngOnInit() {}

}
