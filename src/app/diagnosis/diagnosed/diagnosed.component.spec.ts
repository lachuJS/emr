/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiagnosedComponent } from './diagnosed.component';

import { Diagnosed } from './diagnosed';

describe('DiagnosedComponent', () => {
  let component: DiagnosedComponent;
  let fixture: ComponentFixture<DiagnosedComponent>;
  let expectedDiagnosed: Diagnosed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosedComponent);
    component = fixture.componentInstance;
    expectedDiagnosed = new Diagnosed('lorem and ipsum');
    component.diagnosed = expectedDiagnosed;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title diagnosed',() => {
    let de = fixture.debugElement.query(By.css('h4'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual('Diagnosed');
  });
  it('should display diagnosed data',() => {
    let de = fixture.debugElement.query(By.css('#diagnosed-data'));
    let el = de.nativeElement;
    expect(el.textContent).toEqual(expectedDiagnosed.data);
  });
});
