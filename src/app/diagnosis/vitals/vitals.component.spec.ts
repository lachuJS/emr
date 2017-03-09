/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VitalsComponent } from './vitals.component';
import { Vital } from './vital';

describe('VitalsComponent', () => {
  let component: VitalsComponent;
  let fixture: ComponentFixture<VitalsComponent>;
  let expectedVitals:  Vital;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalsComponent);
    component = fixture.componentInstance;
    expectedVitals = new Vital(1,1,1,1);
    component.vital = expectedVitals;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title vitals',() => {
    let de = fixture.debugElement.query(By.css('h4'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual('Vitals');
  });
  it('should display PR',() => {
    let de = fixture.debugElement.query(By.css('#pr'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedVitals.pr));
  });
  it('should display BP',() => {
    let de = fixture.debugElement.query(By.css('#bp'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedVitals.bp));
  });
  it('should display RR',() => {
    let de = fixture.debugElement.query(By.css('#rr'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedVitals.rr));
  });
  it('should display Temp',() => {
    let de = fixture.debugElement.query(By.css('#temp'));
    let el = de.nativeElement;
    expect(el.textContent).toMatch(new RegExp(expectedVitals.temp));
  });
});
