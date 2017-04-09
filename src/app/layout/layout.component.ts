import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  sidebar: boolean;
  constructor() {
    this.sidebar = true; //show sidebar initially
  }
  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
  ngOnInit() {}
}
