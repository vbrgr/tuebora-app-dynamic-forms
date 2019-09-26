import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TueSidebarComponent } from './tue-sidebar.component';

describe('TueSidebarComponent', () => {
  let component: TueSidebarComponent;
  let fixture: ComponentFixture<TueSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TueSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TueSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
