/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultationComponent } from './consultation/consultation.component';

import { DashboardService } from './dashboard/dashboard.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        ConsultationComponent
      ],
      imports: [ PipeModule ],
      providers: [ DashboardService ]
    })
    .overrideComponent(DashboardComponent,{
      set: {
        template: `<div id="dashboard-container"></div>`
      }
    })
    .overrideComponent(ConsultationComponent,{
      set: {
        template: `<div id="consultation-container"></div>`
      }
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should have dashboard component on init',() => {
    let de = fixture.debugElement.query(By.css('#dashboard-container'));
    expect(de).toBeTruthy();
  });
  it('should not have consultation component on init',() => {
    let de = fixture.debugElement.query(By.css('#consultation-container'));
    expect(de).toBeFalsy();
  });
});
