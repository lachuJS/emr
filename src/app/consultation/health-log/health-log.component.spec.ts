/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HealthLogComponent } from './health-log.component';

import { HealthLogService } from './health-log.service';

import { HealthLogForm } from '../health-log-form/health-log-form.data-model';

describe('HealthLogComponent', () => {
  let component: HealthLogComponent;
  let fixture: ComponentFixture<HealthLogComponent>;
  let healthLogService: HealthLogService;
  let healthLogServiceGetHealthLogsSpy;
  let expectedHealthLogs: Array<HealthLog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthLogComponent ],
      imports: [CommonModule],
      providers: [HealthLogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthLogComponent);
    component = fixture.componentInstance;

    //init
    expectedHealthLogs = [
      {
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
      },
      {
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
    ];

    //spy
    healthLogService = fixture.debugElement.injector.get(HealthLogService);
    healthLogServiceGetHealthLogsSpy = spyOn(healthLogService,'getHealthLogs');
    //set return value
    healthLogServiceGetHealthLogsSpy.and.returnValue(Promise.resolve(expectedHealthLogs));

  });

  it('should call getHealthLogs on init', async(() => {
    component.appointmentId = 1;
    fixture.detectChanges();
    expect(healthLogServiceGetHealthLogsSpy).toHaveBeenCalledWith(1);
  }));
  it('should get healthLogs set after service returns',async(() => {
    component.appointmentId = 1;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.healthLogs).toEqual(expectedHealthLogs);
    })
  }));
  it('should create health-logs-container',async(() => {
    component.appointmentId = 1;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#health-logs-container'));
      expect(de).toBeTruthy();
    });
  }));
  it('should not create call getHealthLogs if appointmentId is null',() => {
    component.appointmentId = null;
    fixture.detectChanges();
    expect(healthLogServiceGetHealthLogsSpy).not.toHaveBeenCalled();
  });
  it('should not create health-logs-container if appointmentId is null',() => {
    component.appointmentId = null;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#health-logs-container'));
    expect(de).toBeFalsy();
  })

  //check all elements exist with expectedHealthLogs[1]
  describe('elements',() => {

      beforeEach(async(() => {
        component.appointmentId = 1;
        //create healthlogs
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
        });
      }));

      it('should have complaint list item',() => {
        let de = fixture.debugElement.query(By.css('.complaint'));
        expect(de).toBeTruthy();
      });
      it('should have examination',() => {
        let de = fixture.debugElement.query(By.css('#examination'));
        expect(de).toBeTruthy();
      });
      it('should have vitals',() => {
        let de = fixture.debugElement.query(By.css('#vitals'));
        expect(de).toBeTruthy();
      });
      it('should have systemic-examination',() => {
        let de = fixture.debugElement.query(By.css('#systemic-examination'));
        expect(de).toBeTruthy();
      });
      it('shoulf have L/E',() => {
        let de = fixture.debugElement.query(By.css('#le'));
        expect(de).toBeTruthy();
      });
      it('should have follow-up',() => {
        let de = fixture.debugElement.query(By.css('#next-follow-up'));
        let el = de.nativeElement;
        expect(el.textContent).toEqual('August 17, 1995');
      });
      it('should have prescription ',() => {
        let de = fixture.debugElement.query(By.css('#prescription'));
        expect(de).toBeTruthy();
      });
  });

  describe('elements with validHealthLog',() => {
    let validHealthLogs: Array<HealthLog>;

    beforeEach(() => {
      validHealthLogs = [
        {
          chiefComplaints: [
            'fever',
            'nausea'
          ],
          examination: 'concious',
          prescription: [
            'pacimol',
            'crocin'
          ],
          finalDiagnosis: 'flu'
        }
      ]
      //change return value
      healthLogServiceGetHealthLogsSpy.and.returnValue(Promise.resolve(validHealthLogs));

    });
    beforeEach(async(() => {
      component.appointmentId = 1;
      //create healthlogs
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });
    }));

    it('should have chiefComplaints',() => {
      let de = fixture.debugElement.query(By.css('#chief-complaints'));
      expect(de).toBeTruthy();
    });
    it('should have examination',() => {
      let de = fixture.debugElement.query(By.css('#examination'));
      expect(de).toBeTruthy();
    })
    it('should not have vitals',() => {
      let de = fixture.debugElement.query(By.css('#vitals'));
      expect(de).toBeFalsy();
    });
    it('should not have systemic-examination',() => {
      let de = fixture.debugElement.query(By.css('#systemic-examination'));
      expect(de).toBeFalsy();
      it('should not have vitals',() => {
        let de = fixture.debugElement.query(By.css('#vitals'));
        expect(de).toBeFalsy();
      });
    });
    it('should not have le',() => {
      let de = fixture.debugElement.query(By.css('#le'));
      expect(de).toBeFalsy();
    });
    it('should have finalDiagnosis',() => {
      let de = fixture.debugElement.query(By.css('#final-diagnosis'));
      expect(de).toBeTruthy();
    });
    it('should have prescription',() => {
      let de = fixture.debugElement.query(By.css('#prescription'));
      expect(de).toBeTruthy();
    });
  });

});
