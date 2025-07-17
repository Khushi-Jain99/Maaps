import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCalenderComponent } from './school-calender.component';

describe('SchoolCalenderComponent', () => {
  let component: SchoolCalenderComponent;
  let fixture: ComponentFixture<SchoolCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
