import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideToggleComponent } from './nav-side-toggle.component';

describe('NavSideToggleComponent', () => {
  let component: NavSideToggleComponent;
  let fixture: ComponentFixture<NavSideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
