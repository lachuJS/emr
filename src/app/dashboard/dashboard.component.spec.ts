/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ConsultationComponent } from '../consultation/consultation.component';

import { DashboardService } from './dashboard.service';

import { Appointment } from './appointment/appointment';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let expectedAppointments: Array<Appointment>;
  let dashboardService: DashboardService;
  let dashboardServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        AppointmentComponent,
        ConsultationComponent,
      ],
      imports: [
        PipeModule,
        ReactiveFormsModule
      ],
      providers: [ DashboardService ]
    })
    .overrideComponent(ConsultationComponent,{
      set: {
        template: `<div id="consultation-container"></div>`
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    expectedAppointments = [
      {
          count: 1,
          patient: {
            name: 'lorem'
            gender: true,
            dob: '1995-08-17'
            hid: 9159151413
          },
          followUp: true
      },
      {
          count: 2,
          patient: {
            name: 'ipsum'
            gender: false,
            dob: '1996-08-18'
            hid: 9715641212
          },
          followUp: false
      }
    ];

    dashboardService = fixture.debugElement.injector.get(DashboardService);
    dashboardServiceSpy = spyOn(dashboardService,'getAppointments')
    .and.returnValue(Promise.resolve(expectedAppointments));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have dashboard container',() => {
    let de = fixture.debugElement.query(By.css('#dashboard-container'));
    expect(de).toBeTruthy();
  });
  it('should have doctor info',() => {

  });
  it('should call getAppointments',async(() => {
    fixture.whenStable().then(() => {
      expect(component.appointments).toEqual(expectedAppointments);
    });
  }));
  it('should display two appointment containers',async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('.appointment-container').length).toEqual(expectedAppointments.length);
    });
  });
}));
