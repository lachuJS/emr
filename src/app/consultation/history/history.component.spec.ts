/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let expectedHistory: History;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;

    //stub input
    expectedHistory = {dm:true,htn:false,ba:false,thyroid:true,seizures:false,presentingIllness:'lorem ipsum'};

    component.history = expectedHistory;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title History',() => {
    let de = fixture.debugElement.query(By.css('.panel-heading'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch('History');
  });
  it('should display DM',() => {
    let de = fixture.debugElement.query(By.css('#dm'));
    expect(de).toBeTruthy();
  });
  it('should display thyroid',() => {
    let de = fixture.debugElement.query(By.css('#thyroid'));
    expect(de).toBeTruthy();
  });
  it('should not display htn',() => {
    let de = fixture.debugElement.query(By.css('#htn'));
    expect(de).toBeFalsy();
  });
  it('should display presenting illness',() => {
    let de = fixture.debugElement.query(By.css('#presenting-illness'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedHistory.presentingIllness);
  });
}));
