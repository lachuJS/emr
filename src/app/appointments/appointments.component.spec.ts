/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';

import { DashboardService } from './dashboard.service';

import { Doctor } from './doctor/doctor';

xdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let expectedDoctor: Doctor;
  let expectedAppointments: Array<Appointment>;
  let dashboardService: DashboardService;
  let dashboardServiceGetDoctorSpy, dashboardServiceGetAppointmentsSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DoctorComponent
      ],
      imports: [
        PipeModule,
        ReactiveFormsModule
      ],
      providers: [ DashboardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    expectedDoctor = {
      name: 'doctor_name',
      bio: 'MBBS'
    }
    expectedAppointments = [
      {
          aid: 1,
          patient: {
            name: 'lorem'
            hid: 9159151413,
          },
          dateTimeCreated: '2001-01-01'
      },
      {
          aid: 2,
          patient: {
            name: 'ipsum'
            hid: 9715641212,
          },
          dateTimeCreated: '2003-09-19'
      }
    ];

    dashboardService = fixture.debugElement.injector.get(DashboardService);
    dashboardServiceGetAppointmentsSpy = spyOn(dashboardService,'getAppointments');
    dashboardServiceGetAppointmentsSpy.and.returnValue(Promise.resolve(expectedAppointments));
    dashboardServiceGetDoctorSpy = spyOn(dashboardService,'getDoctor')
    .and.returnValue(Promise.resolve(expectedDoctor));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have dashboard container',() => {
    let de = fixture.debugElement.query(By.css('#dashboard-container'));
    expect(de).toBeTruthy();
  });

  it('should call getDoctor() on init',() => {
    expect(dashboardServiceGetDoctorSpy).toHaveBeenCalled();
  });

  it('should have doctor container',() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#doctor-container'));
      expect(de).toBeTruthy();
    })
  });

  it('should call getAppointments',async(() => {
    expect(dashboardServiceGetAppointmentsSpy).toHaveBeenCalled();
  }));

  it('should display appointmentsCount badge',async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('.panel-heading > .badge'));
      let el = de.nativeElement;
      expect(el.textContent).toEqual(component.appointments.length.toString());
    });
  }));

  describe('0 appointments',() => {
    let expectedAppointmentsEmpty: Array<Appointment>;
    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;

      expectedAppointmentsEmpty = [];
      dashboardServiceGetAppointmentsSpy.and.returnValue(Promise.resolve(expectedAppointmentsEmpty));

      fixture.detectChanges();
    });

    it('should have expectedAppointmentsEmpty on service return',async(() => {
      fixture.whenStable().then(() => {
        expect(component.appointments).toEqual(expectedAppointmentsEmpty);
      });
    }));
    it('should not have appointments list',async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.list-group'));
        expect(de).toBeFalsy();
      });
    }));
    it('should have a badge with 0',async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.badge'));
        let el = de.nativeElement;
        expect(el.textContent).toEqual(expectedAppointmentsEmpty.length.toString());
      });
    }));

  });

});
