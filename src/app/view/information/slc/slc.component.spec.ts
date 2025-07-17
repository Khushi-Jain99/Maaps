import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcComponent } from './slc.component';

describe('SlcComponent', () => {
  let component: SlcComponent;
  let fixture: ComponentFixture<SlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
