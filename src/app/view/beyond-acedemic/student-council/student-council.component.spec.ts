import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCouncilComponent } from './student-council.component';

describe('StudentCouncilComponent', () => {
  let component: StudentCouncilComponent;
  let fixture: ComponentFixture<StudentCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
