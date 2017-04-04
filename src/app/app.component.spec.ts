/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from './pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PromptComponent } from './prompt/prompt.component';

import { DashboardService } from './dashboard/dashboard.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        ConsultationComponent,
        PromptComponent
      ],
      imports: [
        PipeModule,
        AlertModule.forRoot()
      ],
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

});
