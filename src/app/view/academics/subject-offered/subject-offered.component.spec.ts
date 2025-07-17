import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectOfferedComponent } from './subject-offered.component';

describe('SubjectOfferedComponent', () => {
  let component: SubjectOfferedComponent;
  let fixture: ComponentFixture<SubjectOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectOfferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
