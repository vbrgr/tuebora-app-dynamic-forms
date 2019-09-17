import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideHoverComponent } from './nav-side-hover.component';

describe('NavSideHoverComponent', () => {
  let component: NavSideHoverComponent;
  let fixture: ComponentFixture<NavSideHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
