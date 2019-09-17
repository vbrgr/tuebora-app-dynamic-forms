import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoiconComponent } from './header-noicon.component';

describe('HeaderNoiconComponent', () => {
  let component: HeaderNoiconComponent;
  let fixture: ComponentFixture<HeaderNoiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNoiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNoiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
