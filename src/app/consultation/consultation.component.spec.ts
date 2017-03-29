/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConsultationComponent } from './consultation.component';
import { PatientComponent } from './patient/patient.component';
import { HistoryComponent } from './history/history.component';
import { HealthLogComponent } from './health-log/health-log.component';
import { HealthLogFormComponent } from './health-log-form/health-log-form.component';

import { ConsultationService } from './consultation.service';

describe('ConsultationComponent', () => {
  let component: ConsultationComponent;
  let fixture: ComponentFixture<ConsultationComponent>;
  let consultationService: ConsultationService;
  let consultationServiceGetPatientHistory;
  let consultationServiceGetLastHealthLogSpy;

  let expectedAppointment = {
    aid: 23,
    patient: {
      name: 'lorem',
      hid: 12,
      gender: true,
      dob: '1995-08-17'
    }
    followUp: true
  }
  let expectedHistory = {dm:true,htn:false,ba:false,thyroid:true,seizures:false,presentingIllness:'lorem ipsum'};
  let expectedHealthLogForm = {
    chiefComplaints: ['lorem'],
    examination: 'concious',
    //form builder replaces undefined with null values
    vitals: {
      pr:1,
      bp:1,
      rr:1,
      temp:1
    },
    systemicExamination: {
      cvs:1,
      rs:1,
      cns:1,
      pa:1
    },
    le:'lazy brown fox jumped',
    finalDiagnosis:'lrem ipsum',
    nextFollowUp: '1995-08-17',
    prescription: ['lorem 25mg']
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConsultationComponent,
        PatientComponent,
        HistoryComponent,
        HealthLogFormComponent,
        HealthLogComponent
      ],
      imports: [
        PipeModule,
        ReactiveFormsModule,
        CommonModule
      ],
      providers: [ ConsultationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationComponent);
    component = fixture.componentInstance;

    //spies
    consultationService = fixture.debugElement.injector.get(ConsultationService);
    consultationServiceGetPatientHistory = spyOn(consultationService,'getPatientHistory')
    .and.returnValue(Promise.resolve(expectedHistory));
    consultationServiceGetLastHealthLogSpy = spyOn(consultationService,'getLastHealthLog')
    .and.returnValue(Promise.resolve(expectedHealthLogForm));

    component.appointment = expectedAppointment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create patient component',() => {
    let de = fixture.debugElement.query(By.css('#patient-container'));
    expect(de).toBeTruthy();
  });
  //patient-history
  it('should call getLastHealthLog on click last healthlog',() => {
    let de = fixture.debugElement.query(By.css('a[href$="patient-history"]'));
    let el = de.nativeElement;
    el.click();
    expect(consultationServiceGetPatientHistory).toHaveBeenCalled();
  });
  it('should create history component',async(() => {
    let de = fixture.debugElement.query(By.css('a[href$="patient-history"]'));
    let el =  de.nativeElement;
    el.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#history-container'));
      expect(de).toBeTruthy();
    });
  }));
  //last healthlog
  it('should call getLastHealthLog on click load last healthlog',() => {
    let de = fixture.debugElement.query(By.css('a[href$="patient-healthlogs"]'));
    let el = de.nativeElement;
    el.click();
    expect(consultationServiceGetLastHealthLogSpy).toHaveBeenCalled();
  });
  it('should create health-logs component',async(() => {
    let de = fixture.debugElement.query(By.css('a[href$="patient-healthlogs"]'));
    let el = de.nativeElement;
    el.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#health-logs-container'));
      expect(de).toBeTruthy();
    });
  }));
  //healthlogform
  it('should create health-log-form component',() => {
    let de = fixture.debugElement.query(By.css('#health-log-form-container'));
    expect(de).toBeTruthy();
  });
});
