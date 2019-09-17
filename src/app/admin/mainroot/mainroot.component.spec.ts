import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrootComponent } from './mainroot.component';

describe('MainrootComponent', () => {
  let component: MainrootComponent;
  let fixture: ComponentFixture<MainrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainrootComponent ]
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
