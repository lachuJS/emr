/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryComponent } from './history.component';

import { HistoryService } from './history.service';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let historyService: HistoryService;
  let expectedHistory: History;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      providers: [ HistoryService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;

    expectedHistory = {dm:true,htn:false,ba:false,thyroid:true,seizures:false,presentingIllness:'lorem ipsum'};

    //stub service
    historyService = fixture.debugElement.injector.get(HistoryService);
    spy = spyOn(historyService,'getHistory')
    .and.returnValue(Promise.resolve(expectedHistory));

    //stub input
    component.hid = 2;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should display title History',() => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('h4'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual('History');
  });
  it('should display loading first',() => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.loading'));
    expect(de).toBeTruthy();
  });
  it('should hide loading after service returns',async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('.loading'));
      expect(de).toBeFalsy();
    });
  }));
  it('should not display history before service',() => {
    fixture.detectChanges()
    let de = fixture.debugElement.query(By.css('#history'));
    expect(de).toBeFalsy();
  });
  it('should display history after service',async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#history'));
      expect(de).toBeTruthy();
    });
  }));
  it('should display DM',async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      let de = fixture.debugElement.query(By.css('#dm'));
      expect(de).toBeTruthy();
    });
  }));
  it('should display thyroid',async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      let de = fixture.debugElement.query(By.css('#thyroid'));
      expect(de).toBeTruthy();
    })
  }));
  it('should not display htn',async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      let de = fixture.debugElement.query(By.css('#htn'));
      expect(de).toBeFalsy();
    });
  }));
  it('should display presenting illness after service',async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('#presenting-illness'));
      let el = de.nativeElement;
      expect(el.textContent).toEqual(expectedHistory.presentingIllness);
    });
  });
}));
