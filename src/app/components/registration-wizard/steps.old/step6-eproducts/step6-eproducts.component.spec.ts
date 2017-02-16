/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Step6EProductsComponent } from './step6-eproducts.component';

describe('Step6EProductsComponent', () => {
  let component: Step6EProductsComponent;
  let fixture: ComponentFixture<Step6EProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step6EProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step6EProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
