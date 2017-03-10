/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipeModule } from '../pipes/pipe.module';

import { HealthLogComponent } from './health-log.component';
import { HistoryComponent } from '../history/history.component';
import { PatientComponent } from '../patient/patient.component';

import { HistoryService } from '../history/history.service';

import { Patient } from '../patient/patient';

describe('HealthLogComponent', () => {
  let component: HealthLogComponent;
  let fixture: ComponentFixture<HealthLogComponent>;
  let expectedPatient: Patient;
  //service doubles
  let historyServiceStub =  {
    getHistory: () => {
      return Promise.resolve({presentingIllness:'lorem ipsum'});
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HealthLogComponent,
        HistoryComponent,
        PatientComponent
      ],
      imports: [ PipeModule ],
      providers: []
    })
    //override history component history service
    .overrideComponent(HistoryComponent,{
        set: {
          providers: [{ provide: HistoryService, useValue: historyServiceStub }]
        }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthLogComponent);
    component = fixture.componentInstance;
    expectedPatient = new Patient('lorem',12,true,'17/08/1995');
    component.patient = expectedPatient;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create patient component',() => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#patient-container'));
    expect(de).toBeTruthy();
  });
  it('should create patient history component',() => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#history-container'));
    expect(de).toBeTruthy();
  });
});
