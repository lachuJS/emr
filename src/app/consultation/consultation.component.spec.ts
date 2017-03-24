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

import { HistoryService } from './history/history.service';
import { HealthLogService } from './health-log/health-log.service';
import { HealthLogFormService } from './health-log-form/health-log-form.service';

import { Consultation } from './consultation';

describe('ConsultationComponent', () => {
  let component: ConsultationComponent;
  let fixture: ComponentFixture<ConsultationComponent>;

  //child component service stubs
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
  let historyServiceStub = {
    getHistory: () => {
      return Promise.resolve(expectedHistory);
    }
  }
  let healthLogFormServiceStub = {
    postHealthLog: () => {
      return true;
    }
    getHealthLog: () => {
      return Promise.resolve(expectedHealthLogForm);
    }
    getLastHealthLog: () => {
      return Promise.resolve(expectedHealthLogForm);
    }
  }
  let healthLogServiceStub = {
    getHealthLogs: () => {
      return Promise.resolve([expectedHealthLogForm]);
    }
  }
  //===============================

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
      ]
    })
    .overrideComponent(HistoryComponent,{
      set: {
        providers: [{ provide:HistoryService, useValue:historyServiceStub }]
      }
    })
    .overrideComponent(HealthLogFormComponent,{
      set: {
        providers: [{ provide:HealthLogFormService, useValue:healthLogFormServiceStub }]
      }
    })
    .overrideComponent(HealthLogComponent,{
      set: {
        providers: [{ provide: HealthLogService, useValue:healthLogServiceStub }]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationComponent);
    component = fixture.componentInstance;

    component.consultation = {
      aid: 23,
      patient: {
        name: 'lorem',
        hid: 12,
        gender: true,
        dob: '1995-08-17'
      }
      followUp: true
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create patient component',() => {
    let de = fixture.debugElement.query(By.css('#patient-container'));
    expect(de).toBeTruthy();
  });
  it('should create history component',() => {
    let de = fixture.debugElement.query(By.css('#history-container'));
    expect(de).toBeTruthy();
  });
  it('should create health-logs component',() => {
    let de = fixture.debugElement.query(By.css('#health-logs-container'));
    expect(de).toBeTruthy();
  });
  it('should create health-log-form component',async(() => {
    fixture.whenStable().then(
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#health-log-form-container'));
      expect(de).toBeTruthy();
    )
  }));
});
