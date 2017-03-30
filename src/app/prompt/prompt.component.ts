import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  @Input() message: { title: string, body: string };
  @Output() response = new EventEmitter();
  constructor() { }

  logResponse(res: boolean): void {
    this.response.emit(res);
  }
  ngOnInit() {
  }

}
