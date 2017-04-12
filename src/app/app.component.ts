import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebar: boolean;
  constructor() {
    this.sidebar = true; //show sidebar initially
  }
  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

  ngOnInit() {}
}
