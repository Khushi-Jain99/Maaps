import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniMeetComponent } from './alumni-meet.component';

describe('AlumniMeetComponent', () => {
  let component: AlumniMeetComponent;
  let fixture: ComponentFixture<AlumniMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
