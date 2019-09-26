import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrootComponent } from './mainroot.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainrootComponent', () => {
  let component: MainrootComponent;
  let fixture: ComponentFixture<MainrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainrootComponent ],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
