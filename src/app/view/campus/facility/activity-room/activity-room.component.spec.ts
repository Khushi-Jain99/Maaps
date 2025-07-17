import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRoomComponent } from './activity-room.component';

describe('ActivityRoomComponent', () => {
  let component: ActivityRoomComponent;
  let fixture: ComponentFixture<ActivityRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
