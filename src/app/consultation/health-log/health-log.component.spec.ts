/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HealthLogComponent } from './health-log.component';

import { HealthLogForm } from '../health-log-form/health-log-form.data-model';

describe('HealthLogComponent', () => {
  let component: HealthLogComponent;
  let fixture: ComponentFixture<HealthLogComponent>;
  let expectedHealthLogs: Array<HealthLog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthLogComponent ],
      imports: [CommonModule]
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

    //stub Input
    component.healthLogs = expectedHealthLogs;
    fixture.detectChanges();
  });

  it('should create health-logs-container',async(() => {
    let de = fixture.debugElement.query(By.css('#health-logs-container'));
    expect(de).toBeTruthy();
  }));

  //check all elements exist with expectedHealthLogs[1]
  describe('elements',() => {

      beforeEach(async(() => {
        component.healthLogs = expectedHealthLogs;
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
        expect(el.textContent).toMatch('August 17, 1995');
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
      //stub Input
      component.healthLogs = validHealthLogs;
      fixture.detectChanges();
    });

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
    });
    it('should not have vitals',() => {
      let de = fixture.debugElement.query(By.css('#vitals'));
      expect(de).toBeFalsy();
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
