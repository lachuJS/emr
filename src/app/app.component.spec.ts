/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppointmentsService } from './dashboard/appointments.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent
      ],
      imports: [ PipeModule ],
      providers: [ AppointmentsService ]
    })
    .overrideComponent(DashboardComponent,{
      set: {
        template: `<div id="dashboard-container"></div>`
      }
    })
    .compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should display dashboad container',() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    let de = fixture.debugElement.query(By.css('#dashboard-container'));
    expect(de).toBeTruthy();
  });
});
