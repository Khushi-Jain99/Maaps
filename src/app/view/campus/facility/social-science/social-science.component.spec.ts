import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialScienceComponent } from './social-science.component';

describe('SocialScienceComponent', () => {
  let component: SocialScienceComponent;
  let fixture: ComponentFixture<SocialScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
