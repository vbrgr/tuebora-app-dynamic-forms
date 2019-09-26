import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodelComponent } from './datamodel.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('DatamodelComponent', () => {
  let component: DatamodelComponent;
  let fixture: ComponentFixture<DatamodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamodelComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
