import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondAcedemicComponent } from './beyond-acedemic.component';

describe('BeyondAcedemicComponent', () => {
  let component: BeyondAcedemicComponent;
  let fixture: ComponentFixture<BeyondAcedemicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondAcedemicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyondAcedemicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
