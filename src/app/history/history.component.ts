import { Component, OnInit, Input } from '@angular/core';

import { HistoryService } from './history.service';

import { History } from './history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: History;
  @Input() hid: number;

  constructor(
    private historyService: HistoryService
  ) {}
  ngOnInit() {
    this.historyService.getHistory(this.hid)
    .then((history: History) => {
      this.history = history;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
