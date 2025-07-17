import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterSchoolComponent } from './inter-school.component';

describe('InterSchoolComponent', () => {
  let component: InterSchoolComponent;
  let fixture: ComponentFixture<InterSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
